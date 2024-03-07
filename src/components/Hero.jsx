import axios from "axios";
import React, { useEffect, useState } from "react";
import { Baseurl } from "../baseURL";
import {
  BsCaretDownFill,
  BsCaretUpFill,
  BsCaretUpSquareFill,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import Chart from "./Chart";
import RightComponent from "./RightComponent";

const Hero = () => {
  const [coinsData, setcoinsData] = useState({});
  // const id = "bitcoin";

  useEffect(() => {
    const getCoin = async () => {
      try {
        const { data } = await axios.get(`${Baseurl}/coins/bitcoin`);
        setcoinsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCoin();
  }, []);

  const profit = coinsData
    ? coinsData?.market_data?.price_change_percentage_24h?.toFixed(2)
    : 0;
  return (
    <div className="bg-white rounded-lg p-3 md:ml-1  ">
      {/* About coin */}
      <div className="flex mt-4 gap-2">
        <div className="w-7">
          <img height={"15px"} src={coinsData?.image?.small} alt="coin" />
        </div>
        <div className="font-semibold md:text-lg text-xl mt-1 text-slate-900">
          {coinsData?.name}
        </div>
        <div className="uppercase font-normal text-gray-500 text-xs mt-2">
          {coinsData?.symbol}
        </div>
        <div className="w-[4.5rem] h-8 p-1.5 pl-2  font-normal text-sm rounded-lg bg-slate-500 mt-1 text-white ml-8">
          RANK #{coinsData?.market_cap_rank}
        </div>
      </div>
      <div className="flex mt-4 gap-2 items-center">
        <div className="font-semibold ml-2 text-lg  text-slate-900">
          ${coinsData?.market_data?.current_price?.usd.toLocaleString("en")}
        </div>
        <div
          className={
            " ml-8 w-14 h-5 p-1 text-xs font-medium rounded flex gap-1" +
            (profit > 0
              ? " text-green-600 bg-green-100"
              : " text-red-600 bg-red-100")
          }
        >
          {profit > 0 ? (
            <BsCaretUpFill color="green" className="mt-[2px]" />
          ) : (
            <BsCaretDownFill color="red" className="mt-[2px]" />
          )}
          {profit > 0 ? profit?.replace("+", "") : profit?.replace("-", "")}%
        </div>
        <div className="font-xs ml-2  text-slate-300">(24H)</div>
      </div>

      <hr
        style={{
          marginLeft: "15px",
          background: "#E5E4E2",
          color: "#E5E4E2",
          borderColor: "#E5E4E2",
          height: "1px",
          width: "95%",
          marginTop: "4%",
        }}
      />
      {/* chart starts */}
      <div className="md:p-3">
        <Chart />
      </div>
    </div>
    // </div>
  );
};

export default Hero;
