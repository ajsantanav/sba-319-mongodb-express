const express = require('express');
const router = express.Router();

//assingments routes!
router.use(express.json())

// router.get('/', (req,res) => {
//     res.json(assignments)
// })
//Read - Get
// base read that adds the middleware in app.js as ('/api/assignments/') + ('/') = ('/api/assignments/')
router.get('/', (req, res) => {
    res.json(assignments)
})

router.get('/:id', (req, res, next) => { //This shows when you put a specific id
    const assignment = assignments.find((u)=> u.id == req.params.id);
    assignment? res.json(assignment) : next()

});


//Put add a new one
router.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.title && req.body.description && req.body.due_date){ //check for their existance in the json injection
        if(assignments.find((u) => u.title == req.body.title || u.id == req.body.id)) { //looks to compare if they exist already
            res.json({error: "Id or Title already taken"});// throws error that they already exist
            return;
        }

        
        const newAssignment = { 
            id: assignments.length + 1,
            title: req.body.title,
            description: req.body.description,
            due_date: req.body.due_date
        }
        

        assignments.push(newAssignment);
        res.json(assignments[assignments.length - 1]);
    }
    else res.json({error: "insufficient Data"});
});
//Update - Patch
router.patch('/:id', (req, res) => {
    const assignmentId = assignments.find((u, index) => {
        if(u.id == req.params.id) {
           for(const toChange in req.body) {
            assignments[index][toChange] = req.body[toChange]
           }
        }
        return true;
    });
    assignmentId? res.json(assignments) : next();
});
//Delete - Delete
router.delete('/:id', (req, res) => {
    const assignment = assignments.find((u, i) => {
        if(u.id == req.params.id) {
            assignments.splice(i, 1)
            return true;
        }
    });
    assignment? res.json(assignment) : res.status(404).json({message: 'Entry does not exist'})
});

module.exports = router;