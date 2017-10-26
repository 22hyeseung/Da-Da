import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Segment,
  Label,
  Grid,
  Modal,
  Image,
  Header,
  List,
  Checkbox,
} from 'semantic-ui-react'
import {
  cancelBtn,
  submitBtn,
} from '../StyledDiaryCommon'
import { postFoodImgToDB } from '../../../actions/diaryFood'
import cameraIcon from '../../../static/img/diary-camera-icon.svg'
import * as Style from './StyledDiaryFood'

class DiaryFoodSearchModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: '',
      open: false,
    }
  }

  // modal
  show = dimmer => () =>
    this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  _handleSubmit(e) {
    e.preventDefault()
    if (!this.state.imagePreviewUrl) {
      return this.setState({
        disabled: true,
      })
    }

    this.props.postFoodImgToDB(this.state.file)
    // TODO: do something with -> this.state.file
    // console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      })
    }
    reader.readAsDataURL(file)
  }

  createPayloadAndPostToDB = () => {}

  render() {
    const { open, dimmer } = this.state
    let { imagePreviewUrl } = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (
        <form
          onSubmit={e => this._handleSubmit(e)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
          id="postImg"
        >
          {console.log(this.state.file)}
          <img
            src={imagePreviewUrl}
            style={{
              width: '100%',
              marginBottom: '7px',
            }}
          />
          <label
            for="upload"
            style={{ display: 'flex' }}
          >
            <div
              style={{
                fontFamily: 'Spoqa Han Sans',
                fontWeight: '100',
                padding: '7px 34px',
                borderRadius: '4px',
                border: '1px solid #e0e1e2',
                cursor: 'pointer',
              }}
            >
              <span>사진 다시 고르기</span>
            </div>
            <Button
              style={{
                ...submitBtn,
                marginLeft: '7px',
              }}
              onClick={
                this.createPayloadAndPostToDB
              }
            >
              사진 분석하기
            </Button>
          </label>
          <input
            id="upload"
            className="diary-food-meal-file-upload__input"
            type="file"
            name="file-upload"
            onChange={e =>
              this._handleImageChange(e)}
          />
        </form>
      )
    } else {
      $imagePreview = (
        <div>
          <label
            for="upload"
            className="diary-food-meal-file-upload__label"
          >
            <img
              src={cameraIcon}
              className="diary-food-search-photo-modal-upload-icon"
            />
            <span>이미지를 업로드하세요</span>
          </label>
          <input
            id="upload"
            className="diary-food-meal-file-upload__input"
            type="file"
            name="file-upload"
            onChange={e =>
              this._handleImageChange(e)}
          />
        </div>
      )
    }
    return (
      <Grid.Column
        width={1}
        style={Style.modalGrid}
      >
        <img
          src={cameraIcon}
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            position: 'absolute',
          }}
          className="diary-camera-icon"
          onClick={this.show('blurring')}
          alt="이미지를 업로드하여 식단을 검색"
        />
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={this.close}
        >
          <Modal.Header>
            식단 사진 등록하며 업로드하기
          </Modal.Header>
          <Modal.Content
            image
            style={{ padding: '14px' }}
          >
            <Segment style={Style.modalUpload}>
              <div className="diary-file-upload">
                {$imagePreview}
              </div>
            </Segment>
          </Modal.Content>
          <Modal.Actions>
            <Button basic style={cancelBtn}>
              취소
            </Button>
            <Button style={submitBtn}>등록</Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => {
  return {
    dateState: state.today.date,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postFoodImgToDB: file =>
      dispatch(postFoodImgToDB(file)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryFoodSearchModal)

{
  /*   <Grid
              doubling
              columns={3}
              style={{
                margin: '0px 7px 0px 0px',
              }}
            >
              <Grid.Column
                style={{ padding: '3px' }}
              >
                <Image
                  src="http://producedepot.ca/wp-content/uploads/2014/05/produce-large-apple.jpg"
                  shape="rounded"
                  style={{
                    border: '2px solid #29323c',
                  }}
                />
              </Grid.Column>
              <Grid.Column
                style={{ padding: '3px' }}
              >
                <Image
                  src="http://producedepot.ca/wp-content/uploads/2014/05/produce-large-apple.jpg"
                  shape="rounded"
                />
              </Grid.Column>
              <Grid.Column
                style={{ padding: '3px' }}
              >
                <Image
                  src="http://producedepot.ca/wp-content/uploads/2014/05/produce-large-apple.jpg"
                  shape="rounded"
                />
              </Grid.Column>
              <Grid.Column
                style={{ padding: '3px' }}
              >
                <Image
                  src="http://producedepot.ca/wp-content/uploads/2014/05/produce-large-apple.jpg"
                  shape="rounded"
                />
              </Grid.Column>
              <Grid.Column
                style={{ padding: '3px' }}
              >
                <Image
                  src="http://producedepot.ca/wp-content/uploads/2014/05/produce-large-apple.jpg"
                  shape="rounded"
                />
              </Grid.Column>
              <Grid.Column
                style={{ padding: '3px' }}
              >
                <Image
                  src="http://producedepot.ca/wp-content/uploads/2014/05/produce-large-apple.jpg"
                  shape="rounded"
                />
              </Grid.Column>
              <Grid.Column
                style={{ padding: '3px' }}
              >
                <Image
                  src="http://producedepot.ca/wp-content/uploads/2014/05/produce-large-apple.jpg"
                  shape="rounded"
                />
              </Grid.Column>
            </Grid>
            <Modal.Description
              style={Style.modalPhotoSecondGrid}
            >
              <Segment
                style={Style.modalPhotoView}
              />
            </Modal.Description>
            <Modal.Description
              style={Style.modalThirdGrid}
            >
              <Segment
                style={Style.modalThirdGridBox}
              >
                <Header
                  as="h3"
                  style={
                    Style.modalThirdGridHeader
                  }
                >
                  찾으시는 음식이 맞나요?
                </Header>
                <div className="diary-food-search-photo-modal-list">
                  <List
                    divided
                    relaxed
                    style={{ width: '100%' }}
                  >
                    <Segment>
                      <List.Item
                        style={{ border: 'none' }}
                      >
                        <Checkbox label="음식1" />
                      </List.Item>
                    </Segment>
                    <Segment>
                      <List.Item
                        style={{ border: 'none' }}
                      >
                        <Checkbox label="음식2" />
                      </List.Item>
                    </Segment>
                    <Segment>
                      <List.Item
                        style={{ border: 'none' }}
                      >
                        <Checkbox label="음식3" />
                      </List.Item>
                    </Segment>
                  </List>
                </div>
                <Label attached="bottom right">
                  원하는 결과가 안나왔나요?
                </Label>
              </Segment>
                </Modal.Description> */
}
