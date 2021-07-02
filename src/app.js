const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// For static content.
const publicDirectoryPath = path.join( __dirname, '../public')
// For Dynamic content.
const partialDirectoryPath = path.join(__dirname, '../templates/partials')
const viewsPath = path.join(__dirname, '../templates/views')

// Setup handlebars engine and views location.
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialDirectoryPath)

// // Setup static directory to serve.
// app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about', {
    text: 'dynamic txt from app.js'
  })
})

app.get('/getJSON', (req, res) => {
  res.send({
    data1: 'Here is some data-1!',
    data2: 'Here is some data-2!'
  })
})


app.listen(3000, () => {
  console.log('Server is up on port 3000')
})