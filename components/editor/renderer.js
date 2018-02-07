import React from 'react'
import * as components from 'idyll-components'
import IdyllDocument from 'idyll-document'

class Renderer extends React.PureComponent {
  render() {
    const { ast, idyllHash } = this.props
    return (
      <div className='renderer'>
        <div className='renderer-container'>
          <IdyllDocument
            ast={ ast }
            components={ components }
            key={ idyllHash }
            datasets={ {} }
          />
        </div>

        <style jsx>{`
          .renderer {
            flex: 2;
            background: #fffff8;
            padding: 15px;
            font-size: 13px;
            overflow-y: auto;
          }

          .renderer-container {
            margin-left: auto;
            margin-right: auto;
            padding-left: 6.25%;
            font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
            color: #111;
            max-width: 1400px;
            counter-reset: sidenote-counter;
          }
        `}</style>
      </div>
    )
  }
}



export default Renderer
