const mongoose = require('mongoose');
const Shema = mongoose.Schema;


const TaskSchema = new Shema({
    author: String,
    description: String,
    status:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks', TaskSchema);