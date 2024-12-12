"use client";
import { createContext, useState, ReactNode, useContext } from "react";
import {SearchContextType ,SearchProviderProps} from "../../config/interface"

const SearchContext = createContext<SearchContextType | any>(null);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchResponse, setSearchResponse] = useState<any>(null);
  const [isTopSearchLoading, setTopSearchLoading] = useState<boolean>(true);
  const [isWalletInfo,setWalletInfo ] = useState<boolean>(false);


  return (
    <SearchContext.Provider
      value={{
        searchResponse,
        setSearchResponse,
        isTopSearchLoading,
        setTopSearchLoading,
        isWalletInfo,
        setWalletInfo,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

export default SearchContext;
