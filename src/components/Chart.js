import React, { FunctionComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ResponsiveContainer } from 'recharts';

const lineChartReport = [
  { name: '1 Jan', dataset1: 400, dataset2: 247 },
  { name: '1 Feb', dataset1: 300, dataset2: 139 },
  { name: '1 Mar', dataset1: 200, dataset2: 980 },
  { name: '1 Apr', dataset1: 278, dataset2: 393 },
  { name: '1 May', dataset1: 189, dataset2: 480 },
  { name: '1 Jun', dataset1: 239, dataset2: 380 },
  { name: '1 Jul', dataset1: 349, dataset2: 430 },
  { name: '1 Aug', dataset1: 520, dataset2: 200 },
  { name: '1 Sep', dataset1: 245, dataset2: 300 },
  { name: '1 Oct', dataset1: 245, dataset2: 304 },
  { name: '1 Nov', dataset1: 830, dataset2: 651 },
  { name: '1 Dec', dataset1: 770, dataset2: 455 },
  { name: '2 Jan', dataset1: 400, dataset2: 247 },
  { name: '2 Feb', dataset1: 300, dataset2: 139 },
  { name: '2 Mar', dataset1: 200, dataset2: 980 },
  { name: '2 Apr', dataset1: 278, dataset2: 393 },
  { name: '2 May', dataset1: 189, dataset2: 480 },
  { name: '2 Jun', dataset1: 239, dataset2: 380 },
  { name: '2 Jul', dataset1: 349, dataset2: 430 },
  { name: '2 Aug', dataset1: 520, dataset2: 200 },
  { name: '2 Sep', dataset1: 245, dataset2: 300 },
  { name: '2 Oct', dataset1: 245, dataset2: 304 },
  { name: '2 Nov', dataset1: 830, dataset2: 651 },
  { name: '2 Dec', dataset1: 770, dataset2: 455 },
  { name: '3 Jan', dataset1: 400, dataset2: 247 },
  { name: '3 Feb', dataset1: 300, dataset2: 139 },
  { name: '3 Mar', dataset1: 200, dataset2: 980 },
  { name: '3 Apr', dataset1: 278, dataset2: 393 },
  { name: '3 May', dataset1: 189, dataset2: 480 },
  { name: '3 Jun', dataset1: 239, dataset2: 380 },
  { name: '3 Jul', dataset1: 349, dataset2: 430 },
  { name: '3 Aug', dataset1: 520, dataset2: 200 },
  { name: '3 Sep', dataset1: 245, dataset2: 300 },
  { name: '3 Oct', dataset1: 245, dataset2: 304 },
  { name: '3 Nov', dataset1: 830, dataset2: 651 },
  { name: '3 Dec', dataset1: 770, dataset2: 455 },
  { name: '4 Jan', dataset1: 400, dataset2: 247 },
  { name: '4 Feb', dataset1: 300, dataset2: 139 },
  { name: '4 Mar', dataset1: 200, dataset2: 980 },
  { name: '4 Apr', dataset1: 278, dataset2: 393 },
  { name: '4 May', dataset1: 189, dataset2: 480 },
  { name: '4 Jun', dataset1: 239, dataset2: 380 },
  { name: '4 Jul', dataset1: 349, dataset2: 430 },
  { name: '4 Aug', dataset1: 520, dataset2: 200 },
  { name: '4 Sep', dataset1: 245, dataset2: 300 },
  { name: '4 Oct', dataset1: 245, dataset2: 304 },
  { name: '4 Nov', dataset1: 830, dataset2: 651 },
  { name: '4 Dec', dataset1: 770, dataset2: 455 }
];

const Chart = () => {

  const CustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;

    if (Math.random() < 0.8) {
      return null;
    }

    return (
      <g>
        <rect
          width={120}
          height={20}
          x={x - 60} //Should be x - Annotation width / 2
          y={y - 30} // Should be x - Annotation height
          dy={-4}
          fill={"#8884d8"}
          fontSize={10}
          textAnchor="middle"
        ></rect>
        <text x={x - 12} y={y - 15} fill={stroke}>{value}</text>
      </g>
    );
  };

  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x}, ${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    )
  }
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart
          width={500}
          height={300}
          data={lineChartReport}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: '1.5rem', lineHeight: 0.6, letterSpacing: '0.5px' }} labelStyle={{ color: 'darkgreen', textAlign: 'center' }} />
          <Line dot={false} type="monotone" dataKey="dataset1" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 5 }} />
          <Line dot={false} type="monotone" dataKey="dataset2" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 5 }}>
            <LabelList content={<CustomizedLabel />} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>

  )
};

export default Chart;