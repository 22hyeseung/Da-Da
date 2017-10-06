import React, { Component } from 'react'
import DiaryFoodAlbumListCard from './DiaryFoodAlbumListCard'
import MdAdd from 'react-icons/lib/md/add'

class DiaryFoodAlbumList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="diary-food-album-list-scroll">
        <div
          style={{ display: 'flex' }}
          className="diary-food-meal-list-card"
        >
          <DiaryFoodAlbumListCard />
          <DiaryFoodAlbumListCard />
          <DiaryFoodAlbumListCard />
        </div>
      </div>
    )
  }
}

export default DiaryFoodAlbumList
