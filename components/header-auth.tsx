"use client";

import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import {
  Autocomplete,
  AutocompleteItem,
  Divider,
} from "@nextui-org/react";
import { Search } from "react-feather";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import {
  TokenInfoDataBird,
  AutocompleteItemPropsBird,
  Wallet,
} from "../config/interface";
import { SharedSelection } from "../types/types";

import SpinnerLoading from "./spinnerLoading";
import FormButton from "./forms/button/button";

import apiClient from "@/app/utils/api/interceptor";
import { paths } from "@/config/config";
import SearchContext from "@/app/context/SearchContext";
import { tokenAgeInfoAll } from "@/app/(pages)/trading/info_token";
import { useToken } from "@/app/(pages)/trading/TokenContext";
import { CiStar } from "react-icons/ci";

export default function AuthHeader() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const [tokenDataLoading, setTokenDataLoading] = useState<boolean>(false);
  const { setTokenLoading } = useToken();
  const [loadingData, setLoadingData] = useState<TokenInfoDataBird | null>(
    null,
  );
  const [loadingDataName, setLoadingDataName] = useState([]);
  const [autocompleteItems, setAutocompleteItems] = useState<
    AutocompleteItemPropsBird[]
  >([]);

  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const clearButtonRef = useRef<HTMLButtonElement>(null);
  const [imageIcon, setImageIcon] = useState("");
  const [buttonloading, setButtonLoading] = useState(true);
  const [walletBalance, setWalletBalance] = useState<string | null>(null);
  const fetchTriggeredRef = useRef(false);
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  const { setSearchResponse, setTopSearchLoading } = context;

  useEffect(() => {
    if (clearButtonRef.current) {
      clearButtonRef.current.setAttribute(
        "data-visible",
        inputValue ? "true" : "false",
      );
    }
  }, [inputValue]);

  const handleInitialTokenFetch = useCallback(
    async (tokenId: string, chain: string) => {
      // if (fetchTriggeredRef.current) {
      //   return
      // }
      fetchTriggeredRef.current = true;
      try {
        setLoading(true);
        await fetchBackEndData(tokenId, chain, false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    let Apicalls = false;
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    let token_id = "";

    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    setWalletBalance("0.000");

    if (pathname.includes("/trading/sol")) {
      setSelectedItem("SOL");

      token_id =
        params.get("search") || "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr";
    } else if (pathname.includes("/trading/eth")) {
      setSelectedItem("ETH");
      token_id =
        params.get("search") || "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee";
    }

    if (token_id && !Apicalls) {
      handleInitialTokenFetch(
        token_id,
        pathname.includes("/trading/sol") ? "sol" : "eth",
      );
    } else if (
      !pathname.includes("/trading/sol") ||
      !pathname.includes("/trading/eth")
    ) {
      const chain = localStorage.getItem("chain") || "";

      setSelectedItem(chain.toLocaleUpperCase());
    }

    return () => {
      fetchTriggeredRef.current = false;
      Apicalls = true;
    };
  }, [pathname, searchParams, handleInitialTokenFetch]);

  useEffect(() => {
    if (inputValue.length > 25 && inputValue.length <= 44 && loadingData) {
      const formattedData: AutocompleteItemPropsBird = {
        token_id: loadingData.token_id,
        token_name: loadingData.token_name,
        token_symbol: loadingData.token_symbol,
        token_age: loadingData.token_age,
        chain_id: loadingData.chain_id,
        token_fdv: loadingData.token_fdv,
        token_price_usd: loadingData.token_price_usd,
        price_change_1_hour: loadingData.price_change_1_hour,
        price_change_24_hour: loadingData.price_change_24_hour,
        liquidity: loadingData.liquidity,
        liquidity_org: loadingData.liquidity_org,
        token_fdv_org: loadingData.token_fdv_org,
        price_change_5M: loadingData.price_change_5M,
        dex_id: loadingData.dex_id,
        price_change_6_hour: loadingData.price_change_6_hour,
        token_price_usd_org: loadingData.token_price_usd_org,
        volume_24h_usd: loadingData.volume_24h_usd,
        chain_img: loadingData.chain_img || "",

        socials: loadingData.socials || {},
      };

      setAutocompleteItems([formattedData]);
    } else {
      if (loadingDataName.length > 0) {
        const formattedDataArray = loadingDataName.map((item: any) => {
          return {
            token_id: item.token_id,
            token_name: item.token_name,
            token_symbol: item.token_symbol,
            token_age: item.token_age,
            chain_id: item.chain_id,
            token_fdv: item.token_fdv,
            token_price_usd: item.token_price_usd,
            price_change_1_hour: item.price_change_1_hour,
            price_change_24_hour: item.price_change_24_hour,
            liquidity: item.liquidity,
            liquidity_org: item.liquidity_org,
            token_fdv_org: item.token_fdv_org,
            price_change_5M: item.price_change_5M,
            dex_id: item.dex_id,
            price_change_6_hour: item.price_change_6_hour,
            token_price_usd_org: item.token_price_usd_org,
            volume_24h_usd: item.volume_24h_usd,
            socials: item.socials || {},
            chain_img: item.chain_img || "",
          };
        });

        setAutocompleteItems(formattedDataArray);
      } else {
        setAutocompleteItems([]);
      }
    }
  }, [inputValue, loadingData, loadingDataName]);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.currentTarget.value;

    setLoadingData(null)
    setSearchLoading(false)
    setLoadingDataName([])
    setInputValue(value)
    let chain = "";

    if (value.length > 25 && value.length <= 44) {
      if (value.startsWith("0x")) {
        chain = "eth";
        setImageIcon("/images/eth.svg");
      } else {
        chain = "sol";
        setImageIcon("/images/solana-sol-logo.svg");
      }

      setSearchLoading(true);

      await fetchTokenData(value, chain);

      setSearchLoading(false);
    } else {
      if (value.length > 2) {
        setSearchLoading(true);
        await fetchTokenData(value, chain);
        setSearchLoading(false);
      }
    }
  }

  const fetchTokenData = async (
    tokenID: string,
    chain: string,
  ): Promise<void> => {
    if (tokenID.length <= 25) {
      setLoadingDataName([]);
      const response = await apiClient.get(paths.token_info, {
        params: { token_id: tokenID, chain },
      });
      const tokenInfo = response.data;
      const tokenData = tokenInfo?.token_info || [];

      if (tokenData.length > 0) {
        setLoadingDataName(tokenData);
        setSearchLoading(false);
      } else {
        setLoadingDataName([]);
        setSearchLoading(false);
      }

      return;
    } else {
      setLoadingData(null);
      setTokenDataLoading(true);
      try {
        const response_token_info = await tokenAgeInfoAll(tokenID, chain);

        if (
          response_token_info.token_name !== "" &&
          response_token_info.token_symbol !== ""
        ) {
          if (
            response_token_info.chain_id === "ethereum" ||
            response_token_info.chain_id === "sol" ||
            response_token_info.chain_id === "eth" ||
            response_token_info.chain_id === "solana"
          ) {
            const tokenData: AutocompleteItemPropsBird = {
              token_id: response_token_info.token_id || "",
              token_name: response_token_info.token_name || "",
              token_symbol: response_token_info.token_symbol || "",
              token_age: response_token_info.token_age || "",
              chain_id: response_token_info.chain_id || "",
              token_fdv: response_token_info.token_fdv || "",
              token_fdv_org: response_token_info.token_fdv_org || "",
              token_price_usd: response_token_info.token_price_usd || "",
              price_change_1_hour:
                response_token_info.price_change_1_hour || "",
              price_change_24_hour:
                response_token_info.price_change_24_hour || "",
              price_change_5M: response_token_info.price_change_5M || "",
              price_change_6_hour:
                response_token_info.price_change_6_hour || "",
              token_price_usd_org:
                response_token_info.token_price_usd_org || "",
              liquidity: response_token_info.liquidity || "",
              liquidity_org: response_token_info.liquidity_org || "",
              dex_id: response_token_info.dex_id || "",
              volume_24h_usd: response_token_info.volume_24h_usd || "",
              socials: response_token_info.socials || {},
              chain_img: response_token_info.chain_img || "",
            };

            setLoadingData(tokenData);
          }
        } else {
          const response = await apiClient.get(paths.token_info, {
            params: { token_id: tokenID, chain },
          });

          if (response.data) {
            const tokenInfo = response.data;
            const tokenData = tokenInfo?.token_info.token_info_dex || {};

            if (tokenData.token_name !== "" && tokenData.token_symbol !== "") {
              if (
                tokenData.chain_id === 1 ||
                tokenData.chain_id === 1399811149
              ) {
                setLoadingData(tokenData);
                setSearchLoading(false);
              } else {
                setLoadingData(null);
                setSearchLoading(false);

                return;
              }
            } else {
              setLoadingData(null);
              setSearchLoading(false);
            }
          } else {
            console.warn("No data returned from API");
          }
        }
      } catch (error) {
        console.error("Error during fetchTokenData", error);
      } finally {
        setTokenDataLoading(false);
      }
    }
  };

  const fetchBackEndData = async (
    tokenID: string,
    chain: string,
    pageLoad: boolean = true,
  ) => {
    setButtonLoading(false);
    setTokenLoading(true);
    localStorage.setItem("chain", chain);
    try {
      inputValue.length > 25 && inputValue.length <= 44
        ? setLoading(true)
        : setLoading(false);

      const response = await apiClient.get(paths.token_info, {
        params: { token_id: tokenID, chain },
      });

      if (response.data) {
        const tokenInfo = response.data;
        const newUrl = `/trading/${chain}?search=${tokenID}&chain=${chain}&token_name=${tokenInfo?.token_info.token_info_dex?.token_name || ""}&token_symbol=${tokenInfo?.token_info?.token_info_dex?.token_symbol || ""}`;

        setSearchResponse(response.data || null);
        //setTokenData(response.data || null)
        localStorage.setItem(
          "sessionTimeLimit",
          tokenInfo?.token_info?.user_info?.expiry_time,
        );
        localStorage.setItem(
          "tokenName",
          tokenInfo?.token_info.token_info_dex?.token_name,
        );
        localStorage.setItem(
          "WalletAddress",
          tokenInfo?.token_info?.user_info?.wallet_address,
        );
        localStorage.setItem(
          "balance",
          tokenInfo?.token_info?.user_info?.balance,
        );

        localStorage.setItem(
          "tokenSymbol",
          tokenInfo?.token_info?.token_info_dex?.token_symbol,
        );

        if (chain === "eth") {
          localStorage.setItem("eth_tokenId", tokenID);
        } else {
          localStorage.setItem("sol_tokenId", tokenID);
        }

        setInputValue("");
        setSearchLoading(false);
        if (pageLoad) {
          router.push(newUrl);
        }
      } else {
        console.warn("No data returned", response.data);
      }
    } catch (error) {
      console.error("Error during fetchTokenData", error);
    } finally {
      setTokenDataLoading(false);
      setLoading(false);
      setTopSearchLoading(false);
      setButtonLoading(true);
      //setTokenLoading(false)
    }
  };

  const fetchBackEndDataSelected = async (tokenID: string, chain: string) => {
    setButtonLoading(false);
    setTokenLoading(true);
    localStorage.setItem("chain", chain);
    try {
      setLoading(inputValue.length > 25 && inputValue.length <= 44);

      const response = await apiClient.get(paths.token_info, {
        params: { token_id: tokenID, chain },
      });

      if (response.data) {
        const tokenInfo = response.data;

        setSearchResponse(response.data || null);
        //setTokenData(response.data || null)

        localStorage.setItem(
          "sessionTimeLimit",
          tokenInfo?.token_info?.user_info?.expiry_time,
        );
        localStorage.setItem(
          "tokenName",
          tokenInfo?.token_info.token_info_dex?.token_name,
        );
        localStorage.setItem(
          "WalletAddress",
          tokenInfo?.token_info?.user_info?.wallet_address,
        );
        localStorage.setItem(
          "balance",
          tokenInfo?.token_info?.user_info?.balance,
        );

        localStorage.setItem(
          "tokenSymbol",
          tokenInfo?.token_info?.token_info_dex?.token_symbol,
        );

        if (chain === "eth") {
          localStorage.setItem("eth_tokenId", tokenID);
        } else {
          localStorage.setItem("sol_tokenId", tokenID);
        }

        const newUrl = `/trading/${chain}?search=${tokenID}&chain=${chain}&token_name=${tokenInfo?.token_info.token_info_dex?.token_name || ""}&token_symbol=${tokenInfo?.token_info?.token_info_dex?.token_symbol || ""}`;

        router.push(newUrl);

        setInputValue("");
        setSearchLoading(false);
      } else {
        console.warn("No data returned from API");
      }
    } catch (error) {
      console.error("Error during fetchBackEndDataSelected", error);
    } finally {
      setTokenDataLoading(false);
      setLoading(false);
      setTopSearchLoading(false);
      setButtonLoading(true);
      setTokenLoading(false);
    }
  };

  const onSelectionChange = async (key: string | number | null) => {
    setLoading(true);
    const item = autocompleteItems.find((x) => x.token_id.toString() === key);

    if (!item) {
      setLoading(false);

      return;
    }
    const selectedTokenId: string = item?.token_id || "";

    const selectedTokenName: string = item.token_name || "";

    const tokenID = selectedTokenId;

    const tokenName = selectedTokenName;
    const inputLength = tokenID.length;
    const isEth = tokenID.startsWith("0x");
    const chain = isEth ? "eth" : "sol";

    const newUrl = `/trading/${chain}?search=${tokenID}&chain=${chain}&token_name=${tokenName}&token_symbol=${item?.token_symbol}`;

    router.push(newUrl);

    try {
      const tokenID = selectedTokenId;

      if (inputLength > 25 && inputLength <= 44) {
        try {
          setSearchLoading(true);
          setLoading(true);
          setTopSearchLoading(true);
          await fetchBackEndDataSelected(tokenID, chain);
        } catch (error) {
          console.error("Error during fetchTokenData", error);
        } finally {
          setTokenDataLoading(false);
          setTopSearchLoading(false);
          setLoading(false);
        }
      } else {
        console.log("error on fetchBackEndDataSelected");
      }
    } catch (error) {
      console.error("Error fetching token data:", error);
    } finally {
      setSearchLoading(false);
      setLoading(false);
      setTopSearchLoading(false);
    }
  };

  const handleKeyPress = useCallback(
    async (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();

        const tokenID = event.currentTarget.value.trim();
        const isEth = tokenID.startsWith("0x");
        const chain = isEth ? "eth" : "sol";
        const inputLength = tokenID.length;

        if (inputLength > 25 && inputLength <= 44) {
          setSearchLoading(true);
          setLoading(true);
          setTopSearchLoading(true);
          try {
            await fetchBackEndData(tokenID, chain);
          } catch (error) {
            console.error("Error during fetchTokenData", error);
          } finally {
            setTokenDataLoading(false);
            setLoading(false);
            setTopSearchLoading(false);
          }
        } else {
          console.warn("Input length not within expected range:", inputLength);
        }
      }
    },
    [pathname, router, fetchTokenData, setSearchResponse],
  );

  if (
    pathname === "/login" ||
    pathname === "/reset-password" ||
    pathname === "/signup" ||
    pathname === "/walletlogin" 
  ) {
    return null;
  }

  const handleClose = () => {
    setInputValue("")
    setLoadingDataName([])
    setLoadingData(null)
    if (document.activeElement && document.activeElement.tagName === "INPUT") {
      ;(document.activeElement as HTMLInputElement).blur()
    }
  }

  const handleRedirect = () => {
    let chain = localStorage.getItem("chain") || "eth";
    let tokenId = localStorage.getItem("eth_tokenId");
    let tokenName = localStorage.getItem("tokenName") || "Neiro";
    let tokenSymbol = localStorage.getItem("tokenSymbol") || "Neiro";

    if (chain == "eth") {
      if (!tokenId || !tokenName) {
        tokenId = "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee";
        tokenName = "Neiro";
        tokenSymbol = "Neiro";
      }
      const url = `/trading/${chain}?search=${tokenId}&chain=${chain}&token_name=${tokenName}&token_symbol=${tokenSymbol}`;

      router.push(url);
    }
  };
  const handleChainSwitch = async (
    tokenId: string,
    chain: string,
    tokenName: string,
    tokenSymbol: string,
  ) => {
    if (fetchTriggeredRef.current) {
      return;
    }

    fetchTriggeredRef.current = true;

    const newUrl = `/trading/${chain}?search=${tokenId}&chain=${chain}&token_name=${tokenName}&token_symbol=${tokenSymbol}`;

    //console.log("newUrl", newUrl);
    setSearchResponse(null);
    // setTokenData(null)
    router.push(newUrl);
    fetchTriggeredRef.current = false;
  };

  const handleSelectionChange = async (keys: SharedSelection) => {
    // console.log("handleSelectionChange called");
    let selectedKey;

    if (keys instanceof Set) {
      selectedKey = Array.from(keys)[0] || null;
    } else if (typeof keys === "object" && "currentKey" in keys) {
      selectedKey = keys.currentKey || null;
    }

    if (!selectedKey) {
      return;
    }

    setSelectedItem(selectedKey);

    let tokenId: string;
    let chain: string;
    let tokenName: string;
    let tokenSymbol: string;

    if (selectedKey === "SOL") {
      tokenId = "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr";
      chain = "sol";
      tokenName = "POPCAT";
      tokenSymbol = "POPCAT";
    } else if (selectedKey === "ETH") {
      tokenId = "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee";
      chain = "eth";
      tokenName = "Neiro";
      tokenSymbol = "Neiro";
    } else {
      return;
    }

    fetchTriggeredRef.current = false;
    handleChainSwitch(tokenId, chain, tokenName, tokenSymbol);
  };

  let selectedValue = pathname.includes("trading/eth") ? "ETH" : "SOL";

  const chain = searchParams.get("chain"); // This is for the settings Dropdown value needs to be set based on the selected chain.



 
  return (
    <Navbar
      isBordered
      classNames={{
        base: "header-top",
        wrapper: "header-container",
        brand: "header-logo",
      }}
      maxWidth="full"
    >

      <Autocomplete
        aria-label="autocomplete"
        classNames={{
          base: "auto-complete-base",
          listboxWrapper: `${autocompleteItems.length >= 4 ? "auto-complete-listbox-wrapper" : ""}`,
          selectorButton: "auto-complete-selector-button",
        }}
        clearButtonProps={{
          onPress: handleClose,
          ref: clearButtonRef,
        }}
        defaultItems={autocompleteItems}
        endContent={loading ? <SpinnerLoading pageLoading={false} /> : null}
        inputProps={{
          value: inputValue,

          onChange: handleInputChange,
          onKeyDown: handleKeyPress,
          classNames: {
            input: "ml-1",
            inputWrapper: "auto-complete-input-wrapper",
          },
        }}
        isClearable={true}
        listboxProps={{
          hideSelectedIcon: true,
          hideEmptyContent: true,

          itemClasses: {
            base: ["list-item-base"],
          },
        }}
        placeholder="Search by Token ID..."
        popoverProps={{
          offset: 3,
          classNames: {
            base: "rounded-large",
            content: "p-0 border-small border-default-100 bg-background",
          },
        }}
        radius="full"
        startContent={<Search />}
        variant="bordered"
        onSelectionChange={onSelectionChange}
      >
        {autocompleteItems.length === 0 && inputValue.trim() !== "" ? (
          <AutocompleteItem
            key="no-results"
            aria-label="no-result"
            textValue=""
          >
            {searchLoading ? (
              <SpinnerLoading pageLoading={false} />
            ) : (
              <div className="no-results-message">No results found</div>
            )}
          </AutocompleteItem>
        ) : (
          autocompleteItems.map((item, index) => (
            <AutocompleteItem
              key={item.token_id}
              aria-label="autocompleteitem"
              textValue={item.token_name}
            >
              <div
                className="flex font-size-12 flex-row text-white gap-2"
                role="button"
              >
                <div className="search-item-div">
                  <FormButton
                    isIconOnly
                    aria-label="image"
                    size="md"
                    variant="light"
                  >
                    {item.chain_img ? (
                      <Image
                        alt=""
                        height={25}
                        src={item.chain_img}
                        width={25}
                      />
                    ) : (
                      <Image alt="" height={25} src={imageIcon} width={25} />
                    )}
                  </FormButton>
                  <div className="gap-2">
                    <div className="flex">
                      {" "}
                      <span className="form-label font-size-12 trending-value-headers gap-2 font-semibold">
                        Token:
                      </span>
                      <span>
                        {item.token_id?.substring(0, 5)}....
                        {item.token_id?.substring(item.token_id.length - 4)}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="form-label font-size-12 trending-value-headers gap-2 font-semibold">
                        Name:
                      </span>
                      <span>{item.token_name}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Divider
                    orientation="vertical"
                    className="my-4 font-size-12 trending-value-headers"
                  />
                </div>
                <div className="label-width-48 flex flex-col flex-wrap gap-1">
                  <div className="flex flex-wrap flex-col gap-1">
                    <div className="flex gap-2">
                      <span className="form-label font-semibold font-size-12 trending-value-headers">
                        Age:
                      </span>
                      {item.token_age}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex gap-2">
                        <span className="form-label font-semibold font-size-12 trending-value-headers">
                          FDV:
                        </span>
                        ${item.token_fdv}
                      </div>
                      |
                      <div className="flex gap-2">
                        <span className="form-label font-size-12 trending-value-headers font-semibold">
                          Liquidity:
                        </span>
                        ${item.liquidity}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center">
                  <button>
                    <CiStar color="gold" className="watchlist-icon" size="sm" />
                  </button>
                </div> */}
              </div>
            </AutocompleteItem>
          ))
        )}
      </Autocomplete>
    </Navbar>
  );
}
