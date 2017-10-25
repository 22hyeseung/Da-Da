import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import {
  listItem,
  listItemElse,
  listContentKcal,
  listContentLabel,
} from './StyledDiarySummary'

class SummaryListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { label, kcal } = this.props
    return (
      <List.Item
        style={{
          ...listItem,
          ...listItemElse,
        }}
      >
        <List.Content style={listContentLabel}>
          {label}
        </List.Content>
        <List.Content style={listContentKcal}>
          {kcal}
        </List.Content>
      </List.Item>
    )
  }
}

export default SummaryListItem
