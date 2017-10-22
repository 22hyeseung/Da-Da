import React from 'react'
// 스타일링
import {
  Segment,
  Header,
  List,
} from 'semantic-ui-react'
import * as Style from './StyledDiarySummary'

// 컴포넌트
import StaticPieChart from '../../../components/Charts/StaticPieChart'
import DiarySocialBtns from './DiarySocialBtns'
import SummaryListItem from './SummaryListItem'
import SectionHeader from './SectionHeader'

const DiarySummary = () => {
  return (
    <div>
      <Segment style={Style.segment}>
        {/* title 시작 */}
        <SectionHeader
          headerStyle={Style.header}
          subtitle="SUMMARY"
          title="요약"
        />
        {/* title 끝 */}

        {/* 리스트 시작 */}
        <List
          divided
          verticalAlign="bottom"
          style={{ marginLeft: '30%' }}
        >
          <List.Item style={Style.listItem}>
            <List.Content />
            <List.Content
              style={Style.listContent}
            >
              (kcal)
            </List.Content>
          </List.Item>

          <SummaryListItem
            label="일일 권장량"
            kcal="1200"
          />
          <SummaryListItem
            label="섭취 칼로리"
            kcal="300"
          />
          <SummaryListItem
            label="운동 칼로리"
            kcal="100"
          />
          <SummaryListItem
            label="남은 칼로리"
            kcal="1000"
          />
        </List>
        {/* 리스트 끝 */}

        {/* comment 시작 */}
        <SectionHeader subtitle="COMMENT" />

        <Segment style={Style.comment}>
          더 열심히 운동하셔야겠어요 !
        </Segment>
        {/* comment 끝 */}

        {/* 파이 차트 시작 */}

        <SectionHeader subtitle="NUTRITION\nGRAPH" />

        <StaticPieChart
          style={{ marginTop: '4px' }}
        />
        {/* 파이 차트 끝 */}
      </Segment>
      <DiarySocialBtns />
    </div>
  )
}

export default DiarySummary
