import Link from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../components/layout'


const Content = () => markdown`
# Custom Components
`


export default () => (
  <Layout>
    <Content />
    <p>
      Continue to learn how to use{' '}
      <Link href="/scrolling-and-refs"><a>references</a></Link>
      {' '}to make your page more dynamic.
    </p>
  </Layout>
)
