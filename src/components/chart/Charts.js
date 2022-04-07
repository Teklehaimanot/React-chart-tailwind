import React from 'react';
import LineBasic from './LineBasic';
import { useState } from 'react';

const Charts = ({ data }) => {
  const groupBy = (key) => (array) =>
    array.reduce(
      (objectsByKeyValue, obj) => ({
        ...objectsByKeyValue,
        [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj),
      }),
      {}
    );
  const groupByLabName = groupBy('lab/name');
  const dataByLabName = Object.values(groupByLabName(data));

  return (
    <>
      {dataByLabName.map((labData) => (
        <LineBasic testData={labData} />
      ))}
    </>
  );
};

export default Charts;
