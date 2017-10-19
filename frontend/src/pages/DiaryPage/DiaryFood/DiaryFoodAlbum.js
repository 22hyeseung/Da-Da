import React from 'react'
import { Header } from 'semantic-ui-react'
import DiaryFoodAlbumList from './DiaryFoodAlbumList'
import { header } from '../StyledDiaryCommon'

const DiaryFoodAlbum = () => {
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
      <DiaryFoodAlbumList />
    </div>
  )
}

export default DiaryFoodAlbum
