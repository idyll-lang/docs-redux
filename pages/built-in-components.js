import Link from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../components/layout'


const Content = () => markdown`
# Built-In Components
`


export default () => (
  <Layout>
    <Content />
    <p>
      Continue to{' '}
      <Link href="/npm-components"><a>npm components</a></Link>.
    </p>
  </Layout>
)
