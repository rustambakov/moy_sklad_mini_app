import express from 'express'
import crypto from 'crypto'
import { checkHash } from './src/utilities.js';

const app = express();
const port = process.env.PORT || 80
const botToken = process.env.BOT_TOKEN


app.get('/', (req, res) => {
  //Check initData

  //Return UI
  res.send(req)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})