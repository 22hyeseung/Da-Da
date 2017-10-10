import React from 'react'
import { Header } from 'semantic-ui-react'
import ShareDiaryFoodAlbumList from './ShareDiaryFoodAlbumList'
import * as Style from './StyledDiaryFood'

const ShareDiaryFoodAlbum = () => {
  return (
    <div className="diary-food-album">
      <Header
        style={{
          ...Style.header,
          marginBottom: '21px',
        }}
      >
        오늘의 식단 앨범
      </Header>
      <ShareDiaryFoodAlbumList />
    </div>
  )
}

export default ShareDiaryFoodAlbum
