import React from "react";
import "@fontsource/baloo-thambi-2";

import Chart from "./Chart";
import DatePick from "./DatePick";
import Legend from './Legend';



const App = () => {
  return (
    <div className="container" style={{marginTop: '40px'}}>
        <div className="row align-items-start">
          <div className="col-7">
            <Legend />
          </div>
          <div className="col-5">
            <DatePick />
          </div>
        </div>
        <Chart />
    </div>
  );
}

export default App;
