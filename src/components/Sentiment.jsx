import React from "react";
import { HiInformationCircle } from "react-icons/hi";

const Sentiment = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-3 md:px-6 md:ml-1 mt-4">
      <h2 className="font-bold text-xl  my-2">Sentiment</h2>
      <div className="flex font-semibold gap-2 text-lg text-gray-600">
        Key Events <HiInformationCircle color="#B2BEB5" className="mt-1" />
      </div>
      {/* cards section */}
      <div className=" flex flex-row gap-5 overflow-x-auto ">
        {/* card  */}
        <div className="flex flex-nowrap gap-3">
          <div className=" w-[28rem] h-36 flex bg-blue-100 rounded-lg p-4 mt-2">
            <div>
              <img
                src="docu.png"
                alt="document"
                width={"150px"}
                height={"150px"}
              />
            </div>
            <div className="flex flex-col ml-2">
              <p className=" text-xs font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda architecto ratione aliquid vitae eveniet ea.
              </p>
              <p className="text-xs mt-2 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                harum voluptates nihil sit perferendis recusandae dolorem
                reprehenderit voluptatibus deserunt vitae non facilis, eveniet
                eius in explicabo neque possimus ipsum fuga. Odit perspiciatis.
              </p>
            </div>
          </div>

          <div className=" w-[28rem] h-36 flex bg-blue-100 rounded-lg p-4 mt-2 ">
            <div>
              <img
                src="growth.png"
                alt="document"
                width={"150px"}
                height={"150px"}
              />
            </div>
            <div className="flex flex-col ml-2">
              <p className=" text-xs font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda architecto ratione aliquid vitae eveniet ea.
              </p>
              <p className="text-xs mt-2 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                harum voluptates nihil sit perferendis recusandae dolorem
                reprehenderit voluptatibus deserunt vitae non facilis, eveniet
                eius in explicabo neque possimus ipsum fuga. Odit perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* cards ends here*/}

      <div>
        <div className="flex font-semibold gap-2 mt-6 text-lg text-gray-600">
          Analyst Estimates{" "}
          <HiInformationCircle color="#B2BEB5" className="mt-1" />
        </div>
        <div className="flex mt-3  mb-4 gap-2 ">
          <div className="rounded-[50%] w-28 h-28 bg-green-200 flex items-center  justify-center text-lg font-bold text-green-600">
            76%
          </div>
          <div className="flex flex-col gap-4  ml-4 mt-2 w-[50%] md:w-[70%]">
            <div className="flex md:gap-4 gap-2 md:w-80 w-40 items-center font-normal">
              <p className="text-xs text-gray-500">Buy</p>
              <div class=" md:w-[90%] w-[50%] rounded-full h-2 bg-white">
                <div
                  class="bg-green-600 h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="flex md:gap-4 gap-2 md:w-80 w-40 items-center font-normal">
              <p className="text-xs text-gray-500 font-normal">Hold</p>
              <div class="md:w-[90%] w-[50%] rounded-full h-2 bg-white">
                <div
                  class="bg-gray-500 h-2 rounded-full"
                  style={{ width: "8%" }}
                ></div>
              </div>
            </div>
            <div className="flex md:gap-4 gap-2 md:w-80 w-40 items-center font-normal">
              <p className="text-xs text-gray-500 font-normal">Sell</p>
              <div class="md:w-[90%] w-[50%] rounded-full h-2 bg-white">
                <div
                  class="bg-red-600 h-2 rounded-full"
                  style={{ width: "16%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
