const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemonSchemas');

//assingments routes!
router.use(express.json())

// router.get('/', (req,res) => {
//     res.json(assignments)
// })
//Read - Get
// base read that adds the middleware in app.js as ('/api/assignments/') + ('/') = ('/api/assignments/')
router.get('/', async (req, res) => {
    try {
        const allPokemon = await Pokemon.find({});
        res.json(allPokemon);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
})




//Create pokemon
router.post('/', async (req, res) => {
    try {
        const createPokemon = await Pokemon.create();
        console.log(req.body)
    }
    catch (error) {

    }
});
//Update - 
router.put('/:id', async (req, res) => {
    try {
        //Query to update, checks if it exist by X Id
        const updateEntry = await pokemon.findByIdAndUpdate(req.params.id, req.body);
        res.json(updatedFruit)
    }
    catch (error) {
        res.status(500).json({error: error.message}) //Problem with the server
    }
});
//Delete - Delete
router.delete('/:id', async (req, res) => {
    try {
        //Query to delete by ID
        const deleteEntry = await Pokemon.findByIdAndDelete(req.params.id);
        res.json(deleteEntry)
    }
    catch (error) {
        res.status(500).json({error: error.message}) //Problem with the server
    }
});

module.exports = router;