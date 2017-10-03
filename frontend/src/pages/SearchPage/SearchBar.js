import React, { Component } from 'react'
import {
  Grid,
  Header,
  Input,
} from 'semantic-ui-react'

const centerGrid = {
  textAlign: 'center',
  position: 'relative',
}

// const fontStyle = (size, top, left) => ({
//   fontFamily: 'Spoqa Han Sans',
//   fontWeight: '100',
//   margin: '0',
//   size: size + 'px',
//   position: 'absolute',
//   top: top + 'px',
//   left: left + 'px',
// })

const h1 = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  fontSize: '56px',
  margin: '0',
  position: 'absolute',
  top: '195px',
  left: '40px',
}

const h2 = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  fontSize: '28px',
  margin: '0',
  position: 'absolute',
  top: '270px',
  left: '160px',
}

const h5 = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  fontSize: '14px',
  margin: '0',
  position: 'absolute',
  top: '410px',
  left: '125px',
}

const searchInput = {
  width: '581px',
  position: 'absolute',
  top: '340px',
  left: '10px',
}

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={4} />
          <Grid.Column
            width={8}
            style={centerGrid}>
            <Header
              style={h1}
              as="h1"
              content="어떤 요리를 원하세요?"
              inverted
            />
            <Header
              style={h2}
              as="h2"
              content="레시피를 검색해보세요."
              inverted
            />
            <Input
              style={searchInput}
              icon="search"
              placeholder="Search..."
            />
            <Header
              style={h5}
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
