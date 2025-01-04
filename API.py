def addLiveCandles(request):
    try:
        response_data = []
        tok = request.GET.get('token_id')
        noSmooting = request.GET.get('noSmooting')
        if tok.startswith('0x'):
            tok = request.GET.get('token_id').lower()
        resolution = request.GET.get('resolution')
        previous_close_price = request.GET.get('last_close_price','')
        lastDefinedApiTime = request.GET.get('time')
        
        reducedTime = int(float(lastDefinedApiTime) / 1000)
        if resolution == '1':
            ws_res = 'r1'
        elif resolution == '5':
            ws_res = 'r5'
        elif resolution == '15':
            ws_res = 'r15'
        elif resolution == '30':
            ws_res = 'r30'
        elif resolution == '60':
            ws_res = 'r60'
        elif resolution == '240':
            ws_res = 'r240'
        else:
            return JsonResponse({"response_data": []})       
                
        org_token_id='0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
        if tok.startswith('0x'):
            table = 'swap_events'
            connection_name = 'tradingEth'
            org_token_id='0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
        else:
            table = 'sol_swap_events'
            connection_name = 'trading'
            tok = request.GET.get('token_id')
            org_token_id='So11111111111111111111111111111111111111112'
        if resolution == '1':
            res = '60S'
        elif resolution == '5':
            res = '300S'
        elif resolution == '15':
            res = '900S'
        elif resolution == '30':
            res = '1800S'
        elif resolution == '60':
            res= '3600s'
        elif resolution == '240':
            res = '14400s'
        else:
            return JsonResponse({"response_data": []})
        # tok = '0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee'
        token_id = "'" + tok + "'"       
            
        sql = f'''
                SELECT created_at, token0_value_in_usd ,token0_total_exchanged_usd as vol
                FROM {table} se 
                WHERE token0_id = {token_id}
                AND created_at > (CURRENT_TIMESTAMP AT TIME ZONE 'UTC') - INTERVAL '30  minutes'  and token0_total_exchanged_usd <10000000 --------------------#1)  Hardcode 30 mins 
                and token1_id='{org_token_id}'
                union 
                select created_at,token1_value_in_usd ,token1_total_exchanged_usd
                from {table} se 
                WHERE token1_id = {token_id}
                AND created_at > (CURRENT_TIMESTAMP AT TIME ZONE 'UTC') - INTERVAL '30  minutes' and token0_total_exchanged_usd <10000000 --------------------#1)  Hardcode 30 mins 
                and token0_id='{org_token_id}'
                    '''
        # print(f"table==========>{table}")
        # print(f"token_id==========>{token_id}")
        # print(f"org_token_id==========>{org_token_id}")
        with connections[connection_name].cursor() as cursor:
            cursor.execute(sql)
            query_data = cursor.fetchall()
        
        if query_data:
            columns = [col[0] for col in cursor.description]
            df = pd.DataFrame(query_data, columns=columns)
            df=df[df['vol']>0]
            if(len(df)>0):
                if noSmooting == '1':
                    Q1 = df['token0_value_in_usd'].astype(float).quantile(0.05)
                    Q3 = df['token0_value_in_usd'].astype(float).quantile(0.95)
                else:
                    Q1 = df['token0_value_in_usd'].astype(float).quantile(0.25)
                    Q3 = df['token0_value_in_usd'].astype(float).quantile(0.75)
                IQR = Q3 - Q1
                # Define the lower and upper bounds
                lower_bound = Q1 - 1.5 * IQR
                upper_bound = Q3 + 1.5 * IQR
                # Filter out values outside the bounds
                df_filtered1 = df[(df['token0_value_in_usd'] >= lower_bound) & (df['token0_value_in_usd'] <= upper_bound)]
                if(len(df_filtered1)>0):
                   
                    # print(f"before filter df_filtered1===>{df_filtered1}")
                    df_filtered1['created_at'] = pd.to_datetime(df_filtered1['created_at'], unit='s')
                    # df.set_index('created_at', inplace=True)
                    
                    df_filtered1.sort_values(by=['created_at'],inplace=True) ### 1) 
                    df_filtered1.set_index('created_at', inplace=True) ###2 
                    df_resampled = df_filtered1.sort_index().resample(res).agg({'token0_value_in_usd': ['first', 'last', 'max', 'min'],'vol':'sum'})
                    
                    df_resampled.columns = ['open', 'close', 'high', 'low', 'vol']
                    if(len(df_resampled)>0):
                        df_resampled['open'] = df_resampled['open'].astype(float)
                        df_resampled['close'] = df_resampled['close'].astype(float)
                        df_resampled['high'] = df_resampled['high'].astype(float)
                        df_resampled['low'] = df_resampled['low'].astype(float)
                        df_resampled['vol'] = df_resampled['vol'].astype(float)
                        
                        
                        df_resampled['high'] = np.where(
                            df_resampled['close'] >= df_resampled['open'],  ##green candle
                            np.where(df_resampled['high'] > 1.1 * df_resampled['close'], 1.1 * df_resampled['close'],
                                     df_resampled['close']),
                            np.where(df_resampled['high'] > 1.1 * df_resampled['open'], 1.1 * df_resampled['open'],
                                     df_resampled['open'])  ##redcandle
                        )                        df_resampled['low'] = np.where(
                            df_resampled['close'] >= df_resampled['open'],
                            np.where(df_resampled['low'] < (.99 * df_resampled['open']), (0.99 * df_resampled['open']),
                                     df_resampled['low']),  ##green candle
                            np.where(df_resampled['low'] < (.99 * df_resampled['close']), (.99 * df_resampled['close']),
                                     df_resampled['low'])  ##redcandle
                        )
                        df_resampled = df_resampled[df_resampled['vol'] > 0]
                        
                        df_resampled.iloc[1:, df_resampled.columns.get_loc('open')] = df_resampled['close'].shift(1).iloc[1:]  #DB data 
                        
                        
                        df_resampled5 = df_resampled.reset_index()
                        df_resampled1 = df_resampled5.sort_values(by='created_at', ascending=False)
                                                df_resampled1['time'] = df_resampled1['created_at'].apply(lambda x: int(x.timestamp() * 1000))  
                        
                        df_resampled1 = df_resampled1[df_resampled1['time'] >= int(lastDefinedApiTime)]                        # Proceed if the filtered DataFrame is not empty
                        if not df_resampled1.empty:
                            if previous_close_price:
                                # Update the 'open' column of the first row safely
                                df_resampled1.loc[df_resampled1.index[0], 'open'] = previous_close_price                            # Fill NaNs with empty strings and convert to strings
                            df_resampled3 = df_resampled1.fillna("").astype(str)                            # Get the first row as a dictionary and append to response_data
                            df_resampled2 = df_resampled3.iloc[0]
                            response_data.append(df_resampled2.to_dict())
                else:
                    print("empty quantile result in live candle")
            else:
                print("empty vloume result in live candle")
        else:
            print("empty query result in live candle")
       
        return JsonResponse({"response_data": json.dumps(response_data)})
    except Exception as e:
        print(f"error in chart data {e}")
        return JsonResponse({"response_data": []})