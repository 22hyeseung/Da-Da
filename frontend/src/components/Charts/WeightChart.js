import React, { Component } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

const data = [
  { date: '2/27', current: 70, goal: 50 },
  { date: '2/28', current: 68, goal: 50 },
  { date: '3/5', current: 64, goal: 50 },
  { date: '3/12', current: 69, goal: 50 },
  { date: '3/24', current: 64, goal: 50 },
  { date: '4/1', current: 58, goal: 50 },
  { date: '6/7', current: 50, goal: 50 },
  { date: '7/2', current: 48, goal: 45 },
  { date: '7/28', current: 52, goal: 45 },
]

class WeightChart extends Component {
  render() {
    return (
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id="colorCurrent"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="#26d0ce"
              stopOpacity={0.8}
            />
            <stop
              offset="45%"
              stopColor="#2A8CAD"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient
            id="colorGoal"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="#2A8CAD"
              stopOpacity={0.8}
            />
            <stop
              offset="98%"
              stopColor="#1a2980"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="current"
          stroke="#26d0ce"
          fillOpacity={1}
          fill="url(#colorCurrent)"
        />
        <Area
          type="monotone"
          dataKey="goal"
          stroke="#2A8CAD"
          fillOpacity={1}
          fill="url(#colorGoal)"
        />
      </AreaChart>
    )
  }
}

export default WeightChart
