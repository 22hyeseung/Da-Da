import React, { Component } from 'react'

// draft.js
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil,
  convertToRaw,
  convertFromRaw,
} from 'draft-js'

// 에디터 스타일링
import {
  Style,
  colorStyleMap,
} from './StyledTextEditor'
import './editor.css'

// 상단 툴바
import Toolbar from './Toolbar'

// Block Style 커스텀
const blockStyleFn = contentBlock => {
  const type = contentBlock.getType()

  switch (type) {
    case 'blockquote':
      return 'blockquote'

    case 'align-left':
      return 'align-left'

    case 'align-center':
      return 'align-center'

    case 'align-right':
      return 'align-right'

    default:
      return null
  }
}

class TextEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleKeyCommand = this.handleKeyCommand.bind(
      this,
    )

    // 에디터 영역 (내에서 아무데나 클릭시) focus
    this.focus = () => this.refs.editor.focus()

    // tab => 리스트 depth
    this.onTab = this._onTab.bind(this)

    // 로컬 스토리지에서 content를 가져옴.
    const content = window.localStorage.getItem(
      'content',
    )

    // content가 존재하면, state에 저장.
    // convertFromRaw: 자바스크립트 객체를 ContentState로 변환
    if (content) {
      this.state.editorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(content)),
      )
    } else {
      // content가 존재하지 않으면 state를 초기화.
      this.state.editorState = EditorState.createEmpty()
    }
  }

  saveContent = content => {
    // 에디터에 작성되는 내용을 로컬스토리지에 String으로 저장
    window.localStorage.setItem(
      'content',
      JSON.stringify(convertToRaw(content)),
    )
  }

  // 에디터에 입력되는 내용이 state로 설정됨
  onChange = editorState => {
    const contentState = editorState.getCurrentContent()
    this.saveContent(contentState)
    this.setState({
      editorState,
    })
  }

  // 키보드 명령 바인딩
  keyBindingFn = e => {
    // ctrl(win) or command(osx) + b = 볼드체
    if (
      KeyBindingUtil.hasCommandModifier(e) &&
      e.keyCode === 66 /* 'b' 키 */
    ) {
      return 'cbBold'
    }

    // ctrl(win) or command(osx) + i = 이탤릭체
    if (
      KeyBindingUtil.hasCommandModifier(e) &&
      e.keyCode === 73 /* 'i' 키 */
    ) {
      return 'ciItalic'
    }

    // ctrl(win) or command(osx) + - = 취소선
    if (
      KeyBindingUtil.hasCommandModifier(e) &&
      e.keyCode === 189 /* '-' 키 */
    ) {
      return 'c-StrikeThrough'
    }

    // ctrl(win) or command(osx) + u = 밑줄 = default임!
    return getDefaultKeyBinding(e)
  }

  // 키 커맨드 핸들러
  handleKeyCommand = command => {
    let newState = RichUtils.handleKeyCommand(
      this.state.editorState, // 에디터에 입력된 내용
      command, // backspace, bold, italic 등...
    )

    if (command === 'cbBold') {
      newState = RichUtils.toggleInlineStyle(
        this.state.editorState,
        'BOLD',
      )
    }

    if (command === 'ciItalic') {
      newState = RichUtils.toggleInlineStyle(
        this.state.editorState,
        'ITALIC',
      )
    }

    if (command === 'c-StrikeThrough') {
      newState = RichUtils.toggleInlineStyle(
        this.state.editorState,
        'STRIKETHROUGH',
      )
    }

    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  _onTab(e) {
    const maxDepth = 4
    this.onChange(
      RichUtils.onTab(
        e,
        this.state.editorState,
        maxDepth,
      ),
    )
  }

  render() {
    const { editorState } = this.state

    return (
      <div style={Style.root}>
        <Toolbar
          editorState={editorState}
          onChange={this.onChange}
        />

        <div
          className="editorContainer"
          style={Style.editor}
          onClick={this.focus}
        >
          <Editor
            customStyleMap={colorStyleMap}
            blockStyleFn={blockStyleFn}
            editorState={editorState}
            onChange={this.onChange}
            handleKeyCommand={
              this.handleKeyCommand
            }
            onTab={this.onTab}
            keyBindingFn={this.keyBindingFn}
            ref="editor"
          />
        </div>
      </div>
    )
  }
}

export default TextEditor
