const mongoose = require('../db/connection')
const items = require('../db/items.json')

const shopSchema = new mongoose.Schema({
    price: Number,
    item: {type: String, required: true},
    color: {type: String, required: true},
    description: {type: String, required: true},
    quantity: Number,
    image: String
})

const Shop = mongoose.model('Shop', shopSchema)
Shop.insertMany(items)

module.exports = Shop