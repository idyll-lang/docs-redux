import Link from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../components/layout'


const Content = () => markdown`
# Installing Components from NPM
`


export default () => (
  <Layout>
    <Content />
    <p>
      Continue to{' '}
      <Link href="/custom-components"><a>custom components</a></Link>.
    </p>
  </Layout>
)
