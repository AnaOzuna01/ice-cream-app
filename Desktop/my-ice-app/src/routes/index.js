const express = require('express');
const router = express.Router();
const Task = require('../models/task');


//get a list taks from the db
router.get('/', async (req, res) => {
    console.log('Select');
}); 

router.post('/add', async (req, res) =>{
    console.log('Insert');
});


router.get('return:/id', async (req, res) =>{
    console.log('Update');
});

router.get('delete:/id', async (req, res) =>{
    console.log('Delete');
});
module.exports = router; 