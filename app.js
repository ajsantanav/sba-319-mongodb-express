require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080 // Port and Back up port this way I know if its workings
const connect = require('./config/conn')
connect()

const initialPokemon = require('./config/pokemon');
const pokemonSchema = require('./models/pokemonSchemas');
const pokekemonRoutes = require('./routes/pokemonRoute');

app.use(express.json())



//midware
app.use('/api/pokemon', pokekemonRoutes)


app.get('/', (req, res) => {
    res.status(200);
    res.send("welcome to the homepage");
}) 


//This function injects the seed data
app.get('/pokemon/pokemons', async (req, res)=> {
    try {
        await pokemonSchema.deleteMany({});
        await pokemonSchema.create(initialPokemon)
        res.json(initialPokemon);
    }
    catch (error) {
        console.log(error);
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});