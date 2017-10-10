import React from 'react'
import DiaryFoodListCard from './DiaryFoodListCard'

const DiaryFoodList = () => {
  return (
    <div className="diary-food-meal-list-scroll">
      <div
        style={{ display: 'flex' }}
        className="diary-food-meal-list-card"
      >
        <DiaryFoodListCard />
        <DiaryFoodListCard />
        <DiaryFoodListCard />
        <DiaryFoodListCard />
        <DiaryFoodListCard />
      </div>
    </div>
  )
}

export default DiaryFoodList
