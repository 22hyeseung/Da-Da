import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Input, Icon } from 'semantic-ui-react'
import { searchWrapper } from './StyledResult'
import './Result.css'
import { getRecipeSearch } from '../../../actions/recipe'

class ResultSearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

  handleSearch = e => {
    if (e.keyCode === 13 || e === 'pass') {
      this.props.getRecipeSearch(
        this.state.searchText,
      )
      this.props.updateSearchText(
        this.state.searchText,
      )
    }
  }

  handleSearchTextChange = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    return (
      <div style={searchWrapper}>
        <Input
          style={{ paddingLeft: '18px' }}
          className="search-result-searchbar"
          icon={
            <Icon
              name="search"
              link
              onClick={() =>
                this.handleSearch('pass')}
            />
          }
          value={this.state.searchText}
          onKeyDown={this.handleSearch}
          onChange={this.handleSearchTextChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecipeSearch: searchText =>
      dispatch(getRecipeSearch(searchText)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ResultSearchBar))
