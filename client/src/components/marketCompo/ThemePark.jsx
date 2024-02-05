import React from "react";
import { Link } from "react-router-dom";
function ThemePark() {
  const data = {
    item1: {
      content: "Adult Rides",
      imageSrc: "/logo/electricity.svg",
    },
    item2: {
      content: "Family Rides",
      imageSrc: "/logo/water.svg",
    },
    item3: {
      content: "Restaurant",
      imageSrc: "/logo/farm.svg",
    },
    item4: {
      content: "Premium",
      imageSrc: "/logo/intraction.svg",
    },
  };
  return (
    <div className="flex flex-grow border overflow-y-auto"  style={{ border: "4px solid rgba(226, 226, 226, 1) " }}>
      <div className="w-1/2 p-4">
        <div className="p-4 w-full flex flex-col ">
          <h1 className="font-extrabold text-3xl p-4">Theme Park Site</h1>
          <div className="flex flex-col">
            <div className="p-4 w-3/6 flex ">
              <i className="text-gray-300">
                <img src="./logo/location.svg" alt="" srcset="" />
              </i>
              <p className="text-left text-gray-200 font-semibold">
                Address of the site
              </p>
            </div>
            <div className="p-4 w-5/6 flex  justify-between">
              {Object.values(data).map((val) => (
                <div
                  key={val.content}
                  className="bg-gray-300 px-2 rounded-sm flex justify-center items-center text-gray-400"
                >
                  <i>
                    <img src={val.imageSrc} alt="" />
                  </i>
                  <p className="text-sm ">{val.content}</p>
                </div>
              ))}
            </div>

            <div className="p-4 flex w-full">
              <div
                className=" p-2 flex border border-blue-500 justify-center items-center"
                style={{ border: "2px solid rgba(67, 117, 251, 1)" }}
              >
                <img src="./logo/arrow2.svg" alt="" />
                <h1
                  className="mx-2 text-2xl font-semibold underline"
                  style={{ color: "rgba(67, 117, 251, 1)" }}
                >
                  View opportunity On PolyGon
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* theme park site col 2 */}
      <div className="w-1/2 p-4 flex flex-col  items-end">
        <div className="w-3/6 flex flex-col  items-end">
          <Link to="/complete-profile" className="buttonStyles">
            Complete Profile
          </Link>
          <div
            className="border mt-2"
            style={{ border: "3px solid rgba(67, 117, 251, 1)" }}
          >
            <button
              className="p-4 flex justify-center items-center "
              style={{ color: "rgba(67, 117, 251, 1)" }}
            >
              Site Visit
              {<img src="./logo/arrow.svg"></img>}
            </button>
          </div>
        </div>
        <div className="mt-4  w-3/6 flex flex-col">
          <div className=" w-full flex justify-between items-end">
            <div className="font-extrabold blue text-2xl">Rs 20,00,000</div>
            <div className="text-gray-300">Rs 65,00,000</div>
          </div>
          <div className="w-full flex">
            <div
              className="h-4 w-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(67, 117, 251, 1) 40%, rgba(226, 226, 226, 1) 30%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemePark;
