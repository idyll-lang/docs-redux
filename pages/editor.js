import React from 'react'
import LiveIdyllEditor from '../components/editor'
import exampleMarkup from '../components/editor/initial'
import { hashCode } from '../components/editor/utils'
import TopNav from '../components/top-nav';
import Fonts from '../components/fonts';

import request from 'superagent';
import {Router} from '../routes';

import { logPageView, initGA } from '../components/analytics';
import Head from 'next/head'


const grey = x => `rgb(${x}, ${x}, ${x})`



class EditorPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inMarkup: exampleMarkup,
    }
    this.outMarkup = exampleMarkup
  }

  componentDidMount() {
    Fonts();
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  setOutMarkup = outMarkup => (this.outMarkup = outMarkup)

  setInMarkup(inMarkup) {
    this.setState({
      inMarkup,
      inMarkupHash: hashCode(inMarkup),
    })
  }

  

  static async getInitialProps(props) {
    if (!props.query.uuid) {
      return {intiialMarkup: exampleMarkup};
    }
    
    return new Promise(resolve => {
    console.log(props.query.uuid);
    request
    .get('localhost:3000/api/editor/' + props.query.uuid)
    .end((err, res) => {
      console.log(err);
      console.log(res.body)
      resolve({intialMarkup: res.body.markup})
    });
  })
}
  

  handleClick() {
  request
    .post('/api/editor')
    .send({ markup: exampleMarkup }) // sends a JSON post body
    .end((err, res) => {
      console.log(res.body);
      Router.pushRoute('editor', {uuid: res.body.id});
    });
  }

  savedContent = () => (window.localStorage.getItem('editorContent') || '')
  save = () => window.localStorage.setItem('editorContent', this.outMarkup)

  loadFromSaved = () => this.setInMarkup(this.savedContent())
  insertExample = () => this.setInMarkup(exampleMarkup)

  render() {
    console.log(this.props.intialMarkup)
    return (
      <div className='editor-page'>
        <Head>
          <title>{ 'Idyll Editory' }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
          <meta property='og:image' content='https://idyll-lang.org/static/images/twitter-share.png' />
          <meta property='og:description' content="Try Idyll in your browser." />
          <meta property='og:title' content={'Idyll Editor'} />
          <meta property='og:url' content='https://idyll-lang.org/editor' />
          <meta property='og:type' content='website' />
        </Head>
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
          <button onClick={this.handleClick} style={{position:'fixed', bottom:20, right:20}}>
            Save
          </button>
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
