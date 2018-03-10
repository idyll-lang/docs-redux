// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const uuidv1 = require('uuid/v1');
const express = require('express')
const bodyParser = require('body-parser')
const { parse } = require('url')
 // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
var credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-west-2'
};

let dynasty
let users;

try {
   dynasty = require('dynasty')(credentials);
   users = dynasty.table('idyll-editor')
} catch (e) {
  console.warn('keys for saving functionality not found')
}
// Without express
const {createServer} = require('http')
app.prepare().then(() => {
    // Express config
    const server = express()
    server.use(bodyParser.json())
    
    // TODO: Update "/apps" to be a more approprate URL
    server.post('/api/editor', (req, res) => {
      console.log('in the /editor route');
      
      // TODO: modify this to work with Dynamo
      //let key = datastore.key('BetaApplication');
      if (!req.body) return res.sendStatus(400)
      console.log('storing:', req.body)

      var id = uuidv1();
      users
        .insert({
          id: id,
          markup: req.body.markup
        })
        .then(() => {
          console.log('Beta application has been saved.')
          res.json({id})
        })
        .catch(err => {
          console.error('Uh oh. Could not save beta application:', err)
          res.sendStatus(500)
        })
    })

    server.get('/api/editor/:uuid', (req, res) => {
      console.log('in the /editor route');
      var id = req.params.uuid;
      console.log(id);
      users
        .find(id)
        .then((item) => {
          console.log(item)
          res.json(item)
        })
        .catch(err => {
          console.error('Uh oh. Could not save beta application:', err)
          res.sendStatus(500)
        })
    })
    server.get('*', (req, res) => {
      console.log('* handler')
      handler(req, res)
    })
  
    server.listen(3000)
  })
  