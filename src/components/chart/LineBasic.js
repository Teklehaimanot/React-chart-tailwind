import React from 'react';
import { CgArrowsVAlt } from 'react-icons/cg';
// import * as d3 from 'd3';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
const LineBasic = ({ testData, yearRange }) => {
  const [width, setWidth] = useState(77);
  const [height, setHeight] = useState(11);
  const [active, setActive] = useState(false);
  const [labData, setLabData] = useState({
    labels: testData.map((data) => new Date(data['lab/when'])),
    datasets: [
      {
        data: testData.map((data) => data['lab/value']),
        backgroundColor: '#222',
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  const [options, setOptions] = useState({
    elements: {
      point: {
        radius: 3,
      },
    },
    scales: {
      x: {
        type: 'time',
        grid: {
          display: false,

          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  });

  const min = Math.min.apply(
    Math,
    testData.map(function (o) {
      return o['lab/value'];
    })
  );
  const max = Math.max.apply(
    Math,
    testData.map(function (o) {
      return o['lab/value'];
    })
  );

  const minYear = Math.min.apply(
    Math,
    testData.map(function (o) {
      return parseInt(o['lab/when']);
    })
  );
  const maxYear = Math.max.apply(
    Math,
    testData.map(function (o) {
      return parseInt(o['lab/when']);
    })
  );

  const handleClick = () => {
    active ? setHeight(height / 2) : setHeight(2 * height);
  };

  return (
    <div
      onClick={() => {
        handleClick();
        setActive(!active);
      }}
      className="flex  border-b border-pink-light text-gray-600"
    >
      <div
        style={{
          backgroundColor: active ? '#c6d7c7' : '',
          color: active ? '#045d0b' : '',
        }}
        className="mr-4 flex justify-between  w-1/5 bg-pink-light  text-pink opacity-60  "
      >
        <p className="px-5 py-6">{testData[0]['lab/name']}</p>
        <div className="text-dark flex-col justify-between">
          <div className="h-1/4 ">{max}</div>
          <CgArrowsVAlt className="h-1/2" />
          <div className="h-1/4">{min}</div>
        </div>
      </div>
      <div
        style={{
          width: `${width * ((maxYear - minYear) / yearRange)}%`,
          height: `${height}vh`,
        }}
      >
        <Line data={labData} options={options} />
      </div>
    </div>
  );
};

export default LineBasic;
