const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.post('/update', function (req, res) {
  if (!req.body.username || !req.body.data) {
    console.log('Received incomplete POST: ' + JSON.stringify(req.body))
    return res.send({ status: 'error', message: 'missing parameter(s)' })
  }

  console.log('Received POST: ' + JSON.stringify(req.body))
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
