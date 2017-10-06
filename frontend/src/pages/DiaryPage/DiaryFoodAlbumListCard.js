import React, { Component } from 'react'
import {
  Segment,
  Label,
  Modal,
  Image,
  Button,
  Input,
} from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'
import foodImg from '../../static/img/diary_food_album.jpg'
import trashIcon from '../../static/img/diary-trash.svg'
import eidtIcon from '../../static/img/diary-edit.svg'
import zoomIcon from '../../static/img/diary-zoom.svg'

class DiaryFoodAlbumListCard extends Component {
  constructor(props) {
    super(props)
  }
  state = { open: false }

  show = size => () =>
    this.setState({ size, open: true })
  close = () => this.setState({ open: false })
  render() {
    const { open, size } = this.state
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
        }}
      >
        <Label
          attached="top"
          style={{
            backgroundColor:
              'rgba(22, 50, 92, 0.7)',
            color: '#fff',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          아침식사
          <div>
            <Modal
              trigger={
                <img
                  src={zoomIcon}
                  className="diary-food-meal-list-card-icon"
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
            <img
              src={eidtIcon}
              onClick={this.show('mini')}
              className="diary-food-meal-list-card-icon"
            />
            <Modal
              size={size}
              open={open}
              onClose={this.close}
            >
              <Modal.Header
                sub
                style={{
                  padding: '14px',
                }}
              >
                {' '}
                계란프라이
                {/* <Input
                  focus
                  placeholder="계란프라이"
                  className="diary-food-album-list-card-edit-modal"
                  style={{
                    fontSize: '14px',
                  }}
                /> */}
              </Modal.Header>
              <Modal.Content>
                <div className="diary-file-upload">
                  <label
                    for="upload"
                    className="diary-file-upload__label"
                  >
                    다른 음식 사진으로 교체하기
                  </label>
                  <input
                    id="upload"
                    className="diary-file-upload__input"
                    type="file"
                    name="file-upload"
                  />
                </div>
                <Image
                  src={foodImg}
                  size="big"
                  shape="rounded"
                  centered
                />
              </Modal.Content>
              <Modal.Actions>
                <Button
                  basic
                  style={{
                    fontFamily: 'Spoqa Han Sans',
                    fontWeight: '100',
                    padding: '10px 34px',
                    marginRight: '9px',
                  }}
                >
                  취소
                </Button>
                <Button
                  className="diary-food-meal-submitBtn"
                  style={{
                    color: 'white',
                    fontFamily: 'Spoqa Han Sans',
                    fontWeight: '100',
                    padding: '10px 34px',
                    backgroundImage:
                      'linear-gradient(249deg, #485563, #29323c)',
                    margin: '0px',
                  }}
                >
                  수정
                </Button>
              </Modal.Actions>
            </Modal>
            <img
              src={trashIcon}
              className="diary-food-meal-list-card-icon"
            />
          </div>
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
