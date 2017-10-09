import React, { Component } from 'react'
import { convertFromRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

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
      <div
        style={{
          border: '1px solid #d8dde6',
          borderRadius: '4px',
          padding: '6px',
        }}
      >
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
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
