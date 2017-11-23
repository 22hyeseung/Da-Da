import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Icon,
  Dropdown,
  List,
} from 'semantic-ui-react'
import * as Style from '../StyledRecipe'
import { changeServing } from '../../../actions/recipe'

const options = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 },
  { key: 6, text: '6', value: 6 },
  { key: 7, text: '7', value: 7 },
  { key: 8, text: '8', value: 8 },
  { key: 9, text: '9', value: 9 },
]

const IngredientBox = props => {
  return (
    <Card style={Style.cardWrap}>
      <Card.Content>
        <Card.Header style={Style.cardHeader}>
          <p style={{ margin: '7px 0 15px 0' }}>
            재료
          </p>
          <Icon name="user" size="big" />
          <Dropdown
            downward
            compact
            selection
            options={options}
            onChange={e =>
              props.changeServing(
                e.target.textContent,
              )}
            defaultValue={props.defaultServing}
          />
          <span
            style={{
              fontWeight: '300',
              marginLeft: '7px',
            }}
          >
            인분
          </span>
        </Card.Header>
      </Card.Content>
      <Card.Content style={Style.cardContent}>
        <div style={Style.ingredientListWrap}>
          <List style={Style.ingredientNameList}>
            {props.recipeIngredient.map(
              (val, i) => {
                return (
                  <List.Item>
                    {val.name}
                  </List.Item>
                )
              },
            )}
          </List>
          <List
            style={Style.ingredientAmountList}
          >
            {props.recipeIngredient.map(
              (val, i) => {
                return (
                  <List.Item>
                    {val.num /
                      props.defaultServing *
                      props.serving}{' '}
                    {val.unit}
                  </List.Item>
                )
              },
            )}
          </List>
          <span style={Style.subLabel}>
            * Tsp : 테이블스푼
          </span>
        </div>
      </Card.Content>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    defaultServing: state.recipe.defaultServing,
    serving: state.recipe.serving,
    recipeIngredient:
      state.recipe.recipeIngredient,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeServing: serving =>
      dispatch(changeServing(serving)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IngredientBox)
