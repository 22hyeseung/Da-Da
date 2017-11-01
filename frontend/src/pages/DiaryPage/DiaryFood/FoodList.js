import React from 'react'
import {
  Segment,
  Button,
  Input,
  Modal,
} from 'semantic-ui-react'
import * as Style from './StyledDiaryFood'
import { deleteFoodOfDB } from '../../../actions/diaryFood'
import { connect } from 'react-redux'
import { submitBtn } from '../StyledDiary'
import FoodEditModal from './FoodEditModal'
import { dateStringForApiQuery } from '../../../helper/date'

class FoodList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isUpdateMode: false,
      open: false,
      updateAmountVal: false,
      disabled: false,
      selectKey: -1,
      serve: null,
      food_id: null,
      food_amount: null,
    }
  }

  deleteFoodOfDB = (id, card) => {
    this.props.deleteFoodOfDB(id, card)
  }

  show = (dimmer, name, id, amount) => () => {
    this.setState({
      dimmer,
      open: true,
      food_name: name,
      food_id: id,
      food_amount: amount,
    })
  }

  close = () => this.setState({ open: false })

  render() {
    // const { open, dimmer } = this.state
    const { foodresult } = this.props

    return (
      <div style={{ display: 'flex' }}>
        {foodresult.map((card, i) => {
          const nuturitionInfo = [
            {
              name: '탄',
              value: card.food_carb,
            },
            {
              name: '단',
              value: card.food_protein,
            },
            {
              name: '지',
              value: card.food_fat,
            },
          ]

          return (
            <Segment style={Style.mealCard}>
              <div className="diary-food-meal-list-card-firstRow">
                <p className="diary-food-meal-list-card-firstRow-title">
                  {card.food_name_ko}
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
                      'default',
                      card.food_name_ko,
                      card.eat_log_id,
                      card.eat_log_amount,
                    )}
                    key={i}
                  />

                  <Button
                    icon="trash outline"
                    style={Style.settingIcon}
                    onClick={() =>
                      this.deleteFoodOfDB(
                        card.eat_log_id,
                        card,
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
                  {nuturitionInfo.map(item => (
                    <span className="diary-food-meal-list-card-nutrition-wrapper">
                      <span className="diary-food-meal-list-card-nutrition-title">
                        {item.name}
                      </span>
                      <span className="diary-food-meal-list-card-nutrition-kcal">
                        {item.value}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </Segment>
          )
        })}
        <FoodEditModal
          close={this.close}
          open={this.state.open}
          dimmer={this.state.dimmer}
          name={this.state.food_name}
          id={this.state.food_id}
          amount={this.state.food_amount}
        />
      </div>
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
    deleteFoodOfDB: (id, card) =>
      dispatch(deleteFoodOfDB(id, card)),
  }
}

export default connect(null, mapDispatchToProps)(
  FoodList,
)
