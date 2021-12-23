const mongoose = require('../db/connection')

const clothingSchema = new mongoose.Schema({
    price: Number,
    item: {type: String, required: true},
    color: {type: String, required: true},
    description: {type: String, required: true},
    quantity: Number
})

const Clothing = mongoose.model('Clothing', clothingSchema)

module.exports = Clothing