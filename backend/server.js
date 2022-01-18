const express = require('express')
const app = express()
// const PORT = 4444
app.set('port', process.env.PORT || 4444)
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const shopController = require('./controllers/shop')

// Middleware
const routeHit = (req, res, next) => {
    console.log('A new route was just hit!');
    next()
}

app.use(routeHit)
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
app.use(methodOverride('_method'));


app.use(expressEjsLayout)
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))
app.use('/shop', shopController)

app.listen(app.get('port'), ()=> console.log (`Listening on port ${app.get('port')}`))