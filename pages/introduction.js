import Link from 'next/link'
import markdown from 'markdown-in-js'
import Layout from '../components/layout'
import ExampleGroup from '../components/example-group'
import Donate from '../components/donate-link'



const Intro = () => markdown`
# Introducing Idyll

Idyll is a tool that makes it easier to author interactive narratives
for the web. The goal of the project is to provide a friendly
markup language — and an associated toolchain —
that can be used to create dynamic, text-driven web pages.

Idyll helps you create documents that use common narrative techniques
such as embedding interactive charts and graphs,
responding to scroll events, and [explorable explanations](http://explorableexplanations.com/). Additionally,
its readable syntax facilitates
collaboration between writers, editors, designers,
and programmers on complex projects.

**[Try Idyll in your browser](https://idyll-lang.github.io/editor/)**.
`

const exampleGroups = [
  {
    title: 'Full articles',
    examples: [
      {
        label: 'The Etymology of Trig Functions',
        href: 'https://mathisonian.github.io/trig/etymology/',
        image: 'trig.png',
      },
      {
        label: 'Seattle PD’s Dashcam Problem',
        href: 'https://mathisonian.github.io/dashcam/',
        image: 'https://mathisonian.github.io/dashcam/images/share.png',
      },
      {
        label: 'The United Complaints of America',
        href: 'https://mathisonian.github.io/consumer-complaints/',
        image: 'complaints-2.gif',
      },
    ],
  },
  {
    title: 'With popular JavaScript libraries',
    examples: [
      {
        label: 'D3',
        href: 'https://idyll-lang.github.io/idyll-d3-component/',
        image: 'd3.png',
      },
      {
        label: 'regl',
        href: 'https://idyll-lang.github.io/idyll-regl-component/',
        image: 'regl.png',
      },
      {
        label: 'Vega Lite',
        href: 'https://idyll-lang.github.io/examples/csv/',
        image: 'vl.png',
      },
    ],
  },
  {
    title: 'Other examples',
    examples: [
      {
        label: 'Lorenz Attractor',
        href: 'https://mathisonian.github.io/lorenz/',
        image: 'lorenz.png',
      },
      {
        label: 'Nonlinear Sliders',
        href: 'https://mathisonian.github.io/idyll/nonlinear-sliders/',
        image: 'nonlinear.png',
      },
      {
        label: 'Scrolly Idyll',
        href: 'https://idyll-lang.github.io/idyll/scroll/',
        image: 'scroll.gif',
      },
    ],
  },
]


const Examples = () => (
  <section>
    <h3>Examples</h3>
    {
      exampleGroups.map(eg => <ExampleGroup {...eg} key={ eg.title } />)
    }
  </section>
)


export default () => (
  <Layout>
    <Intro />
    <Examples />
    <p>
      In Idyll the entire document is reactive, built on top of Facebook's React framework. Changes
      immediately propagate through the entire page, taking the pain out of creating
      data-driven experiences that respond to reader input. You don't need to know anything about React
      to use Idyll, but if you do, it is easy to extend with your own custom components.
    </p>
    <Donate />
    <p>
      Continue to the <Link href="/getting-started"><a>next section</a></Link> to start using Idyll.
    </p>
  </Layout>
)
