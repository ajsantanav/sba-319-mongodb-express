require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const connect = require('./config/conn')
connect()
app.use(express.json())
// const conn = require("./database/conn.js")
// conn();
//port stuff
//Made the fallback port different to test that I installed dotenv properly
const PORT = process.env.PORT || 5050;


// Data requirements for the API
// const assignment = require('./data/assignments');
// const assignmentRouters = require('./routes/assignmentsRoutes.js');


//midware
// app.use('/api/assignments', assignmentRouters)


// get localhost landing
//***//


app.get('/', (req, res) => {
    res.status(200);
    res.send("welcome to the homepage");
}) 
//***//







////////////// Port and Error
app.use((req, res) => {
    res.status(404)
    res.json("404: Not Found");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});