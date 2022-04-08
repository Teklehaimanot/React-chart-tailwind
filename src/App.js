import './App.css';
import { useState } from 'react';
import AxisHorizontal from './components/axis/AxisHorizontal';
import Header from './components/header/Header';
import Charts from './components/chart/Charts';
import { testLabData } from './data';

function App() {
  const [data, setData] = useState(testLabData);

  const underOneYear = data.filter((d) => {
    const ageInSeconds =
      new Date().getTime() - new Date(d['lab/when']).getTime();
    return ageInSeconds < 1 * 365 * 86400 * 1000;
  });

  const underSixMonths = data.filter((d) => {
    const ageInSeconds =
      new Date().getTime() - new Date(d['lab/when']).getTime();
    return ageInSeconds < 0.5 * 365 * 86400 * 1000;
  });

  const underThreeMOnths = data.filter((d) => {
    const ageInSeconds =
      new Date().getTime() - new Date(d['lab/when']).getTime();
    return ageInSeconds < 0.25 * 365 * 86400 * 1000;
  });

  const min = Math.min.apply(
    Math,
    data.map(function (o) {
      return parseInt(o['lab/when']);
    })
  );
  const max = Math.max.apply(
    Math,
    data.map(function (o) {
      return parseInt(o['lab/when']);
    })
  );
  const yearRange = max - min;
  return (
    <div className="flex-col justify-center App  rounded-lg m-4 shadow-lg bg-white border border-gray-light ">
      <Header
        onOneYear={() => setData((prev) => (prev = underOneYear))}
        onSixMonths={() => setData(underSixMonths)}
        onThreeMonths={() => setData(underThreeMOnths)}
        onAlltimes={() => setData(testLabData)}
      />
      <div className="block rounded-lg m-4 shadow-lg bg-white border border-gray-light  text-center">
        <AxisHorizontal data={data} />
        <Charts data={data} yearRange={yearRange} />
      </div>
    </div>
  );
}

export default App;
