const mongoose = require('mongoose')

//defined move Schema, what it should have and not
const pokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    types: [
        {
            //Makes and empty array to allow more than one type
            type: {
                type: String,
                required: true
            }
        }
    ],
})

//create the move model
const Pokemon = mongoose.model('Pokemon', pokemonSchema);


//exports this file
module.exports = Pokemon