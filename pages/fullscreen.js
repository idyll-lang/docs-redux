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
    this.state = {}
  }

  static async getInitialProps({ req, query }) {
    // if (req) {
    //   console.log('on server');
    //   console.log(query);
    //   if (query.uuid) {
    //     return Promise((resolve) => {
    //   //     // request
    //   //     //   .get(`${API_URL}/api/editor/${query.uuid}`)
    //   //     //   .end((err, res) => {
    //   //     //     if (err) {
    //   //     //       console.warn('Could not get markup');
    //   //     //       resolve({ initialMarkup: exampleMarkup })
    //   //     //     }
    //   //     //     console.log(res);
    //   //     //     resolve({ initialMarkup: res.body.markup })
    //   //     //   });
    //       resolve();
    //     })
    //   }
    // } else
    if(query && query.uuid) {
      console.log('on the client')
      // console.log(jsonPageRes)
      try {
        const res = await fetch(`${API_URL}/api/editor/${query.uuid}`)
        console.log(res);
        const json = await res.json()
        console.log(json);
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
  render() {
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
        <div className="editor-container">
          <LiveIdyllEditor
            fullscreen={true}
            markup={ this.props.initialMarkup }
            onChange={ this.handleChange }
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
