import React from "react";
import Coin from "./Coin";
import Image from "../Image.png";

const RightComponent = () => {
  return (
    <div className="flex flex-col sm:block ml-1 md:ml-0">
      {/* top container */}
      <div className="bg-[#0000FF] h-[70%]  rounded-2xl text-white flex text-center md:mx-4">
        <div className=" flex flex-col md:mx-8 mx-4 my-8">
          <h2 className="w-60 leading-8 font-semibold text-[1.40rem] md:mx-20 mx-12">
            Get Started with KoinX for FREE
          </h2>
          <p className="w-80 mt-[1.50rem] md:mx-12 mx-3 text-[0.80rem] font-[400] leading-6">
            with our wide range of features that you can equip for free, KoinX
            allows you to be more educated and aware of your tax reports
          </p>
          <div className="mx-16 my-8 ">
            <img src={Image} alt="image" width={300} height={400} />
          </div>
          <div>
            <a
              className="inline-flex items-center gap-2 rounded-lg border bg-white px-8 py-3 text-indigo-600 "
              href="#"
            >
              <span className="text-sm font-medium">
                {" "}
                Get Started for Free{" "}
              </span>

              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* bottom container */}
      <div className="bg-white flex flex-col mx-4 my-5 rounded-xl p-5 gap-3">
        <h2 className="font-semibold text-xl">Trending Coins (24 h)</h2>
        <div className="mt-4 ">
          <Coin />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
