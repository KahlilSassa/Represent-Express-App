const express = require('express')
const router = express.Router()
const Store = require('../models/store')

// HOME ROUTE
router.get('/', (req,res) => {

})

router.get('/new', (req,res) => {
    res.render('new')
})

router.get('/:id', (req,res) => {

})

// POST ROUTE
router.post('/', (req,res) => {

})

// DELETE ROUTE
router.delete('/:id', (req,res) => {

})

// EDIT ROUTE
router.get('/:id/edit', (req,res) => {

})

module.exports = router