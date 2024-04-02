import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { PieChart, Pie } from 'recharts';
const data = [
  {
    name: 'Jan',
    amt: 24,
  },
  {
    name: 'Feb',
    amt: 22,
  },
  {
    name: 'March',
    amt: 29,
  },
  {
    name: 'April',
    amt: 20,
  },
  {
    name: 'May',
    amt: 21,
  },
  {
    name: 'June',
    amt: 7,
  },
  {
    name: 'July',
    amt: 11,
  }
];

  
const data02 = [
    { name: 'Mess', value: 18 },
    { name: 'Academic', value: 15},
    { name: 'Hostel', value: 20 },
    { name: 'Other', value: 10 }
  ];



export default function BarCharts(){
    return (
        <div className='grid grid-cols-2 gap-3 h-[350px] px-4 pt-8'>
        <ResponsiveContainer width="100%" height="100%" className="">
          <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 15, right: 30, left: 20, bottom: 15 
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label value="Month" offset={0} position="bottom" />
              </XAxis>
              <YAxis label={{ value: 'Number of grievances', angle: -90, position: 'insideLeft', textAnchor: 'middle' , offset:-10}} />
            <Tooltip />
            <Bar dataKey="amt" fill="#ADD8E6" />
          </BarChart>
        </ResponsiveContainer>

       {/*  <ResponsiveContainer  width="100%" height="100%" className="border-2">
            <PieChart width={400} height={400}>
          <Pie dataKey="value" data={data02} innerRadius={50} outerRadius={100} fill="#82ca9d"/>
          <Tooltip />
        </PieChart>
        </ResponsiveContainer> */}
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data02}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          />
          
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