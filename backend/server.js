const express = require('express')
const app = express()
const PORT = 4444
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const shopController = require('./controllers/shop')

// Middleware
const routeHit = (req, res, next) => {
    console.log('A new route was just hit!');
    next()
}

app.use(routeHit)
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
app.use(methodOverride('_method'));


app.use(expressEjsLayout)
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))
app.use('/shop', shopController)

app.listen(PORT, ()=> console.log (`Listening on port ${PORT}`))