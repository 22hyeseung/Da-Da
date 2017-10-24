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
  { key: 1, text: '1', value: '1' },
  { key: 2, text: '2', value: '2' },
  { key: 3, text: '3', value: '3' },
  { key: 4, text: '4', value: '4' },
  { key: 5, text: '5', value: '5' },
  { key: 6, text: '6', value: '6' },
]

class IngredientBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //const temp = JSON.parse(((this.props.recipe.recipe_ingredient)) || null)
    //const ingredient = temp

    const ingredient = eval("("+this.props.recipe.recipe_ingredient+")")

    console.log(ingredient[0])

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
              defaultValue={this.props.recipe.recipe_serving}
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
              <List.Item>계란</List.Item>
              <List.Item>코티지 치즈</List.Item>
              <List.Item>차전자피 가루</List.Item>
              <List.Item>버터 또는 코코넛 오일</List.Item>
            </List>
            <List style={styled.ingredientAmountList}>
              <List.Item>1개</List.Item>
              <List.Item>50g</List.Item>
              <List.Item>1/4 Tsp</List.Item>
              <List.Item>15g</List.Item>
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
    recipe: state.recipe.recipeContent,
  }
}

export default connect(mapStateToProps, null)(IngredientBox)
