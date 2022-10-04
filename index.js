const express = require('express')
//const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
// const usersRoute = require('./route/users')

//app.use(bodyParser())
app.use(express.json())
// app.use(usersRoute)

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})