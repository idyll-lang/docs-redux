import React from 'react'
import { Editor, EditorState, ContentState } from 'draft-js'

class IdyllEditArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: this.createEditorState(props.initialContent),
      shouldRenderEditor: false,
    }
  }

  componentDidMount() {
    this.setState({ shouldRenderEditor: true })
  }

  componentWillReceiveProps(nextProps) {
    const { initialContent } = nextProps
    if (initialContent) {
      this.setState({ editorState: this.createEditorState(initialContent) })
    }
  }

  createEditorState(text) {
    return EditorState.createWithContent(ContentState.createFromText(text))
  }

  onEditorChange = (editorState) => {
    this.setState({ editorState })
    const { onChange } = this.props
    if (onChange) {
      onChange(editorState.getCurrentContent().getPlainText())
    }
  }

  render() {
    const { editorState, shouldRenderEditor } = this.state
    return (
      <div className='editor'>
        { shouldRenderEditor &&
          <Editor
            editorState={ editorState }
            onChange={ this.onEditorChange }
            editorKey='idyll-editor'
          />
        }

        <style jsx>{`
          .editor {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            font-size: 17px;
            line-height: 26px;
            border-left: solid 10px #ddd;
            border-right: solid 2px #ddd;
          }
        `}</style>
      </div>
    )
  }
}


export default IdyllEditArea
