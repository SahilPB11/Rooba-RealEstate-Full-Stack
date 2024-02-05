import React from "react";
import Landmarks from "./Landmarks";

const data = {
  item1: {
    title: "Overview",
    content:
      "Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.",
  },
  item2: {
    title: "Why",
    content:
      "Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.",
  },
  item3: {
    title: "What",
    content:
      "Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.",
  },
};

const Overview1 = () => {
  return (
    <div className="flex flex-col">
      {Object.values(data).map((item, index) => (
        <div
          key={index}
          className="w-full p-8 flex flex-col items-end justify-start border border-gray-300"
        >
          <p className="mr-auto text-3xl font-semibold p-2">{item.title}</p>
          <p className="mr-auto text-md font-black">{item.content}</p>
        </div>
      ))}
      <div className="w-full p-8 flex flex-col  justify-start border border-gray-300">
        <p className="mr-auto text-3xl font-semibold p-2">Landmark</p>
        {/* Landmarks */}
        <Landmarks />
      </div>
      {/* Map */}
      <div className="w-full p-8 flex flex-col  justify-start border border-gray-300">
        <p className="mr-auto text-3xl font-semibold p-2">Map</p>
        <img src="./images/map.jpg" alt="" srcset="" />
        <div className="flex flex-col justify-end items-end">
          <div
            className="border mt-2"
            style={{ border: "3px solid rgba(67, 117, 251, 1)" }}
          >
            <button
              className="p-4 flex justify-center items-center "
              style={{ color: "rgba(67, 117, 251, 1)" }}
            >
              Schedule a Call
              {<img src="./logo/arrow.svg"></img>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview1;
