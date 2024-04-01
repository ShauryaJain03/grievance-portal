import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';
const data = [
  {
    name: 'Jan',
    amt: 2400,
  },
  {
    name: 'Feb',
    amt: 2210,
  },
  {
    name: 'March',
    amt: 2290,
  },
  {
    name: 'April',
    amt: 2000,
  },
  {
    name: 'May',
    amt: 2181,
  },
  {
    name: 'Aug',
    amt: 2500,
  },
  {
    name: 'Sept',
    amt: 2100,
  },
];

  
const data02 = [
    { name: 'Mess', value: 18 },
    { name: 'Academic', value: 15},
    { name: 'Hostel', value: 20 },
    { name: 'Other', value: 10 }
  ];



export default function BarCharts(){
    return (
        <div className='grid grid-cols-2 gap-5 mt-12 h-[300px]'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={300}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            className='border-2'
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="amt"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="amt" fill="#ADD8E6" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer  width="100%" height="100%">
            <PieChart width={400} height={400}>
          <Pie dataKey="value" data={data02} innerRadius={60} outerRadius={120} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>
        </div>
      );
}

/* import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';



export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
 */