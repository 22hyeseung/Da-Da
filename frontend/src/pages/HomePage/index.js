import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
class HomePage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Container text>
          <Header
            as="h1"
            content="목표를 향해 한 발짝 더!"
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '3em',
              color: 'black',
            }}
          />
          <Header
            as="h2"
            content="오늘도 건강한 하루를 시작해볼까요?"
            inverted
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              color: 'grey',
            }}
          />
          <Button primary size="huge">
            시작하기
            <Icon name="right arrow" />
          </Button>
        </Container>
      </div>
    )
  }
}

export default HomePage
