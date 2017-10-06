import React, { Component } from 'react'
import DiaryFoodListCard from './DiaryFoodListCard'
import MdAdd from 'react-icons/lib/md/add'

class DiaryFoodList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="diary-food-meal-list-scroll">
        <div
          style={{ display: 'flex' }}
          className="diary-food-meal-list-card"
        >
          <DiaryFoodListCard />
          <DiaryFoodListCard />
          <DiaryFoodListCard />
        </div>
      </div>
    )
  }
}

export default DiaryFoodList
