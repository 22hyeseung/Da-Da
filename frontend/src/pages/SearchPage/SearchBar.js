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
}

const h2 = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  fontSize: '28px',
  margin: '0',
}

const headerGrid = {
  textAlign: 'center',
  position: 'absolute',
  top: '140px',
  left: '112px',
  width: '514px',
  height: '124px',
}

const searchInput = {
  width: '581px',
  height: '41px',
  position: 'absolute',
  top: '334px',
  left: '78px',
}

const h5 = {
  width: '349px',
  height: '20px',
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  fontSize: '14px',
  margin: '0',
  position: 'absolute',
  top: '397px',
  left: '195px',
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
            <Grid.Row style={headerGrid}>
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
            </Grid.Row>
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
