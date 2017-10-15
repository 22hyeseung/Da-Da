import React from 'react'
import Navigation from '../../components/Navigation'
import { Grid } from 'semantic-ui-react'
import DiarySubNav from './DiarySubNav'
import DiaryTabNav from './DiaryTabNav'
import DiaryViewRouter from './DiaryViewRouter'
import DiarySummary from './DiarySummary'
import './Diary.css'

const DiaryPage = () => {
  return (
    <div className="diary-grid">
      <Navigation />
      <DiarySubNav />
      <Grid
        columns="equal"
        style={{ margin: '0px' }}
      >
        <Grid.Row stretched>
          <Grid.Column style={{ padding: '0px' }}>
            <DiaryTabNav />
            <DiaryViewRouter />
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

export default DiaryPage
