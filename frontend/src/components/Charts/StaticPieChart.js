import React, { Component } from 'react'
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from 'recharts'

const data = [
  { nutrition: '탄수화물', value: 720 },
  { nutrition: '단백질', value: 410 },
  { nutrition: '지방', value: 120 },
]
const COLORS = ['#1a2980', '#a8b7c7', '#e5e5e5']

class StaticPieChart extends Component {
  render() {
    return (
      <PieChart width={250} height={200}>
        <Pie
          data={data}
          cx={115}
          cy={100}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    )
  }
}

export default StaticPieChart
