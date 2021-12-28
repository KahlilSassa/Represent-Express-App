const express = require('express')
const router = express.Router()
const Shop = require('../models/shop')

router.get('/', (req, res, next) => {
   Shop.find({}, (errors, items) => res.render('shop', {items}))
})

module.exports = router