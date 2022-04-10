import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { useState, useRef } from 'react';

const Axis = () => {
  const myRef = useRef();
  const [data, setData] = useState([
    {
      year: '2011',
      value: 45,
      value1: 50,
    },
    {
      year: '2012',
      value: 47,
      value1: 54,
    },
    {
      year: '2013',
      value: 52,
      value1: 58,
    },
    {
      year: '2014',
      value: 70,
      value1: 78,
    },
    {
      year: '2015',
      value: 75,
      value1: 80,
    },
    {
      year: '2016',
      value: 78,
      value1: 89,
    },
  ]);
  useEffect(() => {
    drawChart();
  });

  const drawChart = () => {
    // const [width, height] = [500, 200];
    const accessRef = d3.select(myRef.current);
    const margin = 20;
    const width = accessRef.attr('width') - margin;
    const height = accessRef.attr('height') - margin;

    // var width = 400,
    //   height = 100;

    var data = [2015, 2016, 2017, 2018, 2022];

    // Append SVG
    var svg = accessRef.attr('width', width).attr('height', height);

    // Create scale
    var scale = d3
      .scaleLinear()
      .domain([d3.min(data), d3.max(data)])
      .range([0, width - 100]);

    // Add scales to axis
    var x_axis = d3.axisBottom().scale(scale);

    //Append group and insert axis
    svg.append('g').call(x_axis);
  };

  return (
    <div className="flex border-b border-pink-light">
      <div className=" w-1/5 py-8  bg-pink-light  text-pink opacity-60 ">
        LAB/ METRICS
      </div>
      <div style={{ width: `77%`, height: `11vh` }}>
        <svg ref={myRef} width="450" height="100"></svg>;
      </div>
    </div>
  );
};

export default Axis;
