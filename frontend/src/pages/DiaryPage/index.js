import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import { Grid } from 'semantic-ui-react'
import DiaryTab from './DiaryTab'
import DiarySummary from './DiarySummary'
import DiaryView from './DiaryView'
import './Diary.css'

class DiaryPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="diary-grid">
        <Navigation />
        <Grid
          columns="equal"
          style={{ margin: '0px' }}
        >
          <Grid.Row stretched>
            <Grid.Column
              style={{ padding: '0px' }}
            >
              <DiaryTab />
              <DiaryView />
            </Grid.Column>
            <Grid.Column
              width={4}
              style={{
                padding: '0px 0px 0px 7px',
              }}
            >
              <DiarySummary />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default DiaryPage
