import React from 'react'
import LiveIdyllEditor from '../components/editor'
import exampleMarkup from '../components/editor/initial'

const grey = x => `rgb(${x}, ${x}, ${x})`



class EditorPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inMarkup: exampleMarkup,
      outMarkup: exampleMarkup,
    }
  }

  setInMarkup = inMarkup => this.setState({ inMarkup })
  setOutMarkup = outMarkup => this.setState({ outMarkup })

  savedContent = () => (window.localStorage.getItem('editorContent') || '')
  save = () => window.localStorage.setItem('editorContent', this.state.outMarkup)

  loadFromSaved = () => this.setInMarkup(this.savedContent())
  insertExample = () => this.setInMarkup(exampleMarkup)

  render() {
    return (
      <div className='editor-page'>
        <nav>
          <button onClick={ this.insertExample }>
            Load Example
          </button>
          <button onClick={ this.loadFromSaved }>
            Restore Saved Document
          </button>
          <button onClick={ this.save }>
            Save
          </button>
        </nav>
        <LiveIdyllEditor markup={ this.state.inMarkup } onChange={ this.setOutMarkup } />

        <style jsx>{`
          .editor-page {
            height: 100vh;
            display: flex;
            flex-direction: column;
          }

          nav {
            width: 100%;
            padding: 10px 20px;
            background: #EAE7D6;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 1;
          }

          nav button {
            background: ${grey(200)};
            padding: 10px;
            border-radius: 10px;
            min-width: 5rem;
            text-align: center;
            cursor: pointer;
            transition: background 0.5s;
            outline: none;
          }
          nav button:not(:last-child) {
            margin-right: 1rem;
          }
          nav button:hover {
            background: ${grey(215)};
          }
        `}</style>
      </div>
    )
  }
}


export default EditorPage
