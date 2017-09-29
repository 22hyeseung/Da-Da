import React from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react'
import * as Fa from 'react-icons/lib/fa'
const LoginPage = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h2"
          color="grey"
          textAlign="center">
          Da, Da
        </Header>
        <Form size="large">
          <Button
            color="facebook"
            fluid
            size="large">
            <Fa.FaFacebookSquare />
            Facebook 계정으로 로그인 하기
          </Button>
          <Button
            color="instagram"
            fluid
            size="large">
            <Fa.FaInstagram />
            Instagram 계정으로 로그인 하기
          </Button>
          <Button positive fluid size="large">
            Naver 계정으로 로그인 하기
          </Button>
          <Button
            color="yellow"
            fluid
            size="large">
            Kakao 계정으로 로그인 하기
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginPage
