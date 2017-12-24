import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'
import bgImg from '../../static/img/fitness_bg.png'
import FitnessIcon from '../../static/img/diary-fitness_default.svg'
import ShareDiaryFitnessList from './ShareDiaryFitnessList'

const listWrapper = {
  width: '80%',
  color: 'black',
}

class ShareDiaryFitness extends Component {
  render() {
    return (
      <Segment
        style={{
          overflow: 'auto',
          padding: '33px 36px',
          boxShadow: 'none',
          border: '1px solid #D8DDE6',
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          backgroundSize: '24%',
          backgroundAttachment: 'local',
          marginBottom: '0px',
          minHeight: '200px',
        }}
      >
        <Header
          style={{
            fontSize: '28px',
            fontWeight: '300',
            color: '#16325C',
            marginBottom: '42px',
          }}
        >
          <Header.Subheader
            style={{
              fontFamily: 'montserrat-bold',
              fontSize: '14px',
              color: '#1f2e79',
            }}
          >
            FITNESS DIARY
          </Header.Subheader>
          오늘의 운동 다이어리
          <img
            src={FitnessIcon}
            style={{
              height: '27px',
              marginBottom: '9px',
            }}
            alt="운동 다이어리를 표시하는 아이콘입니다."
          />
        </Header>
        <div style={listWrapper}>
          {this.props.burn.length > 0
            ? this.props.burn.map((val) => <ShareDiaryFitnessList burn={val} />)
            : '오늘은 운동을 하지 않았어요..'}
        </div>
      </Segment>
    )
  }
}

export default ShareDiaryFitness
