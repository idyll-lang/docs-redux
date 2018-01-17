import NextLink from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../components/layout'


const Aside = () => (
  <div>
    asdf
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


export default () => (
  <Layout>
    <h1>Built-In Components</h1>
    <p>
      Idyll ships with a handful of components that handle common tasks. They are broken into three categories:
    </p>
    <div className="page-contents">
      <ul>
        { Contents.map(sectionObj => renderSectionContents(sectionObj)) }
      </ul>
    </div>

    { Contents.map(sectionObj => renderSection(sectionObj)) }

    <p>
      Continue to{' '}
      <NextLink href="/npm-components"><a>npm components</a></NextLink>.
    </p>
  </Layout>
)


const displayTitleForKey = key => key.split(/(?=[A-Z])/).join(' ')



// TODO: there's gotta be a way to avoid the repetition in the following four functions


const renderSection = sectionObj => {
  const [ key ] = Object.keys(sectionObj)
  const subsections = sectionObj[key]
  const title = displayTitleForKey(key)
  const titleId = title.replace(' ', '-')
  return (
    <section id={ titleId }>
      <h2>{ title }</h2>
      { subsections.map(sub => renderSubsection(titleId, sub)) }
    </section>
  )
}


const renderSectionContents = sectionObj => {
  const [ key ] = Object.keys(sectionObj)
  const subsections = sectionObj[key]
  const title = displayTitleForKey(key)
  const titleId = title.replace(' ', '-')
  return (
    <li>
      <a href={ `#${titleId}` }>{ title }</a> - asdf
      <ul>
        { subsections.map(sub => renderSubsectionContents(titleId, sub)) }
      </ul>
    </li>
  )
}


const renderSubsection = (sectionId, subsectionObj) => {
  const [ key ] = Object.keys(subsectionObj)
  const SubsectionContent = subsectionObj[key]
  const title = displayTitleForKey(key)
  const titleId = `${sectionId}-${title.replace(' ', '-')}`
  return (
    <div id={ titleId }>
      <h3>{ title }</h3>
      <SubsectionContent />
    </div>
  )
}


const renderSubsectionContents = (sectionId, subsectionObj) => {
  const [ key ] = Object.keys(subsectionObj)
  const title = displayTitleForKey(key)
  const titleId = `${sectionId}-${title.replace(' ', '-')}`
  return (
    <li>
      <a href={ `#${titleId}` }>{ title }</a>
    </li>
  )
}


