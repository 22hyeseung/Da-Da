import React from 'react'
import DiaryFoodAlbumListCard from './DiaryFoodAlbumListCard'

const DiaryFoodAlbumList = () => {
  return (
    <div className="diary-food-album-list-scroll">
      <div
        style={{ display: 'flex' }}
        className="diary-food-meal-list-card"
      >
        <DiaryFoodAlbumListCard />
        <DiaryFoodAlbumListCard />
        <DiaryFoodAlbumListCard />
        <DiaryFoodAlbumListCard />
        <DiaryFoodAlbumListCard />
      </div>
    </div>
  )
}

export default DiaryFoodAlbumList
