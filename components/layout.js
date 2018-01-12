import Link from 'next/link'
import Head from 'next/head'
import GlobalStyles from './global-styles'

const NavWidth = 20;
const MainWidth = 100 - NavWidth;

const Contents = [
  {
    title: 'Overview',
    pages: [
      'Introduction',
      'Getting started',
      'Syntax',
      'Configuration and styles',
    ],
  },
  {
    title: 'Components',
    pages: [
      'Components overview',
      'Built-in components',
      'NPM components',
      'Custom components',
      'Scrolling and Refs',
    ],
  },
  {
    title: 'Publishing',
    pages: [
      'Deploying to the web',
    ],
  },
  {
    title: 'Open Source',
    pages: [
      'GitHub',
      'Gitter',
    ],
  },
]

const hrefFromName = name => name.trim().toLowerCase().replace(/\s+/g, '-')

export default ({ children, title = 'Idyll' }) => (
  <div id="master">
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="icon" type="image/x-icon" href="static/images/favicon.ico" />
    </Head>

    <nav>
      <header>
        <a href="/">
          <img src="static/images/logo-text.svg" alt="idyll-lang" className="nav-logo" />
        </a>
      </header>
      {
        Contents.map(group => (
          <section key={ group.title }>
            <h1>{ group.title }</h1>
            {
              group.pages.map(page => (
                <div className="nav-page" key={ page }>
                  <Link href={ hrefFromName(page) }>
                    <a>{ page }</a>
                  </Link>
                </div>
              ))
            }
          </section>
        ))
      }
    </nav>

    <main>
      { children }
    </main>

    <style jsx>{`
      #master {
        display: flex;
        justify-content: flex-end;
      }

      nav, main {
        padding: 1em;
        box-sizing: border-box;        
      }

      nav {
        background: #EAE7D6;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: ${NavWidth}%;
      }

      main {
        width: ${MainWidth}%;
      }

      .nav-logo {
        width: 100%;
        max-width: 250px;
      }

      .nav-page {
        margin: 10px 0;
      }
    `}</style>

    <GlobalStyles />

  </div>
)
