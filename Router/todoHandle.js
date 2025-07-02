//depandancies
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schema/todoSchema');
const Todo = new mongoose.model('Todo', todoSchema);
//get request handling
router.get('/', (req, res) => {
    res.send('Hello World!')
})

//post request handling
router.post("/", async (req, res) => {
    console.log(req.body)
    const todo = new Todo(req.body)
    try{
        const data = await todo.save()
        res.status(200).send(data)
        console.log("success")
    }catch(err){
        res.status(400).send(err)
        console.log("err")
    }
})

//put request handling
router.put("/", (req, res) => {
    res.send('Hello World!')
})

//delete request handling
router.delete("/", (req, res) => {
    res.send('Hello World!')
})

module.exports = router