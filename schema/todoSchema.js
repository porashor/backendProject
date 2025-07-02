//depandancies
const mongoose = require('mongoose');

//schema
const todoSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});



// exporting todoSchema 
module.exports = todoSchema;

