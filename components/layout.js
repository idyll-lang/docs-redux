import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import GlobalStyles from './global-styles'
import { Contents, hrefFromName } from '../contents'


const NavWidth = 20; // %
const MainWidth = 100 - NavWidth; // %
const TogglerWidth = 50; // px
const TogglerHeight = 25; // px
const NavTransitionDuration = 0.25; // s



class IdyllDocsLayout extends React.Component {
  constructor(props) {
    super(props)
    const {url} = props
    this.presentPath = url && url.asPath
    this.state = {
      navOpen: false,
    }
  }

  toggleNavOpen() {
    this.setState({ navOpen: !this.state.navOpen })
  }

  render() {
    const { title = 'Idyll', children } = this.props
    return (
      <div id="master" className={ this.state.navOpen ? 'nav-open' : 'nav-closed' }>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
        </Head>

        <header>
          <a href="/" className="logo-container">
            <img src="/static/images/quill.svg" alt="idyll-lang" className="nav-logo" />
            idyll
          </a>

          <div className="link-group">
            <div className="link">Docs</div>
            <div className="link">Gallery</div>
            <div className="link">Editor</div>
          </div>
        </header>

        <div className="content-container">

          <nav>
            <button
              className="nav-toggler"
              onClick={ () => this.toggleNavOpen() }
            >toggle</button>
            {
              Contents.map(group => (
                <section key={ group.title }>
                  <h1>{ group.title }</h1>
                  <ul>{
                    group.pages.map(page => {
                      const hrefPath = '/docs/' + hrefFromName(page)
                      return (
                        <li className={ hrefPath === this.presentPath ? 'active' : null } key={ page }>
                          <Link href={ hrefPath }>
                            <a>{ page }</a>
                          </Link>
                        </li>
                      )
                    })
                  }</ul>
                </section>
              ))
            }
          </nav>

          <main>
            <div className="main-container">
              { children }
            </div>
          </main>
        </div>

        <style jsx>{`
          .content-container {
            display: flex;
            justify-content: flex-end;
            padding-top: 70px;
          }

          nav, main {
            padding: 1em;
            box-sizing: border-box;
          }

          nav {
            // background: #EAE7D6;
            transition: left ${NavTransitionDuration}s;
            position: fixed;
            left: 0;
            top: 70px;
            bottom: 0;
            width: ${NavWidth}%;
            // box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
          }

          header {
            width: 100%;
            height: 70px;
            position: fixed;
            top: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background: #EAE7D6;
            // border-bottom: solid 1px black;
          }

          main {
            width: ${MainWidth}%;
            transition: width ${NavTransitionDuration}s;
          }
          .main-container {
            max-width: 800px;
            // margin: 0 auto;
          }

          .nav-toggler {
            display: none;
          }

          header img {
            height: calc(100% - 20px);
            padding-right: 10px;
            padding-left: 20px;
          }

          .logo-container {
            // color: black;
            font-family: 'Fira Mono';
            font-size: 36px;
            text-decoration: none;
          }


          .link-group {
            display: flex;
            align-items: center;
            height: 100%;
          }

          .link {
            font-family: 'Fira Mono';
            font-size: 18px;
            // width: 100%;
            margin-right: 20px;
            margin-left: 20px;
          }

          @media (max-width: 767px) {
            .nav-closed nav {
              left: -${NavWidth}%;
            }
            .nav-toggler {
              display: block;
              position: absolute;
              top: 0;
              right: 0;
              transition: all ${NavTransitionDuration}s;
              margin-right: 0;
              width: ${TogglerWidth}px;
              height: ${TogglerHeight}px;
              background: transparent;
              border: none;
              outline: none;
              cursor: pointer;
            }
            .nav-closed .nav-toggler {
              margin-right: -${TogglerWidth}px;
              transform: rotate(180deg);
            }
            .nav-closed main {
              width: 100%;
            }
            nav header {
              margin-top: ${TogglerHeight}px;
            }
          }

          .nav-logo {
            // width: 100%;
            // max-width: 250px;
            position: relative;
            top: 10px;
            // right: 30px;
          }

          ul {
            padding: 0;
            list-style: none;
          }

          li {
            margin: 0.5rem 0;
          }

          a:not(:hover) {
            text-decoration: none;
          }

          .active {
            font-weight: bold;
          }
        `}</style>

        <GlobalStyles />

      </div>
    )
  }
}

export default IdyllDocsLayout
