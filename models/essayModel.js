const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const essaySchema = new Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('essay', essaySchema);



