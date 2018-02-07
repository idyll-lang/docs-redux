import React from 'react'
import IdyllEditArea from './edit-area'
import IdyllRenderer from './renderer'
import compile from 'idyll-compiler'
import { hashCode } from './utils'
import styles from './styles'
// import exampleMarkup from './initial'



class LiveIdyllEditor extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = this.stateObjectForInitialMarkup('')
  }

  stateObjectForMarkup = (idyllMarkup, hash = null) => ({
    idyllHash: hash || hashCode(idyllMarkup.trim()),
    error: null,
    ast: compile(idyllMarkup),
  })

  stateObjectForInitialMarkup = (markup) => ({
    ...this.stateObjectForMarkup(markup),
    initialMarkup: markup,
  })

  componentDidMount() {
    this.setContent(this.props.markup, true)
  }

  componentWillReceiveProps(nextProps) {
    const { markup } = nextProps
    if (markup) {
      this.setContent(markup, true)
    }
  }

  setContent(value, isReset = false) {
    try {
      if (isReset) {
        this.setState(this.stateObjectForInitialMarkup(value))
      } else {
        const hash = hashCode(value.trim())
        if (hash === this.state.idyllHash) {
          return
        }
        this.setState(this.stateObjectForMarkup(value, hash))
      }
    } catch (e) {
      this.setState({ error: e.message })
    }
  }

  handleChange = (newContent) => {
    this.setContent(newContent)
    const { onChange } = this.props
    if (onChange) {
      onChange(newContent)
    }
  }

  render() {
    const { initialMarkup, ast, error, idyllHash } = this.state

    return (
      <div className='container'>
        <IdyllEditArea initialContent={ initialMarkup } onChange={ this.handleChange } />
        <IdyllRenderer ast={ ast } idyllHash={ idyllHash } />
        { error && this.renderError() }
        <style jsx global>{styles}</style>
        <style jsx>{`
          .container {
            flex: 1;
            display: flex;
            flex-direction: row;
            overflow: auto;
          }
        `}</style>
      </div>
    )
  }

  renderError = () => (
    <div className='error-display'>
      <pre>
        {this.state.error}
      </pre>
      <style jsx>{`
        .error-display {
          background: rgba(0, 0, 0, 0.8);
          color: white;
          font-family: Courier New, Courier, monospace;
          font-size: 12px;
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 5px 10px;
        }
      `}</style>
    </div>
  )
}

export default LiveIdyllEditor
