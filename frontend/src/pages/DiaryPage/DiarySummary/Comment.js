import React, { Component } from 'react'
import { svgEmoji } from '../../../helper/emoji'
// 스타일링
import { Segment } from 'semantic-ui-react'
import { comment } from './StyledDiarySummary'

const Comment = props => {
  const { restKcal, goalKcal, eatKcal } = props

  return restKcal < 0 ? (
    // 목표칼로리+운동칼로리 < 섭취칼로리
    <Segment style={comment}>
      <p>
        {restKcal * -1}kcal 초과했어요!{svgEmoji('😵')}
        <br />괜찮아요! 내일의 목표칼로리를<br /> 낮추실 수 있습니다!{svgEmoji('😊')}
      </p>
    </Segment>
  ) : restKcal ? (
    // 목표칼로리+운동칼로리 >= 섭취칼로리
    <Segment style={comment}>
      {/* 목표 칼로리의 2/3 이상 섭취 하였는 지 확인(운동칼로리 제외) */}
      {goalKcal / eatKcal < 1.5 ? (
        <p>
          {restKcal}kcal 남았습니다! <br />
          오늘처럼만 한다면 30일 후에는{' '}
          <span
            style={{
              fontWeight: '400',
            }}
          >
            {/* 1kg = 7700kcal */}
            {Math.round(restKcal * 30 / 7700)}kg
          </span>{' '}
          감량하실거에요!{svgEmoji('😍')}
        </p>
      ) : (
        //  사용자가 2/3 미만으로 섭취한 경우
        <p>
          무리한 절식은 건강을 해칩니다.
          <br /> 더 잘 챙겨드세요{svgEmoji('😭')}{' '}
        </p>
      )}
    </Segment>
  ) : (
    // 식사 기록이 없는 경우
    <Segment style={comment}>
      <p>
        아직 오늘의 식사를 <br /> 기록하지 않으셨어요!
      </p>
    </Segment>
  )
}

export default Comment
