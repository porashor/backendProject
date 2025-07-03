//depandancies
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schema/todoSchema');
const Todo = new mongoose.model('Todo', todoSchema);
//get request handling
router.get('/:id', async (req, res) => {
    try{
        const data = await Todo.find({_id: req.params.id})
        res.status(200).send(data)
    }catch(err){
        res.status(400).send(err)
    }
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
router.put("/:id", async (req, res) => {
    try {
        const result = await Todo.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        )
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})

//delete request handling
router.delete("/:id", async (req, res) => {
    try {
        const result = await Todo.deleteOne({_id: req.params.id})
    } catch (error) {
        res.status(400).send(error)  
    }
})

module.exports = router