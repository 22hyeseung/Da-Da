import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  checkboxStyle,
  description,
  btnDiarySubmit,
} from './StyledRecipe'
import { postFoodToDB } from '../../actions/diaryFood'
import {
  Button,
  Modal,
  Dropdown,
} from 'semantic-ui-react'
import { dateStringForApiQuery } from '../../helper/date'

const options = [
  { key: 1, text: '아침', value: '아침' },
  { key: 2, text: '점심', value: '점심' },
  { key: 3, text: '저녁', value: '저녁' },
  { key: 4, text: '간식', value: '간식' },
]

class CookingProcess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ischecked: false,
      popupWindow: false,
      selectMeal: null,
      cookingStep: this.props.recipe,
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  handlePopupWindowOpen = () => {
    if (!this.props.recipeAmount) {
    }
    this.setState({ popupWindow: true })
  }

  handlePopupWindowClose = () => {
    this.setState({ popupWindow: false })
  }

  handleCheckboxChange = (e, data) => {
    const stepTemp = this.state.cookingStep
    if (stepTemp[e.target.value - 1].isProcess) {
      stepTemp[
        e.target.value - 1
      ].isProcess = false
    } else {
      stepTemp[
        e.target.value - 1
      ].isProcess = true
    }

    this.setState({ cookingStep: stepTemp })
  }

  handleMealTegChange = (e, data) => {
    this.setState({ selectMeal: data.value })
  }

  createPayloadAndPostToDB = () => {
    if (!this.state.selectMeal) {
      return false
    }

    this.props.postFoodToDB({
      serve: this.props.recipeAmount
        ? this.props.recipeAmount * 1
        : this.props.recipeContent.recipe_serving,
      date: this.state.date,
      recipe_id: this.props.recipeContent
        .recipe_id,
      meal_tag: this.state.selectMeal,
      picture: null,
    })

    this.handlePopupWindowClose()
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: '450px',
          top: '46px',
        }}
      >
        <form style={{ width: '884px' }}>
          {this.props.recipe.map((val, i) => {
            const divNaming = `cookingstep${i +
              1}`
            return (
              <div
                id={divNaming}
                className={
                  val.isProcess
                    ? 'cooking-on'
                    : ''
                }
              >
                <label style={checkboxStyle}>
                  <input
                    type="checkbox"
                    value={val.step}
                    style={{ display: 'none' }}
                    onClick={
                      this.handleCheckboxChange
                    }
                  />
                  <span
                    style={{ fontSize: '22px' }}
                  >
                    {val.step}
                  </span>
                </label>
                <p style={description}>
                  {val.content}
                </p>
              </div>
            )
          })}
        </form>
        <div style={{ textAlign: 'right' }}>
          <Button
            size="Large"
            icon="plus"
            content="기록 다이어리에 등록하기"
            style={btnDiarySubmit}
            onClick={this.handlePopupWindowOpen}
          />
        </div>
        <div>
          <Modal
            open={this.state.popupWindow}
            onClose={this.handlePopupWindowClose}
            size="mini"
          >
            <Modal.Header>
              어떤 시간에 드셨나요?
            </Modal.Header>
            <Modal.Content>
              <div>
                <Dropdown
                  downward
                  fluid
                  selection
                  options={options}
                  placeholder=" >> 시간을 선택하세요 << "
                  onChange={
                    this.handleMealTegChange
                  }
                />
              </div>
            </Modal.Content>
            <Modal.Actions>
              <Button
                basic
                content="취소"
                onClick={
                  this.handlePopupWindowClose
                }
              />
              <Button
                content="등록"
                onClick={
                  this.createPayloadAndPostToDB
                }
              />
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dateState: state.today.date,
    recipe: state.recipe.recipe,
    recipeContent: state.recipe.recipeContent,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postFoodToDB: payload =>
      dispatch(postFoodToDB(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CookingProcess)
