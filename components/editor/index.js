import React from 'react'
import IdyllEditArea from './edit-area'
import IdyllRenderer from './renderer'
import compile from 'idyll-compiler'
import GlobalStyles from '../global-styles'
import { hashCode } from './utils'
import styles from './styles'
import Head from 'next/head'

class LiveIdyllEditor extends React.PureComponent {
  constructor(props) {
    super(props)
    const { markup } = props
    this.state = {
      ...this.stateObjectForMarkup(markup),
      initialMarkup: markup,
    }
  }

  stateObjectForMarkup = (idyllMarkup, hash = null) => ({
    idyllHash: hash || hashCode(idyllMarkup),
    error: null,
    ast: compile(idyllMarkup),
  })

  setContent(value) {
    try {
      const hash = hashCode(value)
      if (hash !== this.state.idyllHash) {
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
        <Head>
          <title>Idyll | Editor</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei" crossOrigin="anonymous" />
        </Head>
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


        <GlobalStyles />
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
