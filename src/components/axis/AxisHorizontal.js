import React from 'react';
import { CgArrowsVAlt } from 'react-icons/cg';
// import * as d3 from 'd3';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { timeYears } from 'd3';

const AxisHorizontal = ({ data }) => {
  const [height, setHeight] = useState(11);
  const [labData, setLabData] = useState({
    labels: data.map((data) => new Date(data['lab/when'])),
    datasets: [
      {
        // data: data.map((data) => data['lab/value']),
        // backgroundColor: '#222',
        // borderColor: 'black',
        // borderWidth: 2,
      },
    ],
  });

  const [options, setOptions] = useState({
    scales: {
      x: {
        type: 'time',
        grid: {
          display: false,
          drawBorder: false,
          //   drowOnChartArea: false,
        },
        gridLines: { display: false },
        ticks: {
          padding: -40,
          //   beginAtZero: true,
          //   display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          //   color: 'red',
          //   display: false,
          color: '#fff',
          beginAtZero: true,
          drawBorder: false,
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

  return (
    <div className="flex border-b border-pink-light">
      <div className=" w-1/5 py-8  bg-pink-light  text-pink opacity-60 ">
        LAB/ METRICS
      </div>
      <div style={{ width: '77%', height: `${height}vh` }}>
        <Line data={labData} options={options} />
      </div>
    </div>
  );
};

export default AxisHorizontal;
