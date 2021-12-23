const mongoose = require('../db/connection')

const storeSchema = new mongoose.Schema({
    price: Number,
    item: {type: String, required: true},
    color: {type: String, required: true},
    description: {type: String, required: true},
    quantity: Number
})

const Store = mongoose.model('Store', storeSchema)

module.exports = Store