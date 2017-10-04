import React, { Component } from 'react'
import {
  Segment,
  Grid,
  Label,
  Table,
} from 'semantic-ui-react'
import Navigation from '../../components/Navigation'
import bgImg from '../../static/img/recipe_img.jpg'
import IngredientBox from './IngredientBox'
import CookingProcess from './CookingProcess'

class RecipePage extends Component {
  render() {
    return (
      <div
        style={{
          width: '1440px',
          height: '1080px',
        }}>
        <div
          style={{
            height: '464px',
            backgroundImage: `url(${bgImg})`,
            backgroundSize: '1550px',
            backgroundPosition: 'left center',
            position: 'relative',
          }}>
          <Navigation
            inverted="true"
            color="#fff"
            opacity="0.7"
            backgroundImage="linear-gradient(268deg, #485563, #29323c)"
          />

          <Grid
            style={{
              position: 'absolute',
              left: '130px',
              bottom: '41px',
            }}>
            <Segment
              style={{
                width: '480px',
                height: '325px',
                borderRadius: '8px',
                backgroundColor:
                  'rgba(255, 255, 255, 0.9)',
                boxShadow:
                  '0 0 13px 0 rgba(79, 64, 64, 0.2)',
              }}>
              <Label
                as="a"
                color="black"
                ribbon
                style={{
                  width: '202px',
                  height: '37px',
                  borderRadius: '0 33px 33px 0',
                  backgroundImage:
                    'linear-gradient(260deg, #485563, #29323c)',
                  fontSize: '14px',
                  fontWeight: '300',
                  lineHeight: '20px',
                }}>
                <p
                  style={{ paddingLeft: '15px' }}>
                  쉬움. 소요시간{' '}
                  <span
                    style={{ fontWeight: '700' }}>
                    60
                  </span>분
                </p>
              </Label>
              <span
                style={{
                  position: 'absolute',
                  top: '74px',
                  left: '27px',
                  fontSize: '42px',
                  fontWeight: '200',
                  lineHeight: '1.1',
                }}>
                베리 팬케익
              </span>
              <Table
                basic="very"
                style={{
                  width: '180px',
                  position: 'absolute',
                  bottom: '37px',
                  right: '20px',
                  fontSize: '14px',
                }}>
                <Table.Body as="tbody">
                  <Table.Row>
                    <Table.Cell
                      style={{
                        fontWeight: '700',
                      }}>
                      칼로리
                    </Table.Cell>
                    <Table.Cell
                      textAlign="right"
                      style={{
                        fontSize: '21px',
                      }}>
                      <span
                        style={{
                          fontFamily:
                            'Montserrat-Bold',
                          fontWeight: '700',
                        }}>
                        380
                      </span>kcal
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>탄수화물</Table.Cell>
                    <Table.Cell
                      textAlign="right"
                      style={{
                        fontSize: '21px',
                      }}>
                      <span
                        style={{
                          fontWeight: '700',
                          fontFamily:
                            'Montserrat-Bold',
                        }}>
                        80
                      </span>g
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>단백질</Table.Cell>
                    <Table.Cell
                      textAlign="right"
                      style={{
                        fontSize: '21px',
                      }}>
                      <span
                        style={{
                          fontWeight: '700',
                          fontFamily:
                            'Montserrat-Bold',
                        }}>
                        80
                      </span>g
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>지방</Table.Cell>
                    <Table.Cell
                      textAlign="right"
                      style={{
                        fontSize: '21px',
                      }}>
                      <span
                        style={{
                          fontWeight: '700',
                          fontFamily:
                            'Montserrat-Bold',
                        }}>
                        80
                      </span>g
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>
          </Grid>
        </div>
        <div
          style={{
            height: '555px',
            position: 'relative',
          }}>
          <IngredientBox />
          <CookingProcess />
        </div>
      </div>
    )
  }
}

export default RecipePage
