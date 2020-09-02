var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
	question: String,
	author: String,
	createdAt: Date
})

module.exports = mongoose.model('question', questionSchema);