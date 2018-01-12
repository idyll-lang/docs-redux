
export default () => <style jsx global>{`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i');

html, body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(80, 80, 80);
}

._markdown_ img {
  max-width: 75%;
  margin: 60px auto;
  display: block;
}

code {
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(0,0,0,0.04);
  border-radius: 3px;
}

code:before,
code:after {
  letter-spacing: -0.2em;
  content: "\00a0";
}

pre {
  padding: 16px;
  overflow: auto;
  line-height: 1.45;
  background-color: #f7f7f7;
  border-radius: 3px;
  word-wrap: normal;
}

pre code {
  display: inline;
  max-width: initial;
  padding: 0;
  margin: 0;
  overflow: initial;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
  font-size: 100%;
  white-space: pre;
}

pre code:before,
pre code:after {
  content: normal;
}
`}</style>
