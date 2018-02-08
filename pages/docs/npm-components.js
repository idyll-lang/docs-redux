import Link from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../../components/layout'


const Content = () => markdown`
# Installing Components from NPM

## Overview

Because Idyll is built on top of React, any React component can
be used in Idyll. If you install a component using \`npm\`, Idyll
will automatically be able to find it without any additional configuration.

For example:

\`\`\`
$ npm install some-react-component
\`\`\`

This could then be used in your markup as

\`\`\`
[SomeReactComponent /]
\`\`\`
`


export default ({ url }) => (
  <Layout url={ url }>
    <Content />
    <p>
      Continue to{' '}
      <Link href="/custom-components"><a>custom components</a></Link>.
    </p>
  </Layout>
)
