import React, { Component } from 'react'

// draft.js
import {
  EditorState,
  RichUtils,
  Modifier,
} from 'draft-js'

// draft-js-plugin
import { Editor } from 'draft-js-plugins-editor'

// 에디터 스타일링
import {
  editorStyle,
  button,
  styles,
  colorStyleMap,
} from './StyledTextEditor'

// 아이콘
import Underlined from 'react-icons/lib/md/format-underlined'
import Bold from 'react-icons/lib/md/format-bold'
import Italic from 'react-icons/lib/md/format-italic'
import StrikeThrough from 'react-icons/lib/md/format-strikethrough'

// 에디터 플러그인
import createHighlightPlugin from './HighlightPlugin'

class TextEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // editor state 초기화
      EditorState: EditorState.createEmpty(),
    }
  }

  // 에디터에 입력되는 내용이 state로 설정됨
  onChange = EditorState => {
    this.setState({
      EditorState,
    })
  }

  // 커맨드 핸들러
  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.EditorState, // 에디터에 입력된 내용
      command, // backspace, bold, italic 등...
    )
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  // 언더라인 버튼 클릭 이벤트
  _onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.EditorState, // 선택한 부분
        'UNDERLINE', // 적용할 스타일: 언더라인
      ),
    )
  }

  // 볼드체 버튼 클릭 이벤트
  _onBoldClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.EditorState,
        'BOLD',
      ),
    )
  }

  // 이탤릭체 버튼 클릭 이벤트
  _onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.EditorState,
        'ITALIC',
      ),
    )
  }

  // 취소선 버튼 클릭 이벤트
  _onStrikeThroughClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.EditorState,
        'STRIKETHROUGH',
      ),
    )
  }

  render() {
    const { EditorState } = this.state
    const highlightPlugin = createHighlightPlugin()
    return (
      <div style={styles.root}>
        <button
          style={button}
          onClick={this._onBoldClick}
        >
          {/* 아이콘 */}
          <Bold />
        </button>

        <button
          style={button}
          onClick={this._onItalicClick}
        >
          {/* 아이콘 */}
          <Italic />
        </button>

        <button
          style={button}
          onClick={this._onUnderlineClick}
        >
          {/* 아이콘 */}
          <Underlined />
        </button>

        <button
          style={button}
          onClick={this._onStrikeThroughClick}
        >
          {/* 아이콘 */}
          <StrikeThrough />
        </button>

        <div
          style={styles.editor}
          onClick={this.focus}
        >
          <Editor
            EditorState={EditorState}
            handleKeyCommand={
              this.handleKeyCommand
            }
            onChange={this.onChange}
            plugin={[highlightPlugin]}
          />
        </div>
      </div>
    )
  }
}

export default TextEditor
