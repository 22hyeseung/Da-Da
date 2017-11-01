import React, { Component } from 'react'
import ShareDiaryFoodAlbumListCard from './ShareDiaryFoodAlbumListCard'

class ShareDiaryFoodAlbumList extends Component {

  render() {
    return (
      <div className="diary-food-album-list-scroll">
        <div
          style={{ display: 'flex' }}
          className="diary-food-meal-list-card"
        >
        {
          this.props.foodPictureList.map(val => {
            return <ShareDiaryFoodAlbumListCard food={val} />
          })
        }
        </div>
      </div>
    )
  }
}

export default ShareDiaryFoodAlbumList
