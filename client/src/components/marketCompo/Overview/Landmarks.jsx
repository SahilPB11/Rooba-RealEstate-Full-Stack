import React from "react";

const landmarksData = [
  {
    iconSrc: "./logo/landmarks/Airport.svg",
    label: "Airport",
    distance: "100 KM",
    description: "Airport 1",
  },
  {
    iconSrc: "./logo/landmarks/Airport.svg",
    label: "Airport",
    distance: "25 KM",
    description: "Green Which Terminal",
  },
  {
    iconSrc: "./logo/landmarks/highway.svg",
    label: "HighWay",
    distance: "100 KM",
    description: "HighWay Number 5",
  },
];
const Landmarks = () => {
  return (
    <div className="flex flex-col">
      {/* Landmarks */}
      {landmarksData.map((landmark, index) => (
        <div key={index} className="w-full flex flex-col mt-2">
          <div className="w-full flex items-center justify-center">
            <div className="w-1/2 flex items-center">
              <img
                src={landmark.iconSrc}
                width="25px"
                alt=""
                className="mr-1"
              />
              <p className="blue">{landmark.label}</p>
            </div>
            <div className="w-1/2 flex flex-col">
              <p className="text-xl font-bold">{landmark.distance}</p>
              <p className="text-lg gray">{landmark.description}</p>
            </div>
          </div>
          <div className="w-full h-1 mt-1 bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default Landmarks;
