import React, { Component } from 'react'
import {
  Search,
  Grid,
  Header,
} from 'semantic-ui-react'
import Navigation from '../../components/Navigation'
import bgImg from '../../static/img/search_bg.jpg'
import './Search.css'

class SearchPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          color: '#fff',
          height: '780px',
        }}>
        <Navigation
          inverted="true"
          color="#fff"
        />

        <Grid class="search-grid-center">
          <Grid.Column width={4} />
          <Grid.Column
            width={8}
            className="search-grid-center">
            <Header
              style={{
                fontFamily: 'Spoqa Han Sans',
                fontWeight: '100',
                fontSize: '56px',
                margin: '0',
              }}
              as="h1"
              content="어떤 요리를 원하세요?"
              inverted
            />
            <Header
              style={{
                fontFamily: 'Spoqa Han Sans',
                fontWeight: '100',
                fontSize: '28px',
                margin: '0',
              }}
              as="h5"
              content="레시피를 검색해보세요."
              inverted
            />
            <Search />
            <Header
              style={{
                fontFamily: 'Spoqa Han Sans',
                fontWeight: '100',
                fontSize: '14px',
                margin: '0',
              }}
              as="h6"
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
