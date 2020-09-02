var express = require('express');
var router = express.Router();

//Importing the model
var Question = require('../models/questionsModel');

//GET: /questions route
router.get('/questions', async (request, response)=>{
	var results = await Question.find({});
	response.send(results);
})

//GET: /questions/:id route
router.get('/questions/:id', async (request, response)=>{
	var id = request.params.id;
	var result = await Question.findById(id);
	response.status(200).send(result);
})

//POST: /questions
router.post('/questions', async (request, response)=>{
	var question = new Question({
		question : request.body.question,
		author : request.body.author,
		createdAt: Date.now()
	});
	await question.save();
	response.status(200).send('Saved');
})

//DELETE: /questions/:id
router.delete('/questions/:id', async (request, response)=>{
	var id = request.params.id;
	var delQn = await Question.findByIdAndRemove(id);
	response.status(200).send('Deleted with name ' +delQn.author);
})

module.exports = router;

