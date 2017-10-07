import React from 'react'
import {
  Segment,
  Header,
  List,
} from 'semantic-ui-react'
import pieGraph from '../../static/img/diary-graph.svg'
import DiarySocialBtns from './DiarySocialBtns'
import * as Style from './StyledDiarySummary'

const DiarySummary = () => {
  return (
    <div>
      <Segment style={Style.segment}>
        {/* title 시작 */}
        <Header style={Style.header}>
          <Header.Subheader
            style={Style.subheader}
          >
            SUMMARY
          </Header.Subheader>
          요약
        </Header>
        {/* title 끝 */}

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
          <List.Item
            style={{
              ...Style.listItem,
              ...Style.listItemElse,
            }}
          >
            <List.Content
              style={Style.listContentLabel}
            >
              일일 권장량
            </List.Content>
            <List.Content
              style={Style.listContentKcal}
            >
              1200
            </List.Content>
          </List.Item>

          <List.Item
            style={{
              ...Style.listItem,
              ...Style.listItemElse,
            }}
          >
            <List.Content
              style={Style.listContentLabel}
            >
              섭취 칼로리
            </List.Content>
            <List.Content
              style={Style.listContentKcal}
            >
              -
            </List.Content>
            <List.Content
              style={Style.listContentKcal}
            >
              300
            </List.Content>
          </List.Item>

          <List.Item
            style={{
              ...Style.listItem,
              ...Style.listItemElse,
            }}
          >
            <List.Content
              style={Style.listContentLabel}
            >
              운동 칼로리
            </List.Content>
            <List.Content
              style={Style.listContentKcal}
            >
              +
            </List.Content>
            <List.Content
              style={Style.listContentKcal}
            >
              100
            </List.Content>
          </List.Item>
          <List.Item
            style={{
              ...Style.listItem,
              ...Style.listItemElse,
            }}
          >
            <List.Content
              style={Style.listContentLabel}
            >
              남은 칼로리
            </List.Content>
            <List.Content
              style={Style.listContentKcal}
            >
              1000
            </List.Content>
          </List.Item>
        </List>
        {/* 리스트 끝 */}

        {/* comment 시작 */}
        <Header
          style={{
            marginBottom: '4px',
          }}
        >
          <Header.Subheader
            style={Style.subheader}
          >
            COMMENT
          </Header.Subheader>
        </Header>

        <Segment style={Style.comment}>
          더 열심히 운동하셔야겠어요 !
        </Segment>
        {/* comment 끝 */}

        <Header
          style={{
            marginBottom: '4px',
          }}
        >
          <Header.Subheader
            style={Style.subheader}
          >
            NUTRITION<br /> GRAPH
          </Header.Subheader>
        </Header>
        <img
          src={pieGraph}
          style={Style.graph}
          alt="영양분 그래프입니다"
        />
      </Segment>
      <DiarySocialBtns />
    </div>
  )
}

export default DiarySummary
