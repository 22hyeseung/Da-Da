import React from 'react'
import ShareDiaryFoodAlbumListCard from './ShareDiaryFoodAlbumListCard'

const ShareDiaryFoodAlbumList = () => {
  return (
    <div className="diary-food-album-list-scroll">
      <div
        style={{ display: 'flex' }}
        className="diary-food-meal-list-card"
      >
        <ShareDiaryFoodAlbumListCard />
        <ShareDiaryFoodAlbumListCard />
        <ShareDiaryFoodAlbumListCard />
        <ShareDiaryFoodAlbumListCard />
        <ShareDiaryFoodAlbumListCard />
        <ShareDiaryFoodAlbumListCard />
      </div>
    </div>
  )
}

export default ShareDiaryFoodAlbumList
