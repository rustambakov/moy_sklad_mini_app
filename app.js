import express from 'express'

const app = express()

let port = process.env.PORT || 80
let botToken = process.env.BOT_TOKEN

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})