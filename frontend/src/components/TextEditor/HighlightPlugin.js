import { RichUtils } from 'draft-js'

const defaultStyle = {
  background: 'purple',
  padding: '0 .3em',
  color: '#fff',
}

export default (style = {}) => {
  return {
    customStyleMap: {
      HIGHLIGHT: {
        ...defaultStyle, // 기본 스타일
        ...style, // 커스텀 스타일
      },
    },
    // 키보드 명령 바인딩 : command + h
    keyBindingFn: e => {
      if (e.metaKey && e.key === 'h') {
        return 'highlight'
      }
    },
    handleKeyCommand: (
      command,
      editorState,
      { setEditorState },
    ) => {
      if (command === 'highlight') {
        setEditorState(
          RichUtils.toggleInlineStyle(
            editorState,
            'HIGHLIGHT',
          ),
        )
        return true
      }
    },
  }
}
