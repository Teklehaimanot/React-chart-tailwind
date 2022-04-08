import React from 'react';
import LineBasic from './LineBasic';

const Charts = ({ data, yearRange }) => {
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
      {dataByLabName.map((labData, i) => (
        <LineBasic
          key={Math.random()}
          testData={labData}
          yearRange={yearRange}
        />
      ))}
    </>
  );
};

export default Charts;
