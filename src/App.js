import './App.css';
import { useState } from 'react';
import AxisHorizontal from './components/axis/AxisHorizontal';
import Header from './components/header/Header';
import Charts from './components/chart/Charts';
import { testLabData } from './data';

function App() {
  const [data, setData] = useState(testLabData);
  return (
    <div className="flex-col justify-center App  rounded-lg m-4 shadow-lg bg-white border border-gray-light ">
      <Header />
      <div className="block rounded-lg m-4 shadow-lg bg-white border border-gray-light  text-center">
        <AxisHorizontal data={data} />
        <Charts data={data} />
      </div>
    </div>
  );
}

export default App;
