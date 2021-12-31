const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Shop = require('../models/shop')


// Index -- Home Route
router.get('/', (req, res, next) => {
   Shop.find({}, (errors, items) => res.render('shop', {items}))
})

// New Route
router.get('/new', (req,res) => {
   res.render('new')
})

// Details Route
router.get('/:id', (req, res, next) => {
    Shop.findById(req.params.id, (errors, items) => res.render('detail', {items}))
 })



// Edit Route
router.get('/edit', (req, res, next) => {
   Shop.findById(req.params.id, (err, items) => {
      res.render('edit', {items})
   })
})

router.put('/:id', (req,res) => {
   Shop.findByIdAndUpdate(req.params.id, req.body,{new: true} ,(err, updatedModel) => {
      res.render('edit', {shop: updatedModel})
   })
})

router.post('/', (req,res) => {
   console.log(Shop)
   res.send('shop', items)
   res.redirect('/shop')
})



module.exports = router