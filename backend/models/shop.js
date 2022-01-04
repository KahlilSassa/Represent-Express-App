const mongoose = require('../db/connection')
const items = require('../db/items.json')

const shopSchema = new mongoose.Schema({
    price: Number,
    item: {type: String, required: true},
    color: {type: String, required: true},
    description: {type: String, required: true},
    image: String
})

const Shop = mongoose.model('Shop', shopSchema)

// Shop.deleteMany({})
// .then(() => {
//     return Shop.insertMany(items)
// })
// .then(data => console.log(data))
// .catch(err => console.log(err))
// .finally(()=>{
//     process.exit()
// })

// Shop.insertMany(items)

module.exports = Shop