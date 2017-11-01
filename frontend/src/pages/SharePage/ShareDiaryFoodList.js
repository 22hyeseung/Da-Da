import React from 'react'
import ShareDiaryFoodListCard from './ShareDiaryFoodListCard'

const ShareDiaryFoodList = () => {
  return (
    <div className="diary-food-meal-list-scroll">
      <div
        style={{ display: 'flex' }}
        className="diary-food-meal-list-card"
      >
        <ShareDiaryFoodListCard />
        <ShareDiaryFoodListCard />
        <ShareDiaryFoodListCard />
        <ShareDiaryFoodListCard />
        <ShareDiaryFoodListCard />
        <ShareDiaryFoodListCard />
      </div>
    </div>
  )
}

export default ShareDiaryFoodList
