import React from 'react'
import { Grid } from 'semantic-ui-react'
// components
import Container from '../../container/DefaultPageContainer'
import DateNavigation from './DateNavigation'
import TabMenu from './TabMenu'
import ViewRouter from './ViewRouter'
import DiarySummary from './DiarySummary'
import './Diary.css'

const DiaryPage = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default DiaryPage
