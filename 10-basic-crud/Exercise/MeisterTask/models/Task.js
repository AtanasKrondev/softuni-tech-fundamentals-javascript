const mongoose = require('mongoose');

let taskSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
})

let Task = mongoose.model('Task', taskSchema);

module.exports = Task;