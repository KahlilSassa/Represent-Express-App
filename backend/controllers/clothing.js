const express = require('express')
const router = express.Router()
const Clothing = require('../models/clothing')

// HOME ROUTE
router.get('/', (req, res, next) => {
   data = Clothing.find({})
   .then(Clothing => res.json(Clothing))
   .catch(next)
})

router.get('/new', (req, res) => {
    res.render('new')
})

// SHOW ROUTE
router.get('/:id', (req, res, next) => {
    Clothing.findById(req.params.id)
    .then((clothing) => res.json(clothing))
    .catch(next)
})

// POST ROUTE --- create route
router.post('/', (req, res, next) => {
    Clothing.create(req.body)
    .then(clothing => res.json(clothing))
    .catch(next)
})

// EDIT ROUTE
router.get('/:id', (req, res, next) => {
    Clothing.findById(req.params.id)
    .then(clothing => res.json(clothing))
    .catch(next)
})

router.put('/:id/edit', (req, res, next) => {
    Clothing.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(clothing => res.json(clothing))
    .catch(next)
})

// DELETE ROUTE
router.delete('/:id', (req, res, next) => {
    Clothing.findByIdAndDelete(req.params.id)
    .then(() => res.json({
        messgae: 'Clothing item was deleted.'
    }))
    .catch(next)
})

module.exports = router