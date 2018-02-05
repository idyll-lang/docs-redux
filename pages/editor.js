import Link from 'next/link'
// import markdown from 'markdown-in-js'
import Layout from '../components/layout'
import Editor from '../components/editor'


// const Content = () => markdown`
// # GitHub
// `


export default ({ url }) => (
  <div>
    <nav>
      <div>
        Save
      </div>
    </nav>
    <Editor />
    <style jsx>{`

      nav {
        width: 100%;
        padding: 10px 20px;
        background: #EAE7D6;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      nav div {
        background: rgb(200,200,200);
        padding: 10px;
        border-radius: 10px;
        width: 100px;
        text-align: center;
        cursor: pointer;
        transition: background 0.5s;
      }
      nav div:hover {
        background: rgb(215,215,215);
      }
    `}</style>
  </div>
)
