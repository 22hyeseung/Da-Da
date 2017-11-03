import React from 'react'
// 스타일링
import { Header } from 'semantic-ui-react'
import {
  header,
  subHeader,
} from '../StyledReport'
import '../Report.css'

const SectionHeader = ({ title }) => {
  return (
    <div>
      <Header style={header}>
        <Header.Subheader style={subHeader}>
          THIS WEEK’s
        </Header.Subheader>
        {title} 리포트
      </Header>
    </div>
  )
}

export default SectionHeader
