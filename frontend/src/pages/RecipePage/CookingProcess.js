import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  checkboxStyle,
  description,
  btnDiarySubmit,
} from './StyledRecipe'
import { postFoodToDB } from '../../actions/diaryFood'
import { Button, Modal, Dropdown } from 'semantic-ui-react'
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
    this.setState({ popupWindow: true })
  }

  handlePopupWindowClose = () => {
    this.setState({ popupWindow: false })
  }

  handleCheckboxChange = e => {
    console.log(this.state.cookingStep, '<< [ this.state.cookingStep ]');
  }

  handleMealTegChange = (e, data) => {
    this.setState({ selectMeal: data.value })
  }

  createPayloadAndPostToDB = () => {
    console.log(this.props.recipeAmount, '<< [ this.props.recipeAmount ]');
    console.log(this.state.date, '<< [ this.state.date ]');
    console.log(this.state.selectMeal, '<< [ this.state.selectMeal ]');
    console.log(this.props.recipeContent.recipe_id, '<< [ this.props.recipe.recipe_id ]');
    console.log(this.props.dateState, '<< [ this.props.dateState ]');

    this.props.postFoodToDB({
      serve: this.props.recipeAmount * 1,
      date: '20171026',
      recipe_id: this.props.recipeContent.recipe_id,
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
          {
            this.props.recipe.map((val, i) => {
              const divNaming = `cookingstep${i+1}`
              return (
                <div id={divNaming}>
                  <label style={checkboxStyle}>
                    <input
                      type="checkbox"
                      value={val.step}
                      style={{ display: 'none' }}
                      onClick={this.handleCheckboxChange}
                    />
                    <span style={{ fontSize: '22px' }}>
                      {val.step}
                    </span>
                  </label>
                  <p style={description}>{val.content}</p>
                </div>
              )
            })
          }
        </form>
        <div style={{textAlign: 'right'}}>
          <Button size='Large' icon='plus' content='식단 다이어리에 등록하기'
            style={btnDiarySubmit}
            onClick={this.handlePopupWindowOpen}
          />
        </div>
        <div>
          <Modal open={this.state.popupWindow} onClose={this.handlePopupWindowClose} size='mini'>
            <Modal.Header>어떤 시간에 드셨나요?</Modal.Header>
            <Modal.Content>
            <div>
              <Dropdown
                downward
                fluid
                selection
                options={options}
                defaultValue='아침'
                onChange={this.handleMealTegChange}
              />
            </div>
            </Modal.Content>
            <Modal.Actions>
              <Button
                basic
                content="취소"
                onClick={this.handlePopupWindowClose}
              />
              <Button
                content="등록"
                onClick={this.createPayloadAndPostToDB}
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

export default connect(mapStateToProps, mapDispatchToProps)(CookingProcess)
