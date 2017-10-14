import React, { Component } from 'react'
import { convertFromRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {
  editorStyle,
  toolbarStyle,
} from './StyledTextEditor'

const content = {
  entityMap: {},
  blocks: [
    {
      key: '637gr',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
}

class TextEditor extends Component {
  constructor(props) {
    super(props)
    const contentState = convertFromRaw(content)
    this.state = {
      contentState,
    }
  }

  onContentStateChange: Function = contentState => {
    this.setState({
      contentState,
    })
  }

  render() {
    const { contentState } = this.state
    return (
      <div>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorStyle={editorStyle}
          toolbarStyle={toolbarStyle}
          localization={{
            locale: 'ko',
          }}
          mention={{
            separator: ' ',
          }}
          hashtag={{}}
          onContentStateChange={
            this.onContentStateChange
          }
        />

        {/* 타이핑 결과 JSON 형태로 볼 수 있음 */}
        {/* <textarea
          disabled
          value={JSON.stringify(
            contentState,
            null,
            4,
          )}
        /> */}
      </div>
    )
  }
}

export default TextEditor
