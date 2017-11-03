import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import {
  header,
  subHeader,
  iconSet,
} from './StyledDiary'

class SubHeader extends Component {
  render() {
    const {
      tabNameEN,
      tabNameKR,
      icon,
    } = this.props
    return (
      <Header style={header}>
        <Header.Subheader style={subHeader}>
          {tabNameEN} DIARY
        </Header.Subheader>
        오늘의 {tabNameKR}
        <img
          src={iconSet[icon].default}
          style={{
            height: '27px',
            marginBottom: '9px',
          }}
          alt="의미없는 아이콘입니다."
          aria-hidden="true"
        />
      </Header>
    )
  }
}

export default SubHeader
