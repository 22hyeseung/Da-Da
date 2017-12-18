import React, { Component } from 'react'
// 컴포넌트
import Container from '../../container/DefaultPageContainer'
import WeekNavigation from './WeekNavigation'
import SectionContainer from './SectionContainer'

export default class ReportPage extends Component {
  render() {
    return (
      <Container>
        <WeekNavigation />
        <SectionContainer title="칼로리" />
        <SectionContainer title="영양분" />
      </Container>
    )
  }
}
