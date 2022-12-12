const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://rafeldo:rafeldo@cluster0.rt991mv.mongodb.net/uyorooms?retryWrites=true&w=majority'

const connectToMongo = () => {

    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;