import React, { Component } from 'react'
import {
  Grid,
  Header,
  Input,
} from 'semantic-ui-react'
import * as styled from './StyledSearch'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={4} />
          <Grid.Column
            width={8}
            style={styled.centerGrid}
          >
            <Grid.Row style={styled.headerGrid}>
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
            </Grid.Row>
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

export default SearchBar
