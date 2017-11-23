import React from 'react'
import { connect } from 'react-redux'
import {
  Segment,
  Grid,
  Label,
  Table,
} from 'semantic-ui-react'
import * as styled from '../StyledRecipe'
import '../Recipe.css'

function calcNutrition(
  defaultNutrition,
  defaultServing,
  serving,
) {
  return (
    defaultNutrition / defaultServing * serving
  )
}

const RecipeTitleInfo = props => {
  return (
    <Grid style={styled.recipeSummaryWrap}>
      <Segment style={styled.recipeSummary}>
        <Label
          as="a"
          color="black"
          ribbon
          style={styled.ribbonLabel}
        >
          <p style={{ paddingLeft: '15px' }}>
            {props.recipeContent.recipe_level}.
            소요시간{' '}
            <span style={{ fontWeight: '700' }}>
              {props.recipeContent.recipe_time}
            </span>
          </p>
        </Label>
        <span style={styled.recipeTitle}>
          {props.recipeContent.recipe_name_ko}
        </span>
        <Table
          basic="very"
          style={styled.nutritionTable}
        >
          <Table.Body as="tbody">
            <Table.Row>
              <Table.Cell
                style={{
                  fontWeight: '700',
                  padding: '0',
                }}
              >
                칼로리
              </Table.Cell>
              <Table.Cell
                textAlign="right"
                style={{
                  ...styled.unitData,
                  fontSize: '21px',
                }}
              >
                <span style={styled.factsData}>
                  {calcNutrition(
                    props.recipeContent
                      .recipe_kcal,
                    props.defaultServing,
                    props.serving,
                  )}
                </span>kcal
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell
                style={{ padding: '0' }}
              >
                탄수화물
              </Table.Cell>
              <Table.Cell
                textAlign="right"
                style={styled.unitData}
              >
                <span style={styled.factsData}>
                  {calcNutrition(
                    props.recipeContent
                      .recipe_carb,
                    props.defaultServing,
                    props.serving,
                  )}
                </span>g
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell
                style={{ padding: '0' }}
              >
                단백질
              </Table.Cell>
              <Table.Cell
                textAlign="right"
                style={styled.unitData}
              >
                <span style={styled.factsData}>
                  {calcNutrition(
                    props.recipeContent
                      .recipe_protein,
                    props.defaultServing,
                    props.serving,
                  )}
                </span>g
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell
                style={{ padding: '0' }}
              >
                지방
              </Table.Cell>
              <Table.Cell
                textAlign="right"
                style={styled.unitData}
              >
                <span style={styled.factsData}>
                  {calcNutrition(
                    props.recipeContent
                      .recipe_fat,
                    props.defaultServing,
                    props.serving,
                  )}
                </span>g
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell
                style={{ padding: '0' }}
              />
              <Table.Cell
                style={styled.unitData}
              />
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    recipeContent: state.recipe.recipeContent,
    defaultServing: state.recipe.defaultServing,
    serving: state.recipe.serving,
  }
}

export default connect(mapStateToProps, null)(
  RecipeTitleInfo,
)
