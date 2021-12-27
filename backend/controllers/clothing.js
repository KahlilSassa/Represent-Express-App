const express = require('express')
const router = express.Router()
const Clothing = require('../models/clothing')

// HOME ROUTE
router.get('/', (req,res, next) => {
   data = Clothing.find({})
   .then(Clothing => res.json(Clothing))
   .catch(next)
})

router.get('/new', (req,res) => {
    res.render('new')
})

// Show route
router.get('/:id', (req,res, next) => {
    Clothing.findById(req.params.id)
    .then((clothing) => res.json(clothing))
    .catch(next)
})

// POST ROUTE --- create route
router.post('/', (req,res) => {
    
})

// DELETE ROUTE
router.delete('/:id', (req,res) => {

})

// EDIT ROUTE
router.get('/:id/edit', (req,res) => {

})

module.exports = router