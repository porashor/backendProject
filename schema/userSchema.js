//depandancies
const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
});

// static, instance and query methods has to be created separately



// exporting todoSchema 
module.exports = userSchema;

