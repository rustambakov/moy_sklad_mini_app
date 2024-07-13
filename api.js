import express from 'express'
import crypto from 'crypto'
import { checkHash } from './src/utilities.js';

const app = express();
const port = process.env.PORT || 80
const botToken = process.env.BOT_TOKEN

app.use('/static', express.static('public'))

app.get('/', (req, res) => {

  //Return UI
  res.sendFile('index.html', { root: '.' })
})

app.get('/api/check_hash', (req, res) => {

  //Get init data
  console.log(req.query.init_data)
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
