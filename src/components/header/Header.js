import React from 'react';
import { useState } from 'react';

const Header = ({
  onOneYear,
  onSixMonths,
  onThreeMonths,
  onAlltimes,
  toggle,
  onToggle,
}) => {
  const [active, setActive] = useState([false, false, false, true]);
  return (
    <div>
      <h2 className="p-4">Tracking Labs and Disease Metrics</h2>
      <div className="flex flex-wrap justify-between m-4">
        <div className="flex-col">
          <h1 className="m-4 ">View By:</h1>
          <div className="flex justify-center rounded-lg text-lg" role="group">
            <button
              style={{ color: active[0] ? '#222' : 'gray' }}
              onClick={() => {
                onThreeMonths();
                setActive([true, false, false, false]);
              }}
              className="bg-white text-gray font-bold hover:hover:text-dark font:bold border border-r-0 border-gray-light rounded-l-lg px-6 py-3 mx-0 outline-none focus:shadow-outline"
            >
              3 Months
            </button>
            <button
              style={{ color: active[1] ? '#222' : 'gray' }}
              onClick={() => {
                onSixMonths();
                setActive([false, true, false, false]);
              }}
              className="bg-white text-gray font-bold hover:hover:text-dark font:bold border border-gray-light  px-6 py-3 mx-0 outline-none focus:shadow-outline"
            >
              6 Months
            </button>
            <button
              style={{ color: active[2] ? '#222' : 'gray' }}
              onClick={() => {
                onOneYear();
                setActive([false, false, true, false]);
              }}
              className="bg-white text-gray font-bold hover:hover:text-dark font:bold border border-gray-light  px-6 py-3 mx-0 outline-none focus:shadow-outline"
            >
              1 Year
            </button>
            <button
              style={{ color: active[3] ? '#222' : 'gray' }}
              onClick={() => {
                onAlltimes();
                setActive([false, false, false, true]);
              }}
              className="bg-white text-gray font-bold hover:hover:text-dark font:bold border border-l-0 border-gray-light rounded-r-lg px-6 py-3 mx-0 outline-none focus:shadow-outline"
            >
              All times
            </button>
          </div>
        </div>
        <div className="flex-col">
          <h1 className="m-4 ">Display:</h1>
          <div className="flex justify-center rounded-lg text-lg" role="group">
            <button
              style={{ color: toggle ? '#222' : 'gray' }}
              onClick={onToggle}
              className="bg-white text-gray font-bold hover:hover:text-dark font:bold border border border-gray-light rounded-l-lg px-6 py-3 mx-0 outline-none focus:shadow-outline"
            >
              charts
            </button>
            <button
              style={{ color: !toggle ? '#222' : 'gray' }}
              onClick={onToggle}
              className="bg-white text-gray font-bold hover:hover:text-dark font:bold border border-l-0 border-gray-light rounded-r-lg px-6 py-3 mx-0 outline-none focus:shadow-outline"
            >
              values
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
