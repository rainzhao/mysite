const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const essaySchema = new Schema({
    title: {type: String},
    content: {type: String}
});

module.exports = mongoose.model('essay', essaySchema);



