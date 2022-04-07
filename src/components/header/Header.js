import React from 'react';

const Header = () => {
  return (
    <div>
      <h2 className="p-4">Tracking Labs and Disease Metrics</h2>
      <div className="flex justify-between m-4">
        <div className="flex-col">
          <h1 className="m-4 ">View By:</h1>
          <div className="flex items-center justify-center">
            <div
              className="inline-flex shadow-md hover:shadow-md focus:shadow-md"
              role="group"
            >
              <button
                type="button"
                className="
                rounded-l-md
                px-6
                py-3
                border border-gray-light 
                text--600
                font-medium
                text-xl
                leading-tight
                hover:bg-dark hover:bg-opacity-5
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out"
              >
                3 Months
              </button>
              <button
                type="button"
                className="
                px-6
                py-3
                border border-gray-light 
                text--600
                font-medium
                text-xl
                leading-tight
                hover:bg-dark hover:bg-opacity-5
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out
              "
              >
                6 Months
              </button>
              <button
                type="button"
                className="
                px-6
                py-3
                border border-gray-light 
                text--600
                font-medium
                text-xl
                leading-tight
                hover:bg-dark hover:bg-opacity-5
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out
              "
              >
                1 Year
              </button>
              <button
                type="button"
                className="
                rounded-r-md
                px-6
                py-3
                border border-gray-light 
                text--600
                font-medium
                text-xl
                leading-tight
                hover:bg-dark hover:bg-opacity-5
                focus:outline-none focus:ring-0
                active:bg-dark active:bg-opacity-5
                transition
                duration-150
                ease-in-out
              "
              >
                All time
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col">
          <h1 className="m-4 ">Display:</h1>
          <div className="flex items-center justify-center">
            <div
              className="inline-flex shadow-md hover:shadow-md focus:shadow-md"
              role="group"
            >
              <button
                type="button"
                className="
                rounded-l-md
                px-6
                py-3
                border border-gray-light 
                text--600
                font-medium
                text-xl
                leading-tight
                hover:bg-dark hover:bg-opacity-5
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out"
              >
                Charts
              </button>
              <button
                type="button"
                className="
                rounded-r-md
                px-6
                py-3
                border border-gray-light 
                text--600
                font-medium
                text-xl
                leading-tight
                hover:bg-dark hover:bg-opacity-5
                focus:outline-none focus:ring-0
                active:bg-dark-500 active:font-bold
                transition
                duration-150
                ease-in-out
              "
              >
                Values
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
