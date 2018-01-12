
const imageUrl = (url) => /^http/.test(url) ? url : `/static/images/${url}`


export default ({ href, label, image }) => (
  <div className="example">
    <a href={ href }>
      <div
        className="example-image"
        style={{ backgroundImage: `url(${imageUrl(image)})` }}
      ></div>
      <div className="example-label">{ label }</div>
    </a>

    <style jsx>{`
      .example {
        background-color: #f7f7f7;
        padding: 15px;
      }

      .example a {
        display: block;
        text-decoration: none;
      }

      .example-label {
        color: black;
        text-align: center;
        font-weight: bold;
      }

      .example-image {
        width: 100%;
        height: 275px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
)