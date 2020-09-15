const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const session = require('express-session')
const helmet = require('helmet')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(helmet())

app.set('trust proxy', 1)
app.use(session({
    secret: '*Shr1996x#7575',
    resave: false,
    saveUninitialized: false,
}))

app.use(bodyParser.json())
app.use(expressLayouts)
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '/public')))


consign()
.include('src/routes')
.then('src/controllers')
.then('src/models')
.into(app)

app.listen(3000, () => {
    console.log('Website running!')
})