import React from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

const AxisHorizontal = ({ data }) => {
  const [width, setWidth] = useState(77);
  const [height, setHeight] = useState(11);
  const [labData, setLabData] = useState({
    labels: data.map((data) => new Date(data['lab/when'])),
    datasets: [],
  });

  const [options, setOptions] = useState({
    scales: {
      x: {
        type: 'time',
        grid: {
          display: false,
          drawBorder: false,
        },
        gridLines: { display: false },
        ticks: {
          padding: -40,
          color: '#222',
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
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
      <div style={{ width: `${width}%`, height: `${height}vh` }}>
        <Line data={labData} options={options} key={Math.random()} />
      </div>
    </div>
  );
};

export default AxisHorizontal;
