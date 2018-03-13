import React from 'react'
import LiveIdyllEditor from '../components/editor'
import exampleMarkup from '../components/editor/initial'
import { hashCode } from '../components/editor/utils'
import TopNav from '../components/top-nav';
import Fonts from '../components/fonts';
import Head from 'next/head'
import 'isomorphic-fetch';

import request from 'superagent';
import {Router} from '../routes';
import { logPageView, initGA } from '../components/analytics';

const API_URL = 'https://idyll-docs-wwijepjavd.now.sh';

const grey = x => `rgb(${x}, ${x}, ${x})`

class EditorPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showSaved: false,
      edited: false
    }
  }

  static async getInitialProps({ req, query }) {
    if(query && query.uuid) {
      try {
        const res = await fetch(`${API_URL}/api/editor/${query.uuid}`)
        const json = await res.json()
        return { initialMarkup: json.markup }
      } catch(e) {
        console.log(e);
      }
    }

    return { initialMarkup: exampleMarkup }
  }

  componentDidMount() {
    Fonts();
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  handleChange = (markup) => {
    this.currentMarkup = markup;
    if (hashCode(markup) !== hashCode(this.props.initialMarkup)) {
      this.setState({ edited: true });
    }
  }

  handleClick = () => {
    request
      .post(`${API_URL}/api/editor`)
      .send({ markup: this.currentMarkup || this.props.initialMarkup || '' }) // sends a JSON post body
      .end((err, res) => {
        Router.pushRoute('editor', {uuid: res.body.id});
        this.setState({ edited: false, showSaved: true });
        setTimeout(() => {
          this.setState({ showSaved: false })
        }, 2000);
      });
  }

  handleFullscreen = () => {
    request
      .post(`${API_URL}/api/editor`)
      .send({ markup: this.currentMarkup || this.props.initialMarkup || '' }) // sends a JSON post body
      .end((err, res) => {
        Router.pushRoute('fullscreen', {uuid: res.body.id});
      });
  }

  render() {
    if (!this.currentMarkup) {
      this.currentMarkup = this.props.initialMarkup;
    }
    return (
      <div className='editor-page'>
        <Head>
          <title>{ 'Idyll Editor' }</title>
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
          {
            // this.state.initialMarkup ? (
              <LiveIdyllEditor
                markup={ this.props.initialMarkup }
                onChange={ this.handleChange }
              />
            // ) : null
          }
          <button onClick={this.handleFullscreen} style={{position:'fixed', bottom:20, right:20}}>
            Fullscreen
          </button>
          {
            this.state.edited ? (
              <button onClick={this.handleClick} style={{position:'fixed', bottom:20, right:120}}>
                Save
              </button>
            ) : null
          }
          {
            this.state.showSaved ? (
              <div style={{bottom:20, right:120, width: 420, position: 'fixed', background: 'white', padding: 10, border: 'solid 0.5px #333' }}>
                Article saved: {this.props.url.query.uuid}
              </div>
            ) : null
          }
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

          button {
            padding: 4px 2px;
            width: 85px;
            color: black;
            background: white;
            border: solid 3px black;
            cursor: pointer;
            font: Helvetica, Arial, sans-sarif;
            font-size: 14px;
            transition: background 1s, color 1s;
          }

          button:hover {
            background: #333;
            color: #efefef;
          }


        `}</style>
      </div>
    )
  }
}


export default EditorPage
