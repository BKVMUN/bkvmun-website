const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, resp) => {
  resp.render('index')
})

app.listen(8080) 