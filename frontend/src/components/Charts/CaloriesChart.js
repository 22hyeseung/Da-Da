import React, { Component } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    day: '4/12',
    아침: 400,
    점심: 380,
    저녁: 210,
    간식: 120,
  },
  {
    day: '4/13',
    아침: 421,
    점심: 650,
    저녁: 110,
    간식: 0,
  },
  {
    day: '4/14',
    아침: 389,
    점심: 260,
    저녁: 280,
    간식: 120,
  },
  {
    day: '4/15',
    아침: 430,
    점심: 340,
    저녁: 200,
    간식: 140,
  },
  {
    day: '4/16',
    아침: 350,
    점심: 480,
    저녁: 400,
    간식: 36,
  },
  {
    day: '4/17',
    아침: 392,
    점심: 620,
    저녁: 120,
    간식: 100,
  },
  {
    day: '4/18',
    아침: 338,
    점심: 610,
    저녁: 280,
    간식: 0,
  },
]
class CaloriesChart extends Component {
  render() {
    return (
      <BarChart
        width={850}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
        />
        <Bar
          dataKey="아침"
          stackId="a"
          fill="#16325c"
          maxBarSize={55}
        />
        <Bar
          dataKey="점심"
          stackId="a"
          fill="#54698d"
          maxBarSize={55}
        />
        <Bar
          dataKey="저녁"
          stackId="a"
          fill="#a8b7c7"
          maxBarSize={55}
        />
        <Bar
          dataKey="간식"
          stackId="a"
          fill="#e5e5e5"
          maxBarSize={55}
        />
      </BarChart>
    )
  }
}

export default CaloriesChart
