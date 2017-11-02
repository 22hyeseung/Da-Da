import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { subheader } from './StyledDiarySummary'

class SectionHeader extends Component {
  render() {
    const {
      subtitle,
      title,
      headerStyle,
    } = this.props
    return (
      <Header style={headerStyle}>
        <Header.Subheader>
          {subtitle.split('\\n').map(line => (
            <span style={subheader}>
              {line}
              <br />
            </span>
          ))}
        </Header.Subheader>
        {title}
      </Header>
    )
  }
}

SectionHeader.defaultProps = {
  subtitle: '',
  title: '',
  headerStyle: {
    marginBottom: '4px',
  },
}

export default SectionHeader
