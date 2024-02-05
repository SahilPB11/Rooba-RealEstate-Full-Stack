import React, { useState } from "react";

const Overview2 = () => {
  const [checkboxes, setCheckboxes] = useState([
    {
      checked: false,
      completed: false,
      buttonText: "Complete",
      downloadText: "Receipt",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Pay",
      downloadText: "Download",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Pay",
      downloadText: "Download",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Complete",
      downloadText: "Download",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Complete",
      downloadText: "Download",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Complete",
      downloadText: "Download",
    },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = checkboxes.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setCheckboxes(updatedCheckboxes);
  };

  const handleComplete = (index) => {
    const updatedCheckboxes = checkboxes.map((item, i) => {
      if (i === index) {
        return { ...item, completed: true };
      }
      return item;
    });
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="flex flex-col">
      {checkboxes.map((data, index) => (
        <div
          key={index}
          className={`flex w-full p-4 h-52 border border-gray-300 justify-between ${
            !data.checked ? "opacity-50" : ""
          }`}
        >
          <div
            className={`w-full flex ${
              data.checked ? "completed" : "incomplete"
            }`}
          >
            <div className="w-1/2 flex items-start">
              <div className="w-1/2 flex items-center justify-start">
                <input
                  type="checkbox"
                  id={`checkbox${index + 1}`}
                  checked={data.checked}
                  onChange={() => handleCheckboxChange(index)}
                  disabled={index !== 0 && !checkboxes[index - 1].checked}
                  style={{ width: "20px", height: "20px" }}
                />
                <label
                  className="text-2xl ml-4"
                  htmlFor={`checkbox${index + 1}`}
                >
                  {data.buttonText}
                </label>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end">
              {data.completed && <p>jdjfj</p>}
              {data.completed ? (
                <button
                  className="bg-transparent w-60 h-14 border border-blue-400"
                  style={{ color: "blue" }}
                >
                  {data.downloadText}
                </button>
              ) : (
                <button
                  className={`bg-blue-400 w-60 h-14 text-white`}
                  onClick={() => handleComplete(index)}
                >
                  {data.buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview2;
