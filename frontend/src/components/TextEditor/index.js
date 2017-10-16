import React, { Component } from 'react'
import ColorPicker from './ColorPicker'
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
} from 'draft-js'
import ColorControls from './ColorControls'
import {
  editorStyle,
  button,
  styles,
  colorStyleMap,
} from './StyledTextEditor'
import Underlined from 'react-icons/lib/md/format-underlined'
import Bold from 'react-icons/lib/md/format-bold'
import Italic from 'react-icons/lib/md/format-italic'
import StrikeThrough from 'react-icons/lib/md/format-strikethrough'

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

  _changeColor = () => {
    현재 작성된 전체 텍스트
    const { editorState } = this.state
    // selection = 선택된 범위의 텍스트
    const selection = editorState.getSelection()

    const nextContentState = Object.keys(
      colorStyleMap,
    ).reduce((contentState, color) => {
      // removeInlineStyle: 선택된 범위 전체의 특정 인라인 스타일을 제거
      return Modifier.removeInlineStyle(
        contentState,
        selection,
        color,
      )
    }, editorState.getCurrentContent())
    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style',
    )

    // const currentStyle = editorState.getCurrentInlineStyle()

    // if (selection.isCollapsed()) {
    //   nextEditorState = currentStyle.reduce(
    //     (state, color) => {
    //       return RichUtils.toggleInlineStyle(
    //         state,
    //         color,
    //       )
    //     },
    //     nextEditorState,
    //   )
    // }
    // if (!currentStyle.has(toggledColor)) {
    //   nextEditorState = RichUtils.toggleInlineStyle(
    //     nextEditorState,
    //     toggledColor,
    //   )
    // }
    this.onChange(nextEditorState)
  }

  // _onToggle = e => {
  //   e.preventDefault() // 이전에 적용하던 color 효과 취소
  //   this.props.onToggle(this.props.style)
  // }

  // 언더라인 버튼 클릭 이벤트
  _onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState, // 선택한 부분
        'UNDERLINE', // 적용할 스타일: 언더라인
      ),
    )
  }

  // 볼드체 버튼 클릭 이벤트
  _onBoldClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        'BOLD',
      ),
    )
  }

  // 이탤릭체 버튼 클릭 이벤트
  _onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        'ITALIC',
      ),
    )
  }

  // 취소선 버튼 클릭 이벤트
  _onStrikeThroughClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        'STRIKETHROUGH',
      ),
    )
  }

  render() {
    const { editorState } = this.state
    return (
      <div style={styles.root}>
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

        <button
          style={button}
          onClick={this._onStrikeThroughClick}
        >
          <StrikeThrough />
        </button>
        {/* <ColorControls
          editorState={editorState}
          onToggle={this.changeColor}
        /> */}

        <ColorPicker
          editorState={editorState}
          changeColor={this._changeColor}
        />
        <div
          style={styles.editor}
          onClick={this.focus}
        >
          <Editor
            customStyleMap={colorStyleMap}
            editorState={editorState}
            handleKeyCommand={
              this.handleKeyCommand
            }
            onChange={this.onChange}
            ref="editor"
          />
        </div>
      </div>
    )
  }
}

export default TextEditor
