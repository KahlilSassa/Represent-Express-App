const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const router = express.Router()

router.get('/', (req,res) => {
    res.send('session controller works')
})

router.get('/register', (Req,res) => {
    
})

