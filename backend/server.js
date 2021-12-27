const express = require('express')
const app = express()
const PORT = 4444
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const clothingController = require('./controllers/clothing')

app.use(express.static('public'))
app.use(methodOverride('_method'));

const routeHit = (req,res,next) =>{
    console.log("A new route was just hit");
    next()
}

app.use(express.urlencoded({extended:false}));

app.use(expressEjsLayout)
app.set('view engine', 'ejs')

app.use('/clothings' , clothingController)


app.listen(PORT, ()=> console.log (`Listening on port ${PORT}`))