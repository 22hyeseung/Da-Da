import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import DiaryFoodAlbumList from './DiaryFoodAlbumList'
import MdAdd from 'react-icons/lib/md/add'

class DiaryFoodAlbum extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="diary-food-album">
        <Header
          style={{
            fontSize: '28px',
            fontWeight: '100',
            color: '#16325C',
            marginBottom: '21px',
            fontFamily: 'Spoqa Han Sans',
          }}
        >
          오늘의 식단 다이어리
        </Header>
        <DiaryFoodAlbumList />
      </div>
    )
  }
}

export default DiaryFoodAlbum
