import Link from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../components/layout'


const Content = () => markdown`
# Building your Idyll project for the web
`


export default () => (
  <Layout>
    <Content />
  </Layout>
)
