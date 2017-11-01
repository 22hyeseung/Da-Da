import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Segment,
  Label,
  Grid,
  Modal,
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
import Dropzone from 'react-dropzone'
import ComponentLoader from '../../../components/Loader/ComponentLoader'
import cameraIcon from '../../../static/img/diary-camera-icon.svg'
import vision from '../../../static/img/diary-food-vision.svg'
import * as Style from './StyledDiaryFood'

class FoodSearchModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: '',
      open: false,
      loading: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.visionResult){
      this.setState({ loading: false })
    }
  }

  // modal show
  show = dimmer => () => {
    this.setState({ dimmer, open: true })
    this.props.clearSearchData() //사진 검색시, 기존에 검색결과가 남아있는 경우를 초기화시켜준다.
  }

  // modal close
  close = () => {
    this.setState({
      open: false,
      value: '',
      imagePreviewUrl: '',
    })
    this.props.saveSelect(this.state.value) // modal이 닫히면서 input에 검색결과의 네이밍이 들어갈 수 있도록 하기 위해 reducer에 저장해둔다.
    this.props.clearSearchData() // show때와 마찬가지로 기존의 검색결과를 초기화 한다.
    {
      this.state.value === undefined
        ? '' // 아무 이미지 검색없이 닫을 경우, 검색창은 자동으로 열리지 않는다.
        : this.props.isSearchMode() // 이미지 검색후 닫히는 경우, 검색창이 자동으로 open된다.
    }
  }

  // 업로드한 파일을 post보냄
  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.imagePreviewUrl) {
      return this.setState({
        disabled: true,
      })
    }
    this.setState({
      loading: true,
    })
    this.props.postFoodImgToDB(this.state.file)
  }

  // 이미지 미리보기 함수
  handleImageChange(e) {
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
    //this.props.clearSearchData()
  }
  onDrop(files) {
    this.setState({
      file: files[0],
      imagePreviewUrl: files[0].preview,
    })
    console.log(files[0], files[0].preview)
  }
  // 리스크중 체크한 항목을 value에 저장한다.
  handleCheckChange = (e, { value }) =>
    this.setState({ value })

  render() {
    const {
      open,
      dimmer,
      imagePreviewUrl,
    } = this.state

    // 초기화
    let $imagePreview = null
    // 이미지를 업로드했을 경우,
    if (imagePreviewUrl) {
      $imagePreview = (
        <form
          onSubmit={e => this.handleSubmit(e)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          id="postImg"
        >
        {this.state.loading ? <ComponentLoader posiStyle={{top: '40%', zIndex: '100'}} /> : null }
          <Dropzone
            style={{ width: 'none' }}
            onDrop={this.onDrop.bind(this)}
          >
            <img
              src={imagePreviewUrl}
              style={{
                width: '100%',
                marginBottom: '7px',
              }}
              className={this.state.loading ? "diary-image-blur" : null }
              alt="업로드한 사진 미리 확인하는 이미지입니다."
            />
          </Dropzone>
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
              this.handleImageChange(e)}
          />
          <span
            style={{
              marginTop: '7px',
              color: '#a8b7c7',
            }}
          >
            이미지를 다시 드래그로 갖고와도 변경됩니다.
          </span>
        </form>
      )
    } else {
      // 이미지를 아직 업로드 안했을 경우
      $imagePreview = (
        <Dropzone
          style={{ width: 'none' }}
          onDrop={this.onDrop.bind(this)}
          disableClick
        >
          <div>
            <label
              htmlFor="upload"
              className="diary-food-meal-file-upload__label"
            >
              <img
                src={vision}
                style={{ width: '56%' }}
                alt="이미지 업로드 캐릭터 아이콘"
              />
              <span style={{ marginTop: '28px' }}>
                이미지를 업로드하세요
              </span>
              <span style={{ marginTop: '14px' }}>
                직접 드래그하여 등록도 가능합니다.
              </span>
            </label>
            <input
              id="upload"
              className="diary-food-meal-file-upload__input"
              type="file"
              name="file-upload"
              onChange={e =>
                this.handleImageChange(e)}
            />
          </div>
        </Dropzone>
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
            {/* vision 분석결과가 있을 때 와 없을 때 분기 */}
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
                    {/* 분석결과가 없을 때 분기 */}
                    {this.props.visionResult ===
                    undefined ? (
                      ''
                    ) : (
                      <div>
                        {this.state.loading ? <ComponentLoader posiStyle={{zIndex: '100'}} /> : null}
                        <div className={this.state.loading ? "diary-image-blur" : null }>
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
            {/* 리스트 중 체크한 항목이 있을 경우 분기 */}
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
    visionResult: state.foodLogs.visionresult,
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
)(FoodSearchModal)
