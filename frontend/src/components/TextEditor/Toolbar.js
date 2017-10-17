import React, { Component } from 'react'
import {
  RichUtils,
  Modifier,
  EditorState,
} from 'draft-js'
import InlineTypesControls from './InlineTypesControls'
import BlockTypesControl from './BlockTypesControl'
import ColorControls from './ColorControls'
import { colorStyleMap } from './StyledTextEditor'

class Toolbar extends Component {
  constructor(props) {
    super(props)

    this.onInlineType = this._onInlineType.bind(
      this,
    )
    this.onBlockType = this._onBlockType.bind(
      this,
    )
    this.changeColor = this._changeColor.bind(
      this,
    )
  }
  // 인라인타입 버튼: bold, italic, underline, strikethrough
  _onInlineType = inlineType => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineType,
      ),
    )
  }

  // 블록타입 버튼: ol, ul, blockquote, header
  _onBlockType = blockType => {
    this.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType,
      ),
    )
  }

  // 색상 변경
  _changeColor = pickedColor => {
    const { editorState } = this.props
    const selection = editorState.getSelection()

    const nextContentState = Object.keys(
      colorStyleMap,
    ).reduce((contentState, color) => {
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
    const currentStyle = editorState.getCurrentInlineStyle()

    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce(
        (state, color) => {
          return RichUtils.toggleInlineStyle(
            state,
            color,
          )
        },
        nextEditorState,
      )
    }

    if (!currentStyle.has(pickedColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        pickedColor,
      )
    }
    this.props.onChange(nextEditorState)
  }

  render() {
    return (
      <div>
        <InlineTypesControls
          onClick={this.onInlineType}
        />
        <BlockTypesControl
          onClick={this.onBlockType}
        />
        <ColorControls
          onClick={this.changeColor}
        />
      </div>
    )
  }
}

export default Toolbar
