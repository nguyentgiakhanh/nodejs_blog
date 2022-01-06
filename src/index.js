const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const route = require('./routes');
const path = require('path')
const app = express()
const port = 3000
const db = require('./config/db/db')

// Connect db
db.connect();

// HTTP logger
app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.use(express.static(path.join(__dirname,'public')))

// template engine
app.engine('hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
