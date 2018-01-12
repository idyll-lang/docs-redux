import Example from './example'

export default ({ title, examples }) => (
  <div className="example-group">
    <h5>{ title }</h5>
    <div className="examples">
      {
        examples.map(ex => <Example {...ex} key={ ex.href } />)
      }
    </div>

    <style jsx>{`
      .examples {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 6px;
      }

      @media all and (max-width: 600px) {
        .examples {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
)

