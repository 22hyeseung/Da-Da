import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Navigation from '../../components/Navigation'
import './404.css'
import { connect } from 'react-redux'

const button = {
  width: '190px',
  marginTop: '37px',
  borderRadius: '18px',
  backgroundImage:
    'linear-gradient(259deg, #26d0ce, #1a2980)',
  color: '#fff',
  fontWeight: '100',
}

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="notFound-wrapper">
        <div className="notFound-grid">
          <Navigation
            color="#fff"
            inverted="true"
          />
          <div class="notFound-content">
            <span className="notFound-header">
              404
            </span>
            <span className="notFound-subHeader">
              현재 찾을 수 없는 페이지를 요청 하셨습니다.
            </span>
            <Button
              style={button}
              onClick={() => {
                this.props.history.push('/')
              }}
            >
              홈으로 돌아가기
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
