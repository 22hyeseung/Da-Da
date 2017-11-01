import React, { Component } from 'react'
import {
  Segment,
  Label,
  Modal,
  Image,
} from 'semantic-ui-react'
import zoomIcon from '../../../../static/img/diary-zoom.svg'
import * as Style from '../StyledDiaryFood'

class FoodAlbumListCard extends Component {
  state = { open: false }

  show = size => () =>
    this.setState({ size, open: true })

  close = () => this.setState({ open: false })

  render() {
    const {
      meal_tag,
      picture,
      name,
      kcal,
    } = this.props
    return (
      <Segment
        style={{
          ...Style.albumCard,
          backgroundImage: `url(${this.props
            .picture})`,
        }}
      >
        <Label
          attached="top"
          style={{
            ...Style.albumLabel,
            ...Style.albumCardLabelTop,
          }}
        >
          {meal_tag} 식사
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
                  src={picture}
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
            ...Style.albumCardLabelBottom,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <span>{name}</span>
          <span style={{ textAlign: 'right' }}>
            {kcal} kcal
          </span>
        </Label>
      </Segment>
    )
  }
}

export default FoodAlbumListCard
