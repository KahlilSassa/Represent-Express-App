const mongoose = require('./connection')
const Shop = require('../models/shop')
const items = require('./items.json')


Shop.deleteMany({})
.then(() => {
     return Shop.insertMany(items)
 })
 .then(data => console.log(data))
 .catch(err => console.log(err))
.finally(()=>{
     process.exit()
 })

Shop.insertMany(items)