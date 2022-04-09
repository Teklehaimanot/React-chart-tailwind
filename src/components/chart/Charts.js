import React from 'react';
import LineBasic from './LineBasic';
import Table from './Table';
// import { Table } from './Table';

const Charts = ({ data, yearRange, toggle }) => {
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
      {dataByLabName.map((labData, i) =>
        toggle ? (
          <LineBasic
            key={Math.random()}
            testData={labData}
            yearRange={yearRange}
          />
        ) : (
          <Table key={i} testData={labData} yearRange={yearRange} />
        )
      )}
    </>
  );
};

export default Charts;
