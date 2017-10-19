import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Grid } from 'semantic-ui-react'
import {
  header,
  subHeader,
  tabStyle,
  tabImage,
} from './StyledHome'
import './Home.css'

class HomeTab extends Component {
  render() {
    const {
      tabName,
      msg1,
      msg2,
      linkTo,
      order,
    } = this.props
    return (
      <Grid.Column style={{ padding: '0px' }}>
        <span className="home-label">
          <Header style={header}>
            <Header.Subheader style={subHeader}>
              {tabName} DIARY
            </Header.Subheader>
            오늘<br />
            {msg1}
            <br />
            {msg2}
            <br />
          </Header>
        </span>
        <Link to={linkTo}>
          <div
            className={`home-rightColumn-${order}`}
            style={{
              ...tabStyle,
              backgroundImage: `url(${tabImage[
                tabName
              ]})`,
            }}
          />
        </Link>
      </Grid.Column>
    )
  }
}
export default HomeTab
