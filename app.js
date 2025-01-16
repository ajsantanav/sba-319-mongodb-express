const express = require('express');
const app = express();
require('dotenv').config()
//port stuff
//Made the fallback port different to test that I installed dotenv properly
const PORT = process.env.PORT || 5050;


// Data requirements for the API
const assignment = require('./data/assignments');
const assignmentRouters = require('./routes/assignmentsRoutes.js');


//midware
app.use('/api/assignments', assignmentRouters)

//

app.use(express.json())

// get localhost landing
//***//
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

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