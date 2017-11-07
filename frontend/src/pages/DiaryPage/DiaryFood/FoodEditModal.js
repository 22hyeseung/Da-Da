import React from 'react'
import { connect } from 'react-redux'
import {
  Modal,
  Input,
  Button,
} from 'semantic-ui-react'
import { submitBtn } from '../StyledDiary'
import { updateFoodOfDB } from '../../../actions/diaryFood'
import { updateFoodSummary } from '../../../actions/diarySummary'

class FoodEditModal extends React.Component {
  constructor(props) {
    super(props)
    this.createPayloadAndUpdateToDB = this.createPayloadAndUpdateToDB.bind(
      this,
    )
  }

  createPayloadAndUpdateToDB = () => {
    const { updateAmountVal, serve } = this.state
    const { updateFoodOfDB, id } = this.props
    if (!updateAmountVal || updateAmountVal < 1) {
      return this.setState({
        disabled: true,
      })
    }
    const requestBody = {
      amount: updateAmountVal,
      serve: serve,
    }
    updateFoodOfDB(requestBody, id).then(
      data => {
        this.props.close()
        this.props.updateFoodSummary(
          data,
          this.props.amount,
        )
      },
      error => {
        console.warn(error)
      },
    )
  }

  handleUpdate = e => {
    this.setState({
      updateAmountVal: e.target.value,
    })
    // 양 입력 안했을 경우 버튼 비활성화
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  // keydown 이벤트
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.createPayloadAndUpdateToDB()
    }
  }

  render() {
    const {
      open,
      dimmer,
      close,
      name,
      id,
      amount,
    } = this.props

    return (
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={close}
        size="mini"
      >
        <Modal.Content
          style={{
            padding: '21px 14px 0px 14px',
          }}
        >
          <Modal.Header
            style={{
              textAlign: 'center',
              fontWeight: '100',
              fontSize: '21px',
              borderBottom: '1px solid #e0e5ee',
              padding: '0px 0px 14px',
            }}
          >
            {name}
          </Modal.Header>
          <Modal.Description
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: '#54698d',
                fontSize: '12px',
                marginTop: '21px',
                marginBottom: '12px',
              }}
            >
              기존 입력했던 양은
              {amount}g입니다.
            </span>
            <Input
              type="number"
              style={{
                margin: '0px 0px 28px',
              }}
              placeholder="수정할 값을 적으세요"
              onChange={e => this.handleUpdate(e)}
              onKeyDown={this.handleKeyPress}
            />
          </Modal.Description>
        </Modal.Content>
        <div
          style={{
            display: 'flex',
            padding: '0px 14px 14px',
          }}
        >
          <Button
            fluid
            content="취소"
            onClick={close}
            basic
          />
          <Button
            fluid
            style={{
              ...submitBtn,
              padding: '10px',
            }}
            onClick={
              this.createPayloadAndUpdateToDB
            }
          >
            수정하기
          </Button>
        </div>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFoodOfDB: (requestBody, id) =>
      dispatch(updateFoodOfDB(requestBody, id)),
    updateFoodSummary: (
      modifiedData,
      beforeAmount,
    ) =>
      dispatch(
        updateFoodSummary(
          modifiedData,
          beforeAmount,
        ),
      ),
  }
}

export default connect(null, mapDispatchToProps)(
  FoodEditModal,
)
