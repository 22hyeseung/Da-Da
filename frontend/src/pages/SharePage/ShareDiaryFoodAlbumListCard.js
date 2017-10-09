import React, { Component } from 'react'
import {
  Segment,
  Label,
  Modal,
  Image,
} from 'semantic-ui-react'
import foodImg from '../../static/img/diary_food_album.jpg'
import zoomIcon from '../../static/img/diary-zoom.svg'
import * as Style from './StyledDiaryFood'

class ShareDiaryFoodAlbumListCard extends Component {
  state = { open: false }

  show = size => () =>
    this.setState({ size, open: true })
  close = () => this.setState({ open: false })
  render() {
    const { open, size } = this.state
    return (
      <Segment style={Style.albumCard}>
        <Label
          attached="top"
          style={{
            ...Style.albumLabel,
            ...Style.albumCardLabelTop,
          }}
        >
          아침식사
          <div>
            <Modal
              trigger={
                <img
                  src={zoomIcon}
                  className="diary-food-meal-list-card-icon"
                  alt="클릭하면 음식사진을 확대해서 확인할 수 있습니다."
                />
              }
              basic
              size="small"
            >
              <Modal.Content>
                <Image
                  src={foodImg}
                  size="big"
                  shape="rounded"
                  centered
                />
              </Modal.Content>
            </Modal>
          </div>
        </Label>
        <Label
          attached="bottom"
          style={{
            ...Style.albumLabel,
            ...Style.albumCardLabelBtoom,
          }}
        >
          CSS
        </Label>
      </Segment>
    )
  }
}

export default ShareDiaryFoodAlbumListCard
