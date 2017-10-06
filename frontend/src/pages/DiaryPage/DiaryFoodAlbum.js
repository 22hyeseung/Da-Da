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
      <div>
        <Header
          style={{
            fontSize: '28px',
            fontWeight: '100',
            color: '#16325C',
            marginBottom: '42px',
            fontFamily: 'Spoqa Han Sans',
          }}
        >
          <Header.Subheader
            style={{
              fontFamily: 'montserrat',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1f2e79',
            }}
          >
            FOOD DIARY
          </Header.Subheader>
          오늘의 식단 다이어리
        </Header>
        <DiaryFoodAlbumList />
      </div>
    )
  }
}

export default DiaryFoodAlbum
