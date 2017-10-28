import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import ShareDiaryFoodAlbumList from './ShareDiaryFoodAlbumList'
import * as Style from './StyledDiaryFood'

class ShareDiaryFoodAlbum extends Component {

  render() {
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
        <ShareDiaryFoodAlbumList foodPictureList={this.props.foodPictureList} />
      </div>
    )
  }
}

export default ShareDiaryFoodAlbum
