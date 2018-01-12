import Link from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../components/layout'


const Content = () => markdown`
# Viewport Events
`


export default () => (
  <Layout>
    <Content />
    <p>
      You've learned all about Idyll! All that's left is{' '}.
      <Link href="/deploying-to-the-web">
        <a>deploying your project to the web</a>
      </Link>.
    </p>
  </Layout>
)
