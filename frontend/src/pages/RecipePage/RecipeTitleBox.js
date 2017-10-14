import React from 'react'
import {
  Segment,
  Grid,
  Label,
  Table,
} from 'semantic-ui-react'
import * as styled from './StyledRecipe'
import './Recipe.css'

const RecipeTitleBox = () => {
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
            쉬움. 소요시간{' '}
            <span style={{ fontWeight: '700' }}>
              60
            </span>분
          </p>
        </Label>
        <span style={styled.recipeTitle}>
          베리 팬케익
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
                  380
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
                  80
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
                  80
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
                  80
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

export default RecipeTitleBox
