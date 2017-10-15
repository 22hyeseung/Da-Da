import React, { Component } from 'react'
import {
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js'
import {
  editorStyle,
  button,
} from './StyledTextEditor'
import Underlined from 'react-icons/lib/md/format-underlined'
import Bold from 'react-icons/lib/md/format-bold'
import Italic from 'react-icons/lib/md/format-italic'

class TextEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  // 에디터에 입력되는 내용이 state로 설정됨
  onChange = editorState => {
    this.setState({
      editorState,
    })
  }

  // 키보드 명령 처리
  handleKeyCommand = command => {
    // 키보드 동시 입력 지원 (ex. command + B)
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState, // 에디터에 입력된 내용
      command, // backspace, bold, italic 등...
    )

    if (newState) {
      this.onChange(newState)
      return 'handled' // 키 명령이 처리됨
    }
    return 'not-handled' // 키 명령이 처리되지 않음
  }

  // 밑 줄 긋기 클릭 이벤트
  _onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState, // 선택한 부분
        'UNDERLINE', // 적용할 스타일: 밑줄
      ),
    )
  }

  _onBoldClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        'BOLD',
      ),
    )
  }

  _onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        'ITALIC',
      ),
    )
  }

  render() {
    return (
      <div style={editorStyle}>
        <button
          style={button}
          onClick={this._onBoldClick}
        >
          <Bold />
        </button>
        <button
          style={button}
          onClick={this._onItalicClick}
        >
          <Italic />
        </button>
        <button
          style={button}
          onClick={this._onUnderlineClick}
        >
          <Underlined />
        </button>

        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          placeholder="오늘 하루를 기록해보세요."
        />
      </div>
    )
  }
}

export default TextEditor
