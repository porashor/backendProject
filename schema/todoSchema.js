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

// static, instance and query methods has to be created separately



// exporting todoSchema 
module.exports = todoSchema;

