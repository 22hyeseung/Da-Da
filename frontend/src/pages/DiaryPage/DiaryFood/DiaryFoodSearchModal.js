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
  Icon,
} from 'semantic-ui-react'
import {
  cancelBtn,
  submitBtn,
} from '../StyledDiaryCommon'
import {
  postFoodImgToDB,
  clearSearchData,
  saveSelect,
} from '../../../actions/diaryFood'
import cameraIcon from '../../../static/img/diary-camera-icon.svg'
import vision from '../../../static/img/diary-food-vision.svg'
import * as Style from './StyledDiaryFood'

class DiaryFoodSearchModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: '',
      open: false,
      loading: false,
    }
  }

  // modal
  show = dimmer => () => {
    this.setState({ dimmer, open: true })
    this.props.clearSearchData()
  }

  close = () => {
    this.setState({
      open: false,
      value: '',
      imagePreviewUrl: '',
    })
    this.props.saveSelect(this.state.value)
    this.props.clearSearchData()
    {
      this.state.value === undefined
        ? ''
        : this.props.isSearchMode()
    }
  }

  componentDidMount() {
    // console.log(this.props.foodAlbumResult)
    // if (this.props.foodAlbumResult.length !== 0) {
    //   this.setState({
    //     loading: true,
    //   })
    // }
    // this.setState({
    //   loading: false,
    // })
  }

  _handleSubmit(e) {
    e.preventDefault()
    if (!this.state.imagePreviewUrl) {
      return this.setState({
        disabled: true,
      })
    }

    this.props.postFoodImgToDB(this.state.file)
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

  handleCheckChange = (e, { value }) =>
    this.setState({ value })

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
            alignItems: 'center',
          }}
          id="postImg"
        >
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
              loading={this.state.loading}
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
              src={vision}
              style={{ width: '56%' }}
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
          className="diary-camera-icon"
          onClick={this.show('blurring')}
          alt="이미지를 업로드하여 식단을 검색"
        />
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={this.close}
        >
          <Modal.Header
            style={{
              fontWeight: '200',
              textAlign: 'center',
            }}
          >
            식단 사진 등록하며 업로드하기
          </Modal.Header>
          <Modal.Content
            image
            style={{
              padding: '14px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Segment style={Style.modalUpload}>
              <div className="diary-file-upload">
                {$imagePreview}
              </div>
            </Segment>
            {new Object(this.props.visionResult)
              .length !== 0 ? (
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
                  <List divided relaxed>
                    {this.props.visionResult ===
                    undefined ? (
                      ''
                    ) : (
                      <div>
                        {this.props.visionResult.map(
                          (item, i) => (
                            <List.Item
                              style={{
                                padding:
                                  '7px 0px',
                                borderBottom:
                                  '1px solid #e0e1e2',
                              }}
                            >
                              <Checkbox
                                label={
                                  item.description
                                }
                                value={
                                  item.description
                                }
                                checked={
                                  this.state
                                    .value ===
                                  item.description
                                }
                                onChange={
                                  this
                                    .handleCheckChange
                                }
                              />
                            </List.Item>
                          ),
                        )}
                      </div>
                    )}
                  </List>
                </div>
                <Label
                  attached="bottom"
                  style={{
                    textAlign: 'center',
                    background: 'transparent',
                    borderTop:
                      '1px solid #e0e1e2',
                    fontWeight: '300',
                    cursor: 'pointer',
                  }}
                  onClick={this.close}
                >
                  원하는 결과가 안나왔나요? 직접 검색하러가기!
                </Label>
              </Segment>
            ) : (
              ''
            )}
          </Modal.Content>
          <Modal.Actions
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {this.state.value ? (
              <div>
                <Icon
                  name="wizard"
                  color="teal"
                  style={{ marginLeft: '7px' }}
                />
                <span
                  style={{ color: '#16325C' }}
                >
                  {this.state.value}
                </span>
              </div>
            ) : (
              <span />
            )}
            <div>
              <Button
                basic
                style={cancelBtn}
                onClick={this.close}
              >
                취소
              </Button>
              <Button
                style={submitBtn}
                onClick={this.close}
              >
                등록
              </Button>
            </div>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => {
  return {
    dateState: state.today.date,
    visionResult: state.foodLogs.visionresult,
    foodAlbumResult:
      state.foodLogs.foodAlbumResult,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postFoodImgToDB: file =>
      dispatch(postFoodImgToDB(file)),
    clearSearchData: () =>
      dispatch(clearSearchData()),
    saveSelect: food =>
      dispatch(saveSelect(food)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryFoodSearchModal)
