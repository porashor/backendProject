//depandancies
const express = require('express');
const router = require('./Router/todoHandle');
const mongoose = require('mongoose');


// listing section 
const app = express();
app.use(express.json())
app.use('/todo', router)


//mongoose connection
mongoose.connect("mongodb://localhost/todo")
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })

// methods handles 
app.get('/', (req, res) => {
    res.send('Hello World!')
})


//default error handler 
app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong from err handler!')
})

// listening section 
app.listen(3037, () => {
    console.log('listening on port 3037!')
})