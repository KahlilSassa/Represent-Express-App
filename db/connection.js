const mongoose = require('mongoose')
const mongoURI = process.env.NODE_ENV === 'production'
? process.env.DB_URL : 'mongodb://localhost:27017/shop'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((instance) =>
        console.log(`Connected to db: ${instance.connections[0].name}`)
    )
    .catch((error) => console.log('Connection failed!', error))

module.exports = mongoose; 

