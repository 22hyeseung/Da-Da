import React from 'react'
import {
  Segment,
  Icon,
  Button,
  Popup,
  Input,
  Modal,
} from 'semantic-ui-react'
import * as Style from './StyledDiaryFood'
import {
  deleteFoodOfDB,
  updateFoodOfDB,
} from '../../../actions/diaryFood'
import { connect } from 'react-redux'
import { submitBtn } from '../StyledDiaryCommon'

class DiaryFoodList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isUpdateMode: false,
      open: false,
      inputValue: false,
      disabled: false,
      selectKey: -1,
    }
  }
  deleteFoodOfDB = id => {
    this.props.deleteFoodOfDB(id)
  }

  createPayloadAndUpdateToDB = () => {
    // if (
    //   !this.state.inputAmount ||
    //   this.state.inputAmount < 1
    // ) {
    //   return this.setState({
    //     disabled: true,
    //   })
    // }
    this.props.updateFoodOfDB({
      amount: this.state.inputAmount * 1,
      serve: this.state.serve,
    })
  }

  toggleUpdatingMode = () => {
    this.setState({
      isUpdateMode: !this.state.isUpdateMode,
    })
  }

  handleUpdate = e => {
    this.setState({
      inputValue: e.target.value,
    })
    // 양 입력 안했을 경우 버튼 비활성화
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  // keydown 이벤트
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      // this.createPayloadAndPostToDB()
    }
  }

  // postDelay = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       loading: false,
  //     }),
  //       this.props.toggleSearchMode()
  //   }, 2000)
  // }

  show = (dimmer, name) => () =>
    this.setState({
      dimmer,
      open: true,
      // selectKey: i,
      food_name: name,
    })
  close = () => this.setState({ open: false })
  render() {
    const { open, dimmer, selectKey } = this.state
    return (
      <div style={{ display: 'flex' }}>
        {this.props.foodresult.map((card, i) => {
          return (
            <Segment style={Style.mealCard}>
              <div className="diary-food-meal-list-card-firstRow">
                <p className="diary-food-meal-list-card-firstRow-title">
                  {card.food_name_ko}
                  {/* {card.food_name_ko} 서버 업데이트되면 적용하면 됩니다. */}
                </p>
                <Button.Group
                  style={{
                    position: 'relative',
                    right: '-5px',
                  }}
                >
                  <Button
                    icon="edit"
                    style={Style.settingIcon}
                    onClick={this.show(
                      'blurring',
                      card.food_name_ko,
                    )}
                    key={i}
                  />

                  <Button
                    icon="trash outline"
                    style={Style.settingIcon}
                    onClick={() =>
                      this.deleteFoodOfDB(
                        card.eat_log_id,
                      )}
                  />
                </Button.Group>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <p className="diary-food-meal-list-card-calory">
                  {card.food_kcal}
                  <span className="diary-food-meal-list-card-calory-unit">
                    kcal
                  </span>
                </p>

                <div className="diary-food-meal-list-card-nutritions">
                  <span className="diary-food-meal-list-card-nutrition-wrapper">
                    <span className="diary-food-meal-list-card-nutrition-title">
                      탄
                    </span>
                    <span className="diary-food-meal-list-card-nutrition-kcal">
                      {card.food_carb}
                    </span>
                  </span>
                  <span className="diary-food-meal-list-card-nutrition-wrapper">
                    <span className="diary-food-meal-list-card-nutrition-title">
                      단
                    </span>
                    <span className="diary-food-meal-list-card-nutrition-kcal">
                      {card.food_protein}
                    </span>
                  </span>
                  <span className="diary-food-meal-list-card-nutrition-wrapper">
                    <span className="diary-food-meal-list-card-nutrition-title">
                      지
                    </span>
                    <span className="diary-food-meal-list-card-nutrition-kcal">
                      {card.food_fat}
                    </span>
                  </span>
                </div>
              </div>
            </Segment>
          )
        })}
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          size="mini"
        >
          <Modal.Content
            style={{
              padding: '21px 14px 0px 14px',
            }}
          >
            <Modal.Header
              style={{
                textAlign: 'center',
                fontWeight: '100',
                fontSize: '21px',
                borderBottom: '1px solid #e0e5ee',
                padding: '0px 0px 14px',
              }}
            >
              {this.state.food_name}
            </Modal.Header>
            <Modal.Description
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  color: '#54698d',
                  fontSize: '12px',
                  marginTop: '21px',
                  marginBottom: '12px',
                }}
              >
                기존 입력했던 양은 100g입니다.
              </span>
              <Input
                type="number"
                style={{
                  margin: '0px 0px 28px',
                }}
                placeholder="수정할 값을 적으세요"
                onChange={e =>
                  this.handleUpdate(e)}
                onKeyDown={this.handleKeyPress}
              />
            </Modal.Description>
          </Modal.Content>
          <div
            style={{
              display: 'flex',
              padding: '0px 14px 14px',
            }}
          >
            <Button
              fluid
              content="취소"
              onClick={this.close}
              basic
            />
            <Button
              fluid
              style={{
                ...submitBtn,
                padding: '10px',
              }}
              onClick={this.close}
            >
              수정하기
            </Button>
          </div>
        </Modal>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     dateState: state.today.date,
//   }
// }
const mapDispatchToProps = dispatch => {
  return {
    deleteFoodOfDB: id =>
      dispatch(deleteFoodOfDB(id)),
    updateFoodOfDB: payload =>
      dispatch(updateFoodOfDB(payload)),
  }
}

export default connect(null, mapDispatchToProps)(
  DiaryFoodList,
)
