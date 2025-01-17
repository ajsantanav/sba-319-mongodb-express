const mongoose = require('mongoose')

//defined move Schema, what it should have and not
const moveSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    power: {
        type: Number,
        required: true
    }
})

//create the move model
const Move = mongoose.model('Move', moveSchema);


//exports this file
module.exports = Move