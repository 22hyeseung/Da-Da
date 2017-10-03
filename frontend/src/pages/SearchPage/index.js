import React, { Component } from 'react'
import {
  Input,
  Grid,
  Header,
} from 'semantic-ui-react'
import Navigation from '../../components/Navigation'
import * as styled from './StyledSearch'

class SearchPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styled.container}>
        <Navigation
          inverted="true"
          color="#fff"
        />

        <Grid class="search-grid-center">
          <Grid.Column width={4} />
          <Grid.Column
            width={8}
            style={styled.centerGrid}>
            <Header
              style={styled.h1}
              as="h1"
              content="어떤 요리를 원하세요?"
              inverted
            />
            <Header
              style={styled.h2}
              as="h2"
              content="레시피를 검색해보세요."
              inverted
            />
            <Input
              style={styled.searchInput}
              icon="search"
              placeholder="Search..."
            />
            <Header
              style={styled.h5}
              as="h5"
              content="하루 권장량 기준, 현재 소비가능한 칼로리는 300kcal입니다."
              inverted
            />
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid>
      </div>
    )
  }
}

export default SearchPage
