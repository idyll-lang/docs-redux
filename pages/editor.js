import React from 'react'
import LiveIdyllEditor from '../components/editor'
import exampleMarkup from '../components/editor/initial'
import { hashCode } from '../components/editor/utils'
import TopNav from '../components/top-nav';


const grey = x => `rgb(${x}, ${x}, ${x})`



class EditorPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inMarkup: exampleMarkup,
    }
    this.outMarkup = exampleMarkup
  }

  setOutMarkup = outMarkup => (this.outMarkup = outMarkup)

  setInMarkup(inMarkup) {
    this.setState({
      inMarkup,
      inMarkupHash: hashCode(inMarkup),
    })
  }

  savedContent = () => (window.localStorage.getItem('editorContent') || '')
  save = () => window.localStorage.setItem('editorContent', this.outMarkup)

  loadFromSaved = () => this.setInMarkup(this.savedContent())
  insertExample = () => this.setInMarkup(exampleMarkup)

  render() {
    return (
      <div className='editor-page'>
        <TopNav selected='editor' />
        {/* <nav>
          <button onClick={ this.insertExample }>
            Load Example
          </button>
          <button onClick={ this.loadFromSaved }>
            Restore Saved Document
          </button>
          <button onClick={ this.save }>
            Save
          </button>
        </nav> */}
        <div className="editor-container">
          <LiveIdyllEditor
            markup={ this.state.inMarkup }
            onChange={ this.setOutMarkup }
            key={ this.state.inMarkupHash }
          />
        </div>

        <style jsx>{`
          .editor-page {
          }

          .editor-container {
            margin-top: 70px;
            height: calc(100vh - 70px);
            display: flex;
            flex-direction: column;
          }


        `}</style>
      </div>
    )
  }
}


export default EditorPage
