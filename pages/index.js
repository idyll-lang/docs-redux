import Link from 'next/link'

import IdyllDocument from 'idyll-document';
import * as IdyllComponents from 'idyll-components';
import compile from 'idyll-compiler';
// import markdown from 'markdown-in-js'


// const Content = () => markdown`
// # GitHub
// `

export default class LandingPage extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      exampleValue: `
# Hello World

[var name:"x" value:5 /]

The value of x is [Display value:x format:"d" /].

[Range value:x min:0 max:10 /]
      `.trim()
    }
    this.handleExampleValueChange = this.handleExampleValueChange.bind(this);
  }


  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  handleExampleValueChange(event) {
    console.log(event)
    console.log(event.target.value);
    this.setState({ exampleValue: event.target.value });
  }

  render() {
    const { url } = this.props;
    const { exampleValue } = this.state;
    let ast, error;
    try {
      ast = compile(exampleValue);
    } catch(e) {
      error = e;
    }
    return (
      <div>
        <section>
          <div className="panel alt">
            <div className="logo-container">
              <img src="/static/images/quill.svg" alt="idyll-lang" className="nav-logo" />
              idyll
            </div>
            <div className="intro">
              A markup language for interactive documents.
            </div>
            <div className="example">
              {/* Idyll turns markup into interactive HTML and JavaScript. */}

              <div className="label">Input</div>
              <div className="textarea-container">
                <textarea rows={9} defaultValue={exampleValue} onChange={this.handleExampleValueChange} />
                <div className="edit-label">

                </div>
              </div>

              <div className="label">Output</div>
              <div className="output">
              {
                ast ?
                <IdyllDocument ast={ast} components={IdyllComponents} key={ exampleValue }  />
                : null
              }
              {
                error ? error.toString() : null
              }
              </div>

            </div>
            {/* <div className="learn-more">
              Learn More
            </div> */}
          </div>
          <div className="panel">
            {/* <div className="alert">
              Support the project by <a href="">buying a sticker</a>.
            </div> */}
            <a href="/editor" className="editor-link">
              Try idyll in your browser.
            </a>
            <div className="links">
              <a href="/docs/getting-started">
                Installation
              </a>
              |
              <a href="/docs">
                Documentation
              </a>
              |
              <a href="https://github.com/idyll-lang/idyll">
                GitHub
              </a>
              |
              <a href="https://gitter.im/idyll-lang/">
                Chat
              </a>
              {/* <a className="github-button" href="https://github.com/idyll-lang/idyll" data-icon="octicon-star" data-show-count="true" aria-label="Star idyll-lang/idyll on GitHub">Star</a> */}
            </div>
            <div>
              <p>
                Idyll extends the ubiquitous Markdown format to enable the creation of dynamic, interactive narratives for the web. The language and toolchain aim to empower journalists, researchers, and subject-matter experts to create compelling content using familiar tools and processes.
            </p>

            </div>
            <div className="gallery">
              <div className="gallery-title"><a href="./gallery">Example Gallery</a>
              <img src="/static/images/arrow.svg" alt="scroll for more"/></div>
              <div className="gallery-item" style={{ backgroundImage: 'url(https://idyll-lang.org/images/trig.png)' }}>
                <div className="title">Trig</div>
              </div>
              <div className="gallery-item" style={{ backgroundImage: 'url(https://mathisonian.github.io/dashcam/images/share.png)' }}>
              <div className="title"></div>
              </div>
              <div className="gallery-item" style={{ backgroundImage: 'url(https://idyll-lang.org/images/complaints-2.gif)' }}>
              <div className="title"></div>
              </div>
              <div className="gallery-item" style={{ backgroundImage: 'url(https://idyll-lang.org/images/lorenz.png)' }}>
              <div className="title"></div>
              </div>
              <div className="gallery-item" style={{ backgroundImage: 'url(https://idyll-lang.org/images/regl.png)' }}>
              <div className="title"></div>
              </div>
              <div className="gallery-item" style={{ backgroundImage: 'url(https://idyll-lang.org/images/complaints-2.gif)' }}>
              <div className="title"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="panel dark">
            <div className="content-container">
            </div>
          </div>
          <div className="panel alt">
          </div>
        </section> */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i');

          html, body {
            margin: 0;
            padding: 0;
          }

          * {
            box-sizing: border-box;
          }

          input {
            display: block;
          }
        `}</style>
        <style jsx>{`

          p {
            // display: none;
            max-width: 476px;
            margin: 2em auto 0 auto;
            // text-align: justify;
            line-height: 1.4em;
            font-family: 'Source Sans Pro';
          }
          .alert {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: #4C4B63;
            color: white;
            padding: 5px 10px;
            font-size: 0.8em;
            font-family: 'Source Sans Pro';
            text-align: right;
          }
          .alert a, .alert a:visited {
            color: white;
          }
          textarea {
            display: block;
            width: 100%;
            font-family: 'Fira Mono', monospace;
            background: #4C4B63;
            border: none;
            padding: 10px;
            border:1px solid #4C4B63;
            color: white;
          }
          textarea:focus {
            outline: none !important;
            border:1px solid #222;
          }

          .example {

          }

          section {
            display: flex;
          }
          .panel {
            height: 100vh;
            width: 100%;
            position: relative;
            overflow-y: auto;
          }
          .panel.alt {
            background: #E7E3D0;
          }
          .panel.dark {
            background: #4C4B63;
          }

          .output {
            background: white;
            width: 100%;
            padding: 5px 10px;
            // height: calc(100vh - 550px);
            overflow-y: auto;
            min-height: 140px;
            margin-bottom: 1em;
          }

          input {
            display: block;
          }

          .learn-more {
            position: absolute;
            bottom: 10px;
            width: 100%;
            text-align: center;
            font-family: 'Source Sans Pro';
          }

          .logo-container {
            width: 100%;
            margin: 0 auto;
            font-family: 'Fira Mono';
            color: black;
            font-size: 48px;
            text-decoration: none;
            text-align: center;
            margin-top: 1em;
          }

          .editor-link {
            display: block;
            width: 100%;
            margin: 0 auto;
            font-family: 'Fira Mono';
            color: black;
            font-size: 22px;
            text-decoration: underline;

            text-align: center;
            margin-top: 160px;
            margin-bottom: 1em;
          }

          .other-links {
            font-style: italic;
          }
          .links,.other-links {
            width: 100%;
            text-align: center;
            font-family: 'Source Sans Pro';
          }
          .links a {
            color: black;
            text-decoration: none;
            padding: 0 15px;
            font-size: 0.9em;
          }

          .logo-container img {
            position: relative;
            top: 10px;
            right: 30px;
          }

          .gallery {
            // height: 25vh;
            // position: absolute;
            // bottom: 0;
            margin-top: 0.5em;
            // margin-top: calc(100vh - 160px - 150px - 100px - 150px);
            font-size: 22px;
            // background: #84828F;
            width: 100%;
            transition: height 1.5s;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
          }
          .gallery:hover {
            // height: calc(100vh - 250px);
          }

          .gallery-item {
            width: 33%;
            flex-grow: 1;
            height: 275px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
          }

          .gallery-item .title {
            opacity: 0;
            transition: opacity 1s;
            width: 100%;
            height: 100%;
            background: rgba(132, 130, 143, 0.7);
            display: block;
            text-decoration: none;
            color: white;
          }npm
          .gallery-item:hover .title {
            opacity: 1;
          }

          .gallery-title {
            // position: absolute;
            padding: 2em 0;
            // height: 100%;
            // background: rgba(132, 130, 143, 0.7);
            font-family: 'Fira Mono';
            // color: white;
            font-size: 0.9em;
            width: 100%;
            // pointer-events: none;
            opacity: 1;
            transition: opacity 1s;
            text-align: center;
          }

          .gallery-title img {
            display: block;
            width: 50px;
            margin: 0 auto;
            margin-top: 15px;
          }

          .gallery:hover .gallery-title {
            // opacity: 0;
          }

          .editor-link:hover, .links a:hover {
            color: #6122FB;
          }

          .example,
          .intro {
            max-width: 400px;
            margin: 0 auto;
            margin-top: 1em;
            font-family: 'Source Sans Pro';
            font-size: 28px;
            font-weight: 300;
            // letter-spacing: 0.3em;
            line-height: 1.1em;
            text-align: center;
          }

          .example {
            font-size: 18px;
            font-weight: normal;
            color: rgb(40, 40, 40);
            text-align: left;
          }

          .label {
            text-transform: uppercase;
            font-size: 0.8em;
            margin-top: 30px;
          }


          @media (max-width: 960px) {
            section {
              flex-direction: column;
            }
            .panel {
              height: auto;
              width: 100%;
              position: relative;
              overflow-y: auto;
              padding-bottom: 2em;
            }

            .editor-link {
              margin-top: 2em;
            }
            .gallery {
              margin-top: 1em;
            }
          }

        `}</style>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </div>
    )
  }
}


