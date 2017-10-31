import React from 'react'
import { Header } from 'semantic-ui-react'
import FoodAlbumList from './FoodAlbumList'
import { header } from '../StyledDiaryCommon'

const FoodAlbum = () => {
  return (
    <div className="diary-food-album">
      <Header
        style={{
          ...header,
          marginBottom: '21px',
        }}
      >
        오늘의 식단 앨범
      </Header>
      <FoodAlbumList />
    </div>
  )
}

export default FoodAlbum
