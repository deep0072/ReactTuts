import React from "react";

const RevenueCard = ({ title, showWarning, orderCount, amount }) => {
  return (
    <div className="flex justify-around">
      {" "}
      <div className="bg-white rounded shadow-md p-4">
        <div className="text-gray-600 flex">
          <div>{title}</div>
          <div className="ml-1 flex justify-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="text-2xl font-semibold pt-2F">₹ {amount}</div>
          {orderCount ? (
            <div className="flex cursor-pointer underline font-medium flex flex-col justify-center">
              {" "}
              <div className="flex">
                <div className="text-blue-700">{orderCount} orders </div>
                <div className="flex justify-center flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="bg-white rounded shadow-md p-4">
        <div className="text-gray-600 flex">
          <div>{title}</div>
          <div className="ml-1 flex justify-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="text-2xl font-semibold pt-2F">₹ {amount}</div>
          {orderCount ? (
            <div className="flex cursor-pointer underline font-medium flex flex-col justify-center">
              {" "}
              <div className="flex">
                <div className="text-blue-700">{orderCount} orders </div>
                <div className="flex justify-center flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="bg-white rounded shadow-md p-4">
        <div className="text-gray-600 flex">
          <div>{title}</div>
          <div className="ml-1 flex justify-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="text-2xl font-semibold pt-2F">₹ {amount}</div>
          {orderCount ? (
            <div className="flex cursor-pointer underline font-medium flex flex-col justify-center">
              {" "}
              <div className="flex">
                <div className="text-blue-700">{orderCount} orders </div>
                <div className="flex justify-center flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
