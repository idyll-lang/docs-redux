import React from 'react'
import NextLink from 'next/link'
import showdown from 'showdown'
import Parser from 'html-react-parser';
import Layout from '../components/layout'

import Contents from '../idyll-components/contents.yaml'
// import * as Descriptions from '../idyll-components/descriptions'
import * as Examples from '../idyll-components/examples'

showdown.setFlavor('github')

const mdConverter = new showdown.Converter()
console.log(Contents)

function md2html(md, naked = false) {
  if (!md) return md
  let html = mdConverter.makeHtml(md)
  if (naked) html = html.replace(/^<p>/, '').replace(/<\/p>$/, '')
  return Parser(html)
}

function md2htmlNaked(md) {
  return md2html(md, true)
}

const titleFromName = name => name.split(/([A-Z][a-z]+)/).join(' ').trim()
const titleHrefFromTitle = title => title.replace(' ', '-')


class BaseSection {
  constructor(obj) {
    this.name = Object.keys(obj)[0]
    this.title = titleFromName(this.name)
  }

  get hrefId() {
    return this.name
  }
}

class IdyllComponentGroup extends BaseSection {
  constructor(obj) {
    super(obj)
    const { description, components } = obj[this.name]
    this.description = description
    this.components = components.map(sub => new IdyllComponentInfo(sub, this))
  }

  renderContents() {
    return (
      <li key={ this.name }>
        <a href={ `#${this.hrefId}` }>{ this.title }</a>
        {' '}&mdash;{' '}
        { md2html(this.description) }
        <ul>
          { this.components.map(comp => comp.renderContents()) }
        </ul>
      </li>
    )
  }
}

class IdyllComponentInfo extends BaseSection {
  constructor(obj, parent) {
    super(obj)
    this.parent = parent
    Object.assign(this, obj[this.name])
    // this.Description = this.description 
    //   ? (() => md2html(this.description))
    //   : (Descriptions[this.name] || (() => null))
    this.Description = () => md2html(this.description) || null
    this.exampleCode = Examples[this.name]
  }

  get hrefId() {
    return `${this.parent.hrefId}-${super.hrefId}`
  }

  renderContents() {
    return (
      <li key={ this.name }>
        <a href={ `#${this.hrefId}` }>{ this.title }</a>
      </li>
    )
  }
}

class IdyllComponentDoc extends React.Component {
  render() {
    const {
      name,
      title,
      hrefId,
      Description,
      image,
      exampleCode,
      idyllProps,
    } = this.props.component

    return (
      <div id={ hrefId } key={ name }>
        <h3>{ title }</h3>
        {/*{ md2html(this.description) }*/}
        <Description />
        { image &&
          <figure>
            <img src={ `static/images/${image}` } alt={ title } />
          </figure>
        }
        { exampleCode &&
          <pre>
            <code>{ exampleCode }</code>
          </pre>
        }
        { idyllProps && idyllProps.length > 0 &&
          <div>
            <h4>Props</h4>
            <ul>
              { idyllProps.map(p => this.renderPropBullet(p)) }
            </ul>
          </div>
        }
      </div>
    )
  }

  renderPropBullet(prop) {
    const [ name ] = Object.keys(prop)
    const description = prop[name]
    return (
      <li key={ name } className="idyll-prop">
        <code>{ name }</code>
        {' '}&mdash;{' '}
        <span>{ md2html(description) }</span>
      </li>
    )
  }
}

class IdyllComponentSection extends React.Component {
  render() {
    const {
      name,
      title,
      hrefId,
      components,
    } = this.props.group

    return (
      <section id={ hrefId } key={ name }>
        <h2>{ title }</h2>
        { components.map(comp => <IdyllComponentDoc component={ comp } key={ comp.name } />) }
      </section>
    )
  }
}


const groups = Contents.map(groupObj => new IdyllComponentGroup(groupObj))



export default ({ url }) => (
  <Layout url={ url }>
    <h1>Built-In Components</h1>
    <p>
      Idyll ships with a handful of components that handle common tasks. They are broken into three categories:
    </p>
    <div className="page-contents">
      <ul>
        { groups.map(g => g.renderContents()) }
      </ul>
    </div>

    { groups.map(g => <IdyllComponentSection group={ g } key={ g.name } />) }

    <p>
      Continue to{' '}
      <NextLink href="/npm-components"><a>npm components</a></NextLink>.
    </p>
  </Layout>
)
