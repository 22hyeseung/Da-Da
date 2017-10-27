import React, { Component } from 'react'
import {
  Grid,
  Header,
  Input,
  Icon,
} from 'semantic-ui-react'
import {
  withRouter,
} from 'react-router-dom'
import * as Style from './StyledSearch'
import './Search.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

  handleSearch = e => {
    if (e.keyCode === 13) {
      this.props.history.push('/search/' + this.state.searchText)
    }
  }

  handleSearchTextChange = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={3} />
          <Grid.Column
            width={10}
            style={Style.centerGrid}
          >
            <Grid.Row style={Style.headerGrid}>
              <Header
                style={Style.h1}
                as="h1"
                content="어떤 요리를 원하세요?"
                inverted
              />
              <Header
                style={Style.h2}
                as="h2"
                content="레시피를 검색해보세요."
                inverted
              />
            </Grid.Row>
            <Input
              className={this.props.className}
              icon={
                <Icon name='search' circular link
                  onClick={() => this.props.history.push('/search/' + this.state.searchText)}
                />
              }
              value={this.state.searchText}
              onKeyDown={this.handleSearch}
              onChange={this.handleSearchTextChange}
            />
            <Icon name='camera' link size='large' style={Style.searchCamera}
              onClick={() => this.props.history.push('/search/' + this.state.searchText)}
            />
            <Header
              style={Style.h5}
              as="h5"
              content="하루 권장량 기준, 현재 소비가능한 칼로리는 300kcal입니다."
              inverted
            />
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </div>
    )
  }
}

export default withRouter(SearchBar)
