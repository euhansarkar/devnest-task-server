const mongoose = require(`mongoose`);

const taskSchema = new mongoose.Schema({
  taskname: {
    type: String,
    required: true,
    min: 10,
    max: 50,
    unique: true,
  },
  taskcategory: {
    type: String,
    required: true,
    min: 10,
    max: 50,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    min: 20,
  },
  starttime: {
    type: String,
    required: true,
  },
  endtime: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    min: 8,
  },
  
});

module.exports = mongoose.model(`Tasks`, taskSchema);
