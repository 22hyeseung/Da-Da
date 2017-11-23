import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Segment,
  Grid,
  Label,
  Table,
} from 'semantic-ui-react'
import * as styled from '../StyledRecipe'
import '../Recipe.css'

class RecipeTitleBox extends Component {
  render() {
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
              {
                this.props.recipeContent
                  .recipe_level
              }. 소요시간{' '}
              <span style={{ fontWeight: '700' }}>
                {
                  this.props.recipeContent
                    .recipe_time
                }
              </span>
            </p>
          </Label>
          <span style={styled.recipeTitle}>
            {
              this.props.recipeContent
                .recipe_name_ko
            }
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
                    {
                      this.props.recipeContent
                        .recipe_kcal
                    }
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
                    {
                      this.props.recipeContent
                        .recipe_carb
                    }
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
                    {
                      this.props.recipeContent
                        .recipe_protein
                    }
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
                    {
                      this.props.recipeContent
                        .recipe_fat
                    }
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
}

const mapStateToProps = state => {
  return {
    recipeContent: state.recipe.recipeContent,
  }
}

export default connect(mapStateToProps, null)(
  RecipeTitleBox,
)
