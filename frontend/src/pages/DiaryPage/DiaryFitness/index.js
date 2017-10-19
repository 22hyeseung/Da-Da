import React, { Component } from 'react'

// 스타일링
import { Segment } from 'semantic-ui-react'
import { container, icon } from './StyledFitness'

// 컴포넌트
import DiarySubHeader from '../DiarySubHeader'
import DiaryFitnessList from './DiaryFitnessList'
import DiaryFitnessInput from './DiaryFitnessInput'
import DiaryFitnessAdd from './DiaryFitnessAdd'

class DiaryFitness extends Component {
  render() {
    return (
      <Segment style={container}>
        <DiarySubHeader
          tabNameEN="FITNESS"
          tabNameKR="운동 다이어리"
          icon="fitnessIcon"
        />
        <DiaryFitnessList />
        <DiaryFitnessList />
        <DiaryFitnessInput />
        <DiaryFitnessAdd />
      </Segment>
    )
  }
}

export default DiaryFitness
