'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var essaySchema = new Schema({
    title: { type: String },
    content: { type: String },
    time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('essay', essaySchema);