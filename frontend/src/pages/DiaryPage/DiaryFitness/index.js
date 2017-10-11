import React, { Component } from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'
import DiaryFitnessList from './DiaryFitnessList'
import DiaryFitnessInput from './DiaryFitnessInput'
import DiaryFitnessAdd from './DiaryFitnessAdd'
import {
  container,
  header,
  subHeader,
  icon,
  fitnessIcon,
} from './StyledFitness'

class DiaryFitness extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment style={container}>
        <Header style={header}>
          <Header.Subheader style={subHeader}>
            FITNESS DIARY
          </Header.Subheader>
          오늘의 운동 다이어리
          <img
            src={fitnessIcon}
            style={icon}
            alt="의미 없는 운동 다이어리 아이콘 입니다."
            aria-hiddee="true"
          />
        </Header>
        <DiaryFitnessList />
        <DiaryFitnessList />
        <DiaryFitnessInput />
        <DiaryFitnessAdd />
      </Segment>
    )
  }
}

export default DiaryFitness
