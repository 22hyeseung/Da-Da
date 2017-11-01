import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import fitnessIconDefault from '../../static/img/diary-fitness_default.svg'
import fitnessIconWhite from '../../static/img/diary-fitness_w.svg'
import foodIconDefault from '../../static/img/diary-food_default.svg'
import foodIconWhite from '../../static/img/diary-food_w.svg'
import reviewIconDefault from '../../static/img/diary-review_default.svg'
import reviewIconWhite from '../../static/img/diary-review_w.svg'
import MdAdd from 'react-icons/lib/md/add'
const routes = [
  {
    linkLabel: '식단',
    linkTo: '/food',
  },
  {
    linkLabel: '운동',
    linkTo: '/fitness',
  },
  {
    linkLabel: '일기',
    linkTo: '/review',
  },
]
const colors = ['black']

class DiaryTab extends Component {
  state = { activeItem: 'food' }

  static propTypes = {
    color: PropTypes.string,
  }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state
    return (
      <Menu
        color={color}
        widths={3}
        style={{
          flexGrow: 'initial',
          boxShadow: 'none',
          marginBottom: '7px',
        }}
      >
        <Menu.Item
          className="diary-label"
          active={activeItem === 'food'}
          onClick={this.handleItemClick}
          style={{
            justifyContent: 'flex-start',
            color: '#fff',
            backgroundImage:
              'linear-gradient(263deg, #485563, #29323c)',
            fontWeight: '100',
          }}
        >
          식단
          <img
            src={foodIconWhite}
            style={{
              height: '14px',
            }}
          />
        </Menu.Item>
        <Menu.Item
          active={activeItem === 'fitness'}
          onClick={this.handleItemClick}
          style={{
            justifyContent: 'flex-start',
            color: '#16325c',
            fontWeight: '100',
          }}
        >
          운동
          <img
            src={fitnessIconDefault}
            style={{
              height: '14px',
            }}
          />
        </Menu.Item>
        <Menu.Item
          active={activeItem === 'review'}
          onClick={this.handleItemClick}
          style={{
            justifyContent: 'flex-start',
            color: '#16325c',
            fontWeight: '100',
          }}
        >
          일기
          <img
            src={reviewIconDefault}
            style={{
              height: '14px',
            }}
          />
        </Menu.Item>
      </Menu>
    )
  }
}
const MenuExampleColoredMenus = () => {
  const menus = colors.map(color => (
    <DiaryTab color={color} key={color} />
  ))

  return <div>{menus}</div>
}

export default DiaryTab
