import React from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';

class EditorComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getEditor = this.getEditor.bind(this);
    this.state = {
      editorState: EditorState.createWithContent(ContentState.createFromText(props.initialValue))
    }
  }

  getEditor(editorState) {
    return <Editor editorState={editorState} onChange={this.handleChange} />;
  }

  componentDidMount() {
    this.setState({editor: this.getEditor(this.state.editorState)});
  }

  handleChange(editorState) {
    this.setState({ editor: this.getEditor(editorState) });
    this.props.onChange(editorState.getCurrentContent().getPlainText());
  }

  parseVal(val) {
    return val;
  }

  render() {
    const { editor } = this.state;
    return (
      <div className={"editor"} >
        {editor}
      </div>
    );
  }
}

export default EditorComponent;
