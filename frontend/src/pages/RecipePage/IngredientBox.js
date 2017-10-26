import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Icon,
  Dropdown,
  List,
} from 'semantic-ui-react'
import * as styled from './StyledRecipe'

const options = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 },
  { key: 6, text: '6', value: 6 },
]

class IngredientBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe_serving: 1
    }
  }

  componentDidMount() {
    this.setState({
      recipe_serving: this.props.recipeAmount
    })
  }

  handleAmount = (e, data) => {
    this.props.updateRecipeAmount(data.value)
  }

  render() {
    return (
      <Card style={styled.cardWrap}>
        <Card.Content>
          <Card.Header style={styled.cardHeader}>
            <p style={{ margin: '7px 0 15px 0' }}>
              재료
            </p>
            <Icon name="user" size="big" />
            <Dropdown
              downward
              compact
              selection
              options={options}
              onChange={this.handleAmount}
              defaultValue={this.state.recipe_serving}
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
        <Card.Content style={styled.cardContent}>
          <div style={styled.ingredientListWrap}>
            <List style={styled.ingredientNameList}>
              {
                this.props.recipeIngredient.map((val, i) => {
                  return (
                    <List.Item>{val.name}</List.Item>
                  )
                })
              }
            </List>
            <List style={styled.ingredientAmountList}>
              {
                this.props.recipeIngredient.map((val, i) => {
                  return (
                    <List.Item>{val.num} {val.unit}</List.Item>
                  )
                })
              }
            </List>
            <span style={styled.subLabel}>
              * Tsp : 테이블스푼
            </span>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipeContent: state.recipe.recipeContent,
    recipeIngredient: state.recipe.recipeIngredient,
  }
}

export default connect(mapStateToProps, null)(IngredientBox)
