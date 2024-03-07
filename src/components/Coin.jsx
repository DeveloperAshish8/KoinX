import axios from "axios";
import React, { useEffect, useState } from "react";
import { Baseurl } from "../baseURL";
import {
  BsCaretDownFill,
  BsCaretUpFill,
  BsCaretUpSquareFill,
} from "react-icons/bs";

const Coin = () => {
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${Baseurl}/search/trending`);
        console.log(data.coins);
        setExchanges(data.coins);
      } catch (error) {
        console.log("API LIMIT EXCEED");
      }
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {exchanges.slice(0, 3).map((items, i) => {
        return (
          <div key={i} className="flex flex-row justify-between">
            <div className="flex flex-row">
              {/* coin image */}
              <div className="w-6 mt-[2px]">
                <img
                  src={items?.item.large}
                  alt="coinLogo"
                  height={20}
                  width={20}
                  className="rounded-full"
                />
              </div>
              {/* coin data */}
              <div className="items-center text-base">
                {items?.item.name} ({items.item.symbol})
              </div>
            </div>
            {/* percent profit or loss */}
            <div
              className={
                " ml-8 w-16 h-5 p-1 text-xs rounded bg-green-100 text-green-600 flex gap-1" +
                (items?.item.data.price_change_percentage_24h.usd > 0
                  ? " text-green-600 bg-green-100"
                  : " text-red-600 bg-red-100")
              }
            >
              {items?.item.data.price_change_percentage_24h.usd > 0 ? (
                <BsCaretUpFill color="green" className="mt-[2px]" />
              ) : (
                <BsCaretDownFill color="red" className="mt-[2px]" />
              )}
              {items?.item.data.price_change_percentage_24h.usd?.toFixed(2)}%
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Coin;
