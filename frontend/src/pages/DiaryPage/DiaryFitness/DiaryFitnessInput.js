import React from 'react'
import {
  Button,
  Input,
  List,
  Divider,
} from 'semantic-ui-react'
import TiTimes from 'react-icons/lib/ti/times'
import TiEquals from 'react-icons/lib/ti/equals'

const inputStyle = {
  width: '90%',
}

const textBig = {
  fontFamily: 'Montserrat-Bold',
  fontSize: '28px',
  letterSpacing: '-1px',
  color: '#16325c',
}

const textSmall = {
  fontSize: '12px',
  letterSpacing: '-0.3px',
  color: '#16325c',
}

const buttonWrap = {
  float: 'right',
  marginTop: '40px',
}

const button = {
  width: '93px',
  fontWeight: '300',
}

const submitButton = {
  width: '93px',
  fontWeight: '300',
  color: '#fff',
  backgroundImage:
    'linear-gradient(249deg, #485563, #29323c)',
  marginLeft: '7px',
}

const DiaryFitnessInput = () => {
  return (
    <div>
      <List horizontal style={{ width: '95%' }}>
        <List.Item
          style={{ width: '60%', margin: '0' }}
        >
          <List.Content>
            <Input
              icon="search"
              placeholder="어떤 종류의 운동을 하셨나요?"
              style={inputStyle}
            />
            <TiTimes
              size={25}
              style={{
                marginLeft: '15px',
                color: '#a8b7c7',
              }}
            />
          </List.Content>
        </List.Item>
        <List.Item
          style={{ width: '30%', margin: '0' }}
        >
          <List.Content>
            <Input placeholder="얼마나 운동하셨나요?" />
            <TiEquals
              size={25}
              style={{
                marginLeft: '15px',
                color: '#a8b7c7',
              }}
            />
          </List.Content>
        </List.Item>
        <List.Item
          style={{
            textAlign: 'right',
            width: '10%',
            margin: '0',
          }}
        >
          <List.Content style={textSmall}>
            <span style={textBig}>0 </span>kcal
          </List.Content>
        </List.Item>
        <div style={buttonWrap}>
          <Button basic style={button}>
            취소
          </Button>
          <Button style={submitButton}>등록</Button>
        </div>
      </List>
      <Divider />
    </div>
  )
}

export default DiaryFitnessInput
