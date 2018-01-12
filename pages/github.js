import Link from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../components/layout'


const Content = () => markdown`
# GitHub
`


export default () => (
  <Layout>
    <Content />
  </Layout>
)
