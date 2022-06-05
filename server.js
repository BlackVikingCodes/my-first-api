const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const myApi = require('./api')
const { unknown } = require('./api')
const { send } = require('process')

const PORT = 3000

//* To serve static files using express you gotta use app.use and express.static
/* The first argument must be the path to the general folder where you have your files */
app.use(express.static(path.join(__dirname, 'static')))



app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'static','index.html'))
  console.log('Someone entered your website (yay!)')
})

app.get('/api', (req,res) => {
  res.json(myApi)
  console.log('API sent')
})

app.get('/api/:name',(req,res) => {

  let bottleName = req.params.name.toLowerCase()
  if(myApi[bottleName]){
    res.json(myApi[bottleName])
    console.log(`${myApi[bottleName].name} sent`)
  } else{
    res.json(myApi['unknown'])
  }

  //res.send(myApi)
})

app.listen(PORT, (err) => {
  if(err){
    console.log(err)
  } else {
    console.log('Server running and bussin\' on port ' + PORT)
  }
})