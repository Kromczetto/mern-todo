const { MongoServerClosedError } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = mongoose

const todoSchema = new Schema ({
    text:{
        type: String,
        require: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    // data:{
    //     type: String,
    //     default: Data.now()
    //     // jak nie bedzie dzialo to mozna sprobowac jeszcze 
    // }
})

module.exports = mongoose.model('Todo',todoSchema)