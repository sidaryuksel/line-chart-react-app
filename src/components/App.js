import React from "react";
import "@fontsource/baloo-thambi-2";
import DateFilters from "./DateFilters";
import Legend from './Legend';
import Chart from "./Chart";
import Modal from 'react-modal';

Modal.setAppElement("#root");
const App = () => {
  return (
    <div className="margin-top right-align margin-right">
      <Legend />
      <DateFilters />
      <Chart />
    </div>
  );
}

export default App;
