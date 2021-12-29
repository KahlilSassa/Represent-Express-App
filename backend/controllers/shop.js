const express = require('express')
const router = express.Router()
const Shop = require('../models/shop')

router.get('/', (req, res, next) => {
   Shop.find({}, (errors, items) => res.render('shop', {items}))
})


// details route
router.get('/:id', (req, res, next) => {
    Shop.findById(req.params.id, (errors, items) => res.render('detail', {items}))
 })


router.put('/:id', (req,res) => {
   Shop.findByIdAndUpdate(req.params.id, req.body,{new: true} ,(err, updatedModel) => {
      res.render('edit', {shop: updatedModel})
   })
})

 router.get('/:id/edit', (req, res, next) => {
   Shop.find({}, (errors, items) => res.render('edit', {items}))
})

module.exports = router