const { Router, application } = require('express')
const express = require('express')
const router = express.Router()
const Shop = require('../models/shop')


// Index -- Home Route
router.get('/', (req, res, next) => {
   Shop.find({}, (errors, items) => {
      res.render('shop', {items})
      next()
   })
})

// New Route
router.get('/new', (req,res, next) => {
   console.log("hi");
   res.render('new')
})

// Details Route
router.get('/:id', (req, res, next) => {
    Shop.findById(req.params.id, (err, items) => {
       res.render('detail', {items})
       next()
   })
})


//Create Route
router.post('/shop', (req,res, next) => {
   Shop.create(req.body, (err, createdItems) => {
      res.redirect('/shop')
      next()
   })
}) 

// Edit Route
router.get('/:id/edit', (req, res, next) => {
   console.log(Shop)
   Shop.findById(req.params.id, (err, item) => {
      res.render('edit', {item})
      next()
   })
})

router.put('/:id', (req,res, next) => {
   Shop.findByIdAndUpdate(req.params.id, req.body, {new: true},
      (err, updatedModel) => {
      res.redirect('/')
      next
   })
})

// Delete Route
router.delete('/:id', (req,res) => {
   Shop.findByIdAndRemove(req.params.id, (err, deletedItems) => {
      res.redirect('/')
   })
})

module.exports = router