const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.use(express.static('public'))
app.use(expressLayouts)
app.use(bodyParser.urlencoded({extended: false}))

const indexRoute = require('./routes/index')
const catRoute = require('./routes/categories')
const bookRoute = require('./routes/books')

app.use('/', indexRoute)
app.use('/category', catRoute)
app.use('/book', bookRoute)

app.listen(3003, () => console.log('Server running'))
