import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 247 },
  { name: 'Feb', uv: 300, pv: 139 },
  { name: 'Mar', uv: 200, pv: 980 },
  { name: 'Apr', uv: 278, pv: 393 },
  { name: 'May', uv: 189, pv: 480 },
  { name: 'Jun', uv: 239, pv: 380 },
  { name: 'Jul', uv: 349, pv: 430 },
  { name: 'Aug',uv: 520, pv: 200 },
  { name: 'Sep', uv: 245, pv: 300 },
  { name: 'Oct', uv: 245, pv: 304 },
  { name: 'Nov', uv: 830, pv: 651 },
  { name: 'Dec', uv: 770, pv: 455 }
];

const Chart = () => {

    return (
        <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="#f4feef" activeDot={{ r: 4 }} />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#dedefe" activeDot={{ r: 4 }}  />
        </AreaChart>
      </ResponsiveContainer>

    )
};

export default Chart;