import React, { useState } from "react";

const Overview2 = () => {
  const [checkboxes, setCheckboxes] = useState([
    {
      checked: false,
      completed: false,
      buttonText: "Complete",
      downloadText: "Receipt",
      completionDate: null,
      dataAfterComple1: "Good Job",
      dataAfterComple2: "Complete",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Pay",
      downloadText: "Download",
      completionDate: null,
      dataAfterComple1: "5% discount",
      dataAfterComple2: "1,00,000",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Pay",
      downloadText: "Download",
      completionDate: null,
      dataAfterComple1: "",
      dataAfterComple2: "Complete",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Complete",
      downloadText: "Download",
      completionDate: null,
      dataAfterComple1: "We will get back in three minutes",
      dataAfterComple2: "Complete",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Complete",
      downloadText: "Download",
      completionDate: null,
      dataAfterComple1: "",
      dataAfterComple2: "Complete",
    },
    {
      checked: false,
      completed: false,
      buttonText: "Complete",
      downloadText: "Download",
      completionDate: null,
      dataAfterComple1: "",
      dataAfterComple2: "Complete",
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
        return {
          ...item,
          completed: true,
          completionDate: new Date().toLocaleDateString(),
        };
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
            <div className=" p-4 w-1/2 flex flex-col items-start">
              <div className="w-1/2 flex items-center justify-start">
                <input
                  type="checkbox"
                  id={`checkbox${index + 1}`}
                  checked={data.checked}
                  onChange={() => handleCheckboxChange(index)}
                  disabled={index !== 0 && !checkboxes[index - 1].checked}
                  style={{ width: "30px", height: "30px" }}
                />
                <label
                  className="text-2xl ml-4"
                  htmlFor={`checkbox${index + 1}`}
                >
                  {data.buttonText}
                </label>
              </div>
              {data.completed && (
                <div className="text-center">
                  <p className="blue opacity-35 text-xl">
                    {data.dataAfterComple1}
                  </p>
                  <p className="blue text-4xl font-semibold">
                    {data.dataAfterComple2}
                  </p>
                </div>
              )}
            </div>
            <div
              className={`w-1/2 flex flex-col ${
                data.completed ? "justify-between" : "justify-end"
              } items-end`}
            >
              {data.completed ? (
                <>
                  <p className="text-gray-500 text-xl font-bold text-center ">
                    {data.completionDate}
                  </p>
                  <button
                    className="bg-transparent w-60 h-14 border border-blue-400"
                    style={{ color: "blue" }}
                  >
                    {data.downloadText}
                  </button>
                </>
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
