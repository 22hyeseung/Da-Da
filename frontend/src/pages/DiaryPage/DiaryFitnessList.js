import React from 'react'
import {
  Button,
  List,
  Divider,
} from 'semantic-ui-react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrashO from 'react-icons/lib/fa/trash-o'

const textSmall = {
  fontSize: '12px',
}

const text = {
  fontSize: '17px',
  letterSpacing: '-0.3px',
  color: '#16325c',
}

const textBig = {
  fontSize: '28px',
  letterSpacing: '-1px',
  color: '#16325c',
  fontFamily: 'Montserrat-Bold',
}

const buttonIcon = {
  padding: '3px',
  color: '#a8b7c7',
  backgroundColor: 'transparent',
  display: 'inline-block',
}
const DiaryFitnessAdd = () => (
  <div>
    <List horizontal style={{ width: '95%' }}>
      <List.Item
        style={{ width: '20%', margin: '0' }}
      >
        <List.Header style={text}>
          팔 굽혀 펴기
        </List.Header>
      </List.Item>
      <List.Item
        style={{ width: '20%', margin: '0' }}
      >
        <Button style={buttonIcon}>
          <FaPencil size={20} />
        </Button>
        <Button style={buttonIcon}>
          <FaTrashO size={20} />
        </Button>
      </List.Item>
      <List.Item
        style={{
          width: '30%',
          margin: '0',
          textAlign: 'right',
        }}
      >
        <List.Header style={text}>
          30분
        </List.Header>
      </List.Item>
      <List.Item
        style={{
          width: '30%',
          margin: '0',
          textAlign: 'right',
        }}
      >
        <List.Header style={textSmall}>
          <span style={textBig}>105 </span>kcal
        </List.Header>
      </List.Item>
    </List>
    <Divider />
  </div>
)

export default DiaryFitnessAdd
