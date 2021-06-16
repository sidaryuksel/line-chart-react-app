import React from "react";
import "../App.css";
import LineChart from "./chart/LineChart";
import SizeTracker from "./chart/SizeTracker";
import './chart/style/line-chart.css';
import './chart/style/size-tracker.css';

const ChartApp = () => {
  const data = [
    {
      date: "Test",
      uv: 10,
      pv: 20,
    },
    {
      date: "Test 1",
      uv: 20,
      pv: 10,
    },
    {
      date: "Test 2",
      uv: 5,
      pv: 50,
    },
    {
      date: "Test 3",
      uv: 60,
      pv: 30,
    },
    {
      date: "Test 4",
      uv: 50,
      pv: 20,
    },
    {
      date: "Test 5",
      uv: 20,
      pv: 70,
    },
    {
      date: "Test 6",
      uv: 40,
      pv: 50,
    },
  ];

  const lines = [
    {
      key: "uv",
      color: "#8884d8",
    },
    {
      key: "pv",
      color: "#82ca9d",
    },
  ];

  const annotations = [
    {
      key: "uv",
      index: 0,
      annotation: "First annotation",
      color: "#8884d8",
    },
    {
      key: "uv",
      index: 6,
      annotation: "Last annotaion",
      color: "#8884d8",
    },
    {
      key: "pv",
      index: 2,
      annotation: "This is test",
      color: "#82ca9d",
    },
  ];

  return (
    <div className="App">
      <SizeTracker>
        {(width, height) => (
          <LineChart
            lines={lines}
            data={data}
            width={width}
            height={height}
            annotations={annotations}
          />
        )}
      </SizeTracker>
    </div>
  );
}

export default ChartApp;
