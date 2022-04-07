import React, { useEffect } from 'react';
import { CgArrowsVAlt } from 'react-icons/cg';
import * as d3 from 'd3';
import { useState, useRef } from 'react';
const LineBasic = ({ testData }) => {
  const myRef = useRef(null);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(60);
  const [active, setActive] = useState(false);
  const min = Math.min.apply(
    Math,
    testData.map(function (o) {
      return o['lab/value'] - 1;
    })
  );
  const max = Math.max.apply(
    Math,
    testData.map(function (o) {
      return o['lab/value'] + 1;
    })
  );

  useEffect(() => {
    drawChart();
  }, [height]);

  const handleClick = () => {
    active ? setHeight(height / 2) : setHeight(2 * height);
  };
  const drawChart = () => {
    const dataset = testData;
    const svg = d3.select(myRef.current);
    const margin = 0;
    const width = svg.attr('width') - margin;
    const height = svg.attr('height') - margin;
    const xScale = d3.scaleLinear().domain([2015, 2023]).range([0, width]),
      yScale = d3.scaleLinear().domain([min, max]).range([height, 0]);

    const g = svg
      .append('g')
      .attr('transform', 'translate(' + 0 + ',' + 0 + ')');

    // svg
    //   .append('text')
    //   .attr('x', width / 2 + 100)
    //   .attr('y', 100)
    //   .attr('text-anchor', 'middle')
    //   .style('font-family', 'Helvetica')
    //   .style('font-size', 20);
    //   .text('Line Chart');

    // X label
    // svg
    //   .append('text')
    //   .attr('x', width / 2 + 100)
    //   .attr('y', height - 50)
    //   .attr('text-anchor', 'middle')
    //   .style('font-family', 'Helvetica')
    //   .style('font-size', 12)
    //   .text('Independant');

    // Y label
    // svg
    //   .append('text')
    //   .attr('text-anchor', 'middle')
    //   .attr('transform', 'translate(60,' + height + ')rotate(-90)')
    //   .style('font-family', 'Helvetica')
    //   .style('font-size', 12)
    //   .text('Dependant');

    // Step 6
    // g.append('g').attr('transform', 'translate(0,' + 0 + ')');
    //   .call(d3.axisTop(xScale));

    // g.append('g').call(d3.axisLeft(yScale));

    // Step 7
    svg
      .append('g')
      .selectAll('dot')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('cx', function (d, i) {
        return xScale(
          new Date(d['lab/when']).getFullYear() +
            new Date(d['lab/when']).getMonth() / 10
        );
      })
      .attr('cy', function (d) {
        return yScale(d['lab/value']);
      })
      .attr('r', 3)
      //   .attr('transform', 'translate(' + 150 + ',' + 30 + ')')
      .style('fill', 'black');

    // Step 8
    const line = d3
      .line()
      .x(function (d) {
        return xScale(
          new Date(d['lab/when']).getFullYear() +
            new Date(d['lab/when']).getMonth() / 10
        );
      })
      .y(function (d) {
        return yScale(d['lab/value']);
      });
    //   .curve(d3.curveMonotoneX);

    svg
      .append('path')
      .datum(dataset)
      .attr('class', 'line')
      //   .attr('transform', 'translate(' + 150 + ',' + 30 + ')')
      .attr('d', line)
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', '1');
  };
  return (
    <div
      onClick={() => {
        handleClick();
        setActive(!active);
      }}
      className="flex  border-b border-pink-light text-gray-600"
    >
      <div className="mr-4 flex justify-between  w-1/5 bg-pink-light  text-pink opacity-60  ">
        <p className="px-5 py-6">{testData[0]['lab/name']}</p>
        <div className="text-dark flex-col justify-between">
          <div className="h-1/4 ">{max}</div>
          <CgArrowsVAlt className="h-1/2" />
          <div className="h-1/4">{min}</div>
        </div>
      </div>
      <svg ref={myRef} width={width} height={height}></svg>
    </div>
  );
};

export default LineBasic;
