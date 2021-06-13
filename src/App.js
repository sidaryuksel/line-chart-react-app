import React from "react";
import Chart from "./Chart";
import DatePick from "./DatePick";
import DateFilters from "./DateFilters";
import Legend from './Legend';

const App = () => {
  return (
      <div className="container" style={{ marginTop: '40px'}}>
        <div className="row align-items-start">
          <div className="col-2" style={{ marginLeft: '80px'}}>
            <DateFilters />
          </div>
          <div className="col-1">
            <Legend />
          </div>
          <div className="col-8">
            <DatePick />
          </div>
        </div>
        <Chart />
      </div>
     
   
  );
}

export default App;
