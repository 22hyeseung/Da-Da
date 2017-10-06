import React, { Component } from 'react'
import {
  Segment,
  Label,
  Icon,
  Button,
  Popup,
} from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'
import foodImg from '../../static/img/diary_food_album.jpg'

class DiaryFoodAlbumListCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment
        style={{
          boxShadow: 'none',
          marginTop: '0px',
          border: '1px solid #d8dde6',
          width: '210px',
          height: '210px',
          marginRight: '14px',
          background: `url(${foodImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
        }}
      >
        <Label
          attached="top left"
          style={{
            backgroundColor:
              'rgba(22, 50, 92, 0.5)',
            color: '#fff',
            fontSize: '12px',
          }}
        >
          아침식사
        </Label>
        <Label
          attached="bottom"
          style={{
            backgroundColor:
              'rgba(22, 50, 92, 0.5)',
            color: '#fff',
            padding: '16px',
            fontWeight: '100',
            fontSize: '18px',
          }}
        >
          CSS
        </Label>
      </Segment>
    )
  }
}

export default DiaryFoodAlbumListCard
