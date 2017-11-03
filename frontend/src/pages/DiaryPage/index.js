import React from 'react'
import Navigation from '../../components/Navigation'
import { Grid } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import DiarySummary from './DiarySummary'
import DateNavigation from './DateNavigation'
import TabMenu from './TabMenu'
import ViewRouter from './ViewRouter'
import './Diary.css'

const DiaryPage = () => {
  return (
    <div className="diary-grid">
      <Navigation />
      <DateNavigation />
      <Grid
        columns="equal"
        style={{ margin: '0px' }}
      >
        <Grid.Row stretched>
          <Grid.Column style={{ padding: '0px' }}>
            <TabMenu />
            <ViewRouter />
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
      <Footer />
    </div>
  )
}

export default DiaryPage
