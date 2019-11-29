const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PictureSchema = new Schema({
    facial_emotion:[{ 
        tag : String,
        score: Number
    }]
})

const Picture = mongoose.model('Picture',PictureSchema)

module.exports = Picture