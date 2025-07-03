const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const userSchema = require("../schema/userSchema");
const checklogin = require("../middleware/checklogin");
const User = new mongoose.model('User', userSchema);

//signup 
router.post("/signup", async (req, res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: hashedPass
        })
        const data = await user.save()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})
//loging 
router.post("/login", async (req, res) => {
    try{
        const user = await User.find({username: req.body.username})
    if(user.length >= 0){
        const valid = await bcrypt.compare(req.body.password, user[0].password)
        if(valid){
            // generate web token 
            const token = jwt.sign({
                username: user[0].username,
                id: user[0]._id
            }, process.env.JWT_SECRET, {
                expiresIn: "1d"
            })
            res.status(200).send(token)
        }
    }else{
        res.status(400).send("auth failed")
    }
    }catch(err){
        res.status(500).send(err)
    }
})

router.get("/", checklogin, async (req, res) => {
    console.log(req.user)
    try {
        const data = await User.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(402).send(error)
    }
})

router.delete("/:id", async (req, res)=>{
    try {
        const data = await User.deleteMany()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router