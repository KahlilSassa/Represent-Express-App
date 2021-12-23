const mongoose = require('./connections')
const Store = require('../models/store')
const storeSeeds = require('./storeSeeds.json')

Product.deleteMany({})
    .then(() => {
        return Product.insertMany(storeSeeds)
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => {
        process.exit()
    }) 