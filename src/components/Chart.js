import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', dataset1: 400, dataset2: 247 },
  { name: 'Feb', dataset1: 300, dataset2: 139 },
  { name: 'Mar', dataset1: 200, dataset2: 980 },
  { name: 'Apr', dataset1: 278, dataset2: 393 },
  { name: 'May', dataset1: 189, dataset2: 480 },
  { name: 'Jun', dataset1: 239, dataset2: 380 },
  { name: 'Jul', dataset1: 349, dataset2: 430 },
  { name: 'Aug', dataset1: 520, dataset2: 200 },
  { name: 'Sep', dataset1: 245, dataset2: 300 },
  { name: 'Oct', dataset1: 245, dataset2: 304 },
  { name: 'Nov', dataset1: 830, dataset2: 651 },
  { name: 'Dec', dataset1: 770, dataset2: 455 },
  { name: 'Jan', dataset1: 400, dataset2: 247 },
  { name: 'Feb', dataset1: 300, dataset2: 139 },
  { name: 'Mar', dataset1: 200, dataset2: 980 },
  { name: 'Apr', dataset1: 278, dataset2: 393 },
  { name: 'May', dataset1: 189, dataset2: 480 },
  { name: 'Jun', dataset1: 239, dataset2: 380 },
  { name: 'Jul', dataset1: 349, dataset2: 430 },
  { name: 'Aug', dataset1: 520, dataset2: 200 },
  { name: 'Sep', dataset1: 245, dataset2: 300 },
  { name: 'Oct', dataset1: 245, dataset2: 304 },
  { name: 'Nov', dataset1: 830, dataset2: 651 },
  { name: 'Dec', dataset1: 770, dataset2: 455 },
  { name: 'Jan', dataset1: 400, dataset2: 247 },
  { name: 'Feb', dataset1: 300, dataset2: 139 },
  { name: 'Mar', dataset1: 200, dataset2: 980 },
  { name: 'Apr', dataset1: 278, dataset2: 393 },
  { name: 'May', dataset1: 189, dataset2: 480 },
  { name: 'Jun', dataset1: 239, dataset2: 380 },
  { name: 'Jul', dataset1: 349, dataset2: 430 },
  { name: 'Aug', dataset1: 520, dataset2: 200 },
  { name: 'Sep', dataset1: 245, dataset2: 300 },
  { name: 'Oct', dataset1: 245, dataset2: 304 },
  { name: 'Nov', dataset1: 830, dataset2: 651 },
  { name: 'Dec', dataset1: 770, dataset2: 455 },
  { name: 'Jan', dataset1: 400, dataset2: 247 },
  { name: 'Feb', dataset1: 300, dataset2: 139 },
  { name: 'Mar', dataset1: 200, dataset2: 980 },
  { name: 'Apr', dataset1: 278, dataset2: 393 },
  { name: 'May', dataset1: 189, dataset2: 480 },
  { name: 'Jun', dataset1: 239, dataset2: 380 },
  { name: 'Jul', dataset1: 349, dataset2: 430 },
  { name: 'Aug', dataset1: 520, dataset2: 200 },
  { name: 'Sep', dataset1: 245, dataset2: 300 },
  { name: 'Oct', dataset1: 245, dataset2: 304 },
  { name: 'Nov', dataset1: 830, dataset2: 651 },
  { name: 'Dec', dataset1: 770, dataset2: 455 }
];

const alamode = () => {
  alamode.chartAnnotations(
    {
      chart_id: "chart_27ff7ecf3359",
      query_name: "Trips",
      x_axis_column: "week",
      comment_values: ["May","May","Jul","Jul"],
      comments: ["Thanksgiving","Thanksgiving","Xmas","Xmas"],
      orientations: ["v","v","v","v"]
    }
  )
}

const Chart = () => {

  return (
    <ResponsiveContainer width="100%" aspect={4}>
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
        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={{fontSize: 11, borderRadius: '1.5rem', lineHeight: 0.6,letterSpacing: '0.5px'}} labelStyle={{color: 'darkgreen', textAlign:'center'}}/>
        <Area  type="monotone" baseLine={25} dataKey="dataset1" stroke="#82ca9d" fill="#f4feef" activeDot={{ r: 5 }} />
        <Area type="monotone" dataKey="dataset2" stroke="#8884d8" fill="#dedefe" activeDot={{ r: 5 }} />
      </AreaChart>
    </ResponsiveContainer>

  )
};

export default Chart;