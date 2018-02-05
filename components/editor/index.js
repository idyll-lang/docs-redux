import React from 'react';
import Editor from './editor';
import Renderer from './renderer';
import compile from 'idyll-compiler';
import { hashCode } from './utils';

import styles from './styles';
import initialValue from './initial';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      idyllMarkup: initialValue,
      idyllHash: hashCode(initialValue.trim()),
      error: null,
      ast: compile(initialValue)
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    const hash = hashCode(value.trim());
    if (hash === this.state.hashCode) {
      return;
    }
    try {
      const ast = compile(value);
      this.setState({
        idyllHash: hash,
        idyllMarkup: value,
        ast: ast,
        error: null
      })
    } catch(e) {
      this.setState({
        error: e.message
      })
    }
  }

  render() {
    const { idyllMarkup, ast, error, idyllHash } = this.state;

    return (
      <div className={"container"}>
        <Editor initialValue={initialValue} onChange={this.handleChange} />
        <Renderer ast={ast} idyllMarkup={idyllMarkup} idyllHash={idyllHash} />
        {
          error && (
            <div className={'error-display'}>
              <pre>
                 {error}
              </pre>
            </div>
          )
        }
        <style jsx global>{styles}</style>
      </div>
    )
  }
}

export default App;
