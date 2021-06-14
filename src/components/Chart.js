import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
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

const alamode = () => {
  alamode.chartAnnotations(
    {
      chart_id: "chart_27ff7ecf3359",
      query_name: "data",
      x_axis_column: "dataset1",
      comment_values: ["1 Sep", "2May", "3 Feb", "4 Aug"],
      comments: ["Thanksgiving", "Thanksgiving", "Xmas", "Xmas"],
      orientations: ["v", "v", "v", "v"]
    }
  )
}

const Chart = () => {

  return (
    <div>
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
          lineHeight={'20px'}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: '1.5rem', lineHeight: 0.6, letterSpacing: '0.5px' }} labelStyle={{ color: 'darkgreen', textAlign: 'center' }} />
          <Area type="monotone" dataKey="dataset1" stroke="#82ca9d" fill="#f4feef" activeDot={{ r: 5 }} />
          <Area type="monotone" dataKey="dataset2" stroke="#8884d8" fill="#dedefe" activeDot={{ r: 5 }} />
        </AreaChart>

      </ResponsiveContainer>

    </div>

  )
};

export default Chart;