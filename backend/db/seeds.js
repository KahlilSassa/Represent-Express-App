const mongoose = require('./connection')
const Clothing = require('../models/clothing')
const clothingSeeds = require('../db/clothingSeeds.json')

Clothing.deleteMany({})
    .then(() => {
        return Clothing.insertMany(clothingSeeds)
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => {
        process.exit()
    }) 