import NextLink from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../components/layout'



class BaseSection {
  constructor(obj) {
    const [ key ] = Object.keys(obj)
    this.key = key
    this.title = key.split(/([A-Z][a-z]+)/).join(' ').trim()
    this.titleId = this.title.replace(' ', '-')
  }
}

class Section extends BaseSection {
  constructor(obj) {
    super(obj)
    this.subsections = obj[this.key].map(sub => new Subsection(sub, this))
  }

  render() {
    return (
      <section id={ this.titleId } key={ this.key }>
        <h2>{ this.title }</h2>
        { this.subsections.map(sub => sub.render()) }
      </section>
    )
  }

  renderContents() {
    return (
      <li key={ this.key }>
        <a href={ `#${this.titleId}` }>{ this.title }</a> - asdf
        <ul>
          { this.subsections.map(sub => sub.renderContents()) }
        </ul>
      </li>
    )
  }
}

class Subsection extends BaseSection {
  constructor(obj, parent) {
    super(obj)
    this.parent = parent
    this.titleId = `${parent.titleId}-${this.titleId}`
    this.Content = obj[this.key]
  }

  render() {
    const { Content } = this
    return (
      <div id={ this.titleId } key={ this.key }>
        <h3>{ this.title }</h3>
        <Content />
      </div>
    )
  }

  renderContents() {
    return (
      <li key={ this.key }>
        <a href={ `#${this.titleId}` }>{ this.title }</a>
      </li>
    )
  }
}


const Aside = () => (
  <div>
    <p>
      Content inside of an aside component will be displayed in the margin of your document.
      For example, the{' '}
      <a href="https://mathisonian.github.io/consumer-complaints/">consumer complaints</a>
      {' '}article uses the aside component to display a small chart and caption:
    </p>
    <figure>
      <img src="static/images/aside.png" alt="aside" />
    </figure>
  </div>
)
const Feature = () => (
  <div>
    asdf
  </div>
)
const Fixed = () => (
  <div>
    asdf
  </div>
)
const Float = () => (
  <div>
    asdf
  </div>
)
const FullScreen = () => (
  <div>
    asdf
  </div>
)
const Inline = () => (
  <div>
    asdf
  </div>
)
const Panel = () => (
  <div>
    asdf
  </div>
)
const Waypoint = () => (
  <div>
    asdf
  </div>
)
const Action = () => (
  <div>
    asdf
  </div>
)
const Boolean = () => (
  <div>
    asdf
  </div>
)
const Button = () => (
  <div>
    asdf
  </div>
)
const Chart = () => (
  <div>
    asdf
  </div>
)
const Display = () => (
  <div>
    asdf
  </div>
)
const Dynamic = () => (
  <div>
    asdf
  </div>
)
const Equation = () => (
  <div>
    asdf
  </div>
)
const Gist = () => (
  <div>
    asdf
  </div>
)
const Header = () => (
  <div>
    asdf
  </div>
)
const Link = () => (
  <div>
    asdf
  </div>
)
const Radio = () => (
  <div>
    asdf
  </div>
)
const Range = () => (
  <div>
    asdf
  </div>
)
const Select = () => (
  <div>
    asdf
  </div>
)
const Slideshow = () => (
  <div>
    asdf
  </div>
)
const SVG = () => (
  <div>
    asdf
  </div>
)
const Table = () => (
  <div>
    asdf
  </div>
)
const TextInput = () => (
  <div>
    asdf
  </div>
)
const Analytics = () => (
  <div>
    asdf
  </div>
)
const Meta = () => (
  <div>
    asdf
  </div>
)
const Preload = () => (
  <div>
    asdf
  </div>
)

const Contents = [
  { Layout: [
    { Aside },
    { Feature },
    { Fixed },
    { Float },
    { FullScreen },
    { Inline },
    { Panel },
    { Waypoint },
  ]},
  { Presentation: [
    { Action },
    { Boolean },
    { Button },
    { Chart },
    { Display },
    { Dynamic },
    { Equation },
    { Gist },
    { Header },
    { Link },
    { Radio },
    { Range },
    { Select },
    { Slideshow },
    { SVG },
    { Table },
    { TextInput },
  ]},
  { Helpers: [
    { Analytics },
    { Meta },
    { Preload },
  ]},
]

const sections = Contents.map(sectionObj => new Section(sectionObj))


export default () => (
  <Layout>
    <h1>Built-In Components</h1>
    <p>
      Idyll ships with a handful of components that handle common tasks. They are broken into three categories:
    </p>
    <div className="page-contents">
      <ul>
        { sections.map(s => s.renderContents()) }
      </ul>
    </div>

    { sections.map(s => s.render()) }

    <p>
      Continue to{' '}
      <NextLink href="/npm-components"><a>npm components</a></NextLink>.
    </p>
  </Layout>
)
