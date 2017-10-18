import React, { Component } from 'react'
import {
  Segment,
  Header,
  List,
} from 'semantic-ui-react'
import summaryImg from '../../static/img/report_nutrition_img.png'
import './Report.css'

class ReportNutritionSummary extends Component {
  render() {
    return (
      <Segment
        style={{
          padding: '25px 25px 115px',
          boxShadow:
            '0 2px 5px 0 rgba(79, 64, 64, 0.2)',
          border: 'none',
          backgroundImage: `url(${summaryImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: '70%',
        }}
      >
        <Header
          style={{
            fontSize: '28px',
            fontWeight: '100',
            fontFamily: 'Spoqa Han Sans',
            textAlign: 'left',
            color: '#16325C',
            margin: '0px',
          }}
        >
          <Header.Subheader
            style={{
              fontFamily: 'montserrat-bold',
              fontSize: '14px',
              textAlign: 'left',
              color: '#1f2e79',
            }}
          >
            SUMMARY
          </Header.Subheader>
          요약
        </Header>

        <List
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '140px',
            justifyContent: 'space-between',
            borderBottom: 'none',
            marginTop: '0px',
          }}
        >
          <List.Item>
            <List.Content
              floated="right"
              style={{
                fontSize: '12px',
                fontWeight: '100',
                color: '#a8b7c7',
              }}
            >
              (%)
            </List.Content>
          </List.Item>
          <List.Item
            className="report-summary-list"
            style={{ display: 'flex' }}
          >
            <List.Content
              className="report-summary-title"
              verticalAlign="bottom"
            >
              탄수화물
            </List.Content>
            <List.Content
              floated="right"
              className="report-result"
            >
              60%
            </List.Content>
          </List.Item>
          <List.Item
            className="report-summary-list"
            style={{ display: 'flex' }}
          >
            <List.Content className="report-summary-title">
              단백질
            </List.Content>
            <List.Content
              floated="right"
              className="report-result"
            >
              20%
            </List.Content>
          </List.Item>
          <List.Item
            className="report-summary-list"
            style={{ display: 'flex' }}
          >
            <List.Content className="report-summary-title">
              지방
            </List.Content>
            <List.Content
              floated="right"
              className="report-result"
            >
              20%
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    )
  }
}

export default ReportNutritionSummary
