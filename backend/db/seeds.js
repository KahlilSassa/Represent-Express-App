const mongoose = require('./connections')
const Clothing = require('../models/clothing')
const clothingSeeds = require('./clothingSeeds.json')

Clothing.deleteMany({})
    .then(() => {
        return Clothing.insertMany(clothingSeeds)
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => {
        process.exit()
    }) 