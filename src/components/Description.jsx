import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-3 px-6 md:ml-1 mt-4">
      <h2 className="font-bold text-xl  mt-2">About Bitcoin</h2>
      <div className="flex gap-2 flex-col mt-4">
        <h3 className="font-semibold text-base">What is Bitcoin ?</h3>
        <p className="text-sm text-gray-700">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit
          mollitia ipsam voluptates sequi beatae nostrum tempore aliquid
          laborum. Tenetur, ab saepe? Nulla doloribus molestiae cupiditate
          praesentium, odio nobis vel? Tenetur, ab saepe? Nulla doloribus
          molestiae cupiditate praesentium, odio nobis vel? ab saepe? Nulla
          doloribus molestiae cupiditate praesentium, odio nobis vel?
        </p>
        <hr
          style={{
            marginLeft: "10px",
            background: "#E5E4E2",
            color: "#E5E4E2",
            borderColor: "#E5E4E2",
            height: "1px",
            width: "98%",
            marginTop: "1%",
          }}
        />
      </div>

      <div className="flex gap-2 flex-col mt-4">
        <h3 className="font-semibold text-base">
          {" "}
          Lorem, ipsum dolor sit amet consectetur
        </h3>
        <p className="text-sm text-gray-700">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit
          mollitia ipsam voluptates sequi beatae nostrum tempore aliquid
          laborum. Tenetur, ab saepe? Nulla doloribus molestiae cupiditate
          praesentium, odio nobis vel? Tenetur, ab saepe? Nulla doloribus
          molestiae cupiditate praesentium, odio nobis vel? ab saepe? Nulla
          doloribus molestiae cupiditate praesentium, odio nobis vel? aliquid
          laborum. Tenetur, ab saepe? Nulla doloribus molestiae cupiditate
          praesentium, odio nobis vel? Tenetur, ab saepe? Nulla <br /> <br />{" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit
          mollitia ipsam voluptates sequi beatae nostrum tempore aliquid
          laborum. Tenetur, ab saepe? Nulla doloribus molestiae cupiditate
          praesentium, odio nobis vel? Tenetur, ab saepe? Nulla doloribus
          molestiae cupiditate praesentium, odio nobis vel? ab saepe? Nulla
          doloribus molestiae cupiditate praesentium, odio nobis vel? aliquid
          laborum. Tenetur, ab saepe? Nulla doloribus molestiae cupiditate
          praesentium, odio nobis vel? Tenetur, ab saepe? Nulla <br /> <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit
          mollitia ipsam voluptates sequi beatae nostrum tempore aliquid
          laborum. Tenetur, ab saepe? Nulla doloribus molestiae cupiditate
          praesentium, odio nobis vel? Tenetur, ab saepe? Nulla doloribus
          molestiae cupiditate praesentium, odio nobis vel? ab saepe? Nulla
          doloribus molestiae cupiditate praesentium, odio nobis vel? aliquid
          laborum. Tenetur, ab saepe? Nulla doloribus molestiae cupiditate
          praesentium, odio nobis vel? Tenetur, ab saepe? Nulla
        </p>
        <hr
          style={{
            marginLeft: "10px",
            background: "#E5E4E2",
            color: "#E5E4E2",
            borderColor: "#E5E4E2",
            height: "1px",
            width: "98%",
            marginTop: "1%",
          }}
        />
      </div>
      <div>
        <h2 className="font-bold text-xl  mt-2">Already Holding Bitcoin?</h2>

        <div className="flex flex-col md:flex-row gap-3 mt-3">
          <div className="flex gap-2 bg-blue-400 p-3 rounded-md">
            <div className="items-center mt-5 md:mt-0 md:p-3">
              <img
                src="crypto.avif"
                alt="trading"
                width={100}
                height={100}
                className="rounded"
              />
            </div>
            <div className="flex flex-col justify-between items-center p-5">
              <h2 className="font-semibold text-lg text-white w-40">
                Calculate Your Profit
              </h2>
              <div className="inline-flex items-center gap-2 rounded-lg  bg-white px-8 py-1 mt-2">
                <span className="text-sm font-medium"> Check out </span>

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
              </div>
            </div>
          </div>

          <div className="flex gap-2 bg-red-400 p-3 rounded-md">
            <div className="mt-5 md:mt-0 md:p-3">
              <img
                src="crypto.avif"
                alt="trading"
                width={100}
                height={100}
                className="rounded"
              />
            </div>
            <div className="flex flex-col justify-between p-5 items-center">
              <h2 className="font-semibold text-lg text-white w-40">
                Calculate Your Tax liability
              </h2>
              <div className="inline-flex p-4 items-center gap-2 rounded-lg  bg-white px-8 py-1 mt-2">
                <span className="text-sm font-medium"> Check out </span>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
