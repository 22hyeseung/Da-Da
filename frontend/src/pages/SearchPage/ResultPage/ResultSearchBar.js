import React, { Component } from 'react'
import {
  Input,
  Icon,
} from 'semantic-ui-react'
import {
  withRouter,
} from 'react-router-dom'
import {
  searchWrapper,
  cameraIcon,
  iconStyle,
} from './StyledResult'
import { connect } from 'react-redux'
import { getRecipeSearch } from '../../../actions/recipe'

class ResultSearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

  handleSearch = (e) => {
    if (e.keyCode === 13 || e === 'pass') {
      this.props.getRecipeSearch(this.state.searchText)
      this.props.updateSearchText(this.state.searchText)
    }
  }

  handleSearchTextChange = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    return (
      <div style={searchWrapper}>
        <Input
          className="search-result-searchbar"
          icon={
            <Icon name='search' circular link
              onClick={() => this.handleSearch('pass')}
            />
          }
          value={this.state.searchText}
          onKeyDown={this.handleSearch}
          onChange={this.handleSearchTextChange}
        />
        <img
          src={cameraIcon}
          style={iconStyle}
          alt="이미지를 업로드하여 식단을 검색"
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
