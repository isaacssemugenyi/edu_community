//Requiring dependencies
var express = require('express');
var mongoose = require('mongoose');


//Instantiating the application
var app = express();

//connecting to db
mongoose.connect('mongodb://localhost:27017/Edu_Community', {
	useNewUrlParser: true,
	useUnifiedTopology: true ,
	useFindAndModify: false
})

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Configurations
var QuestionsRoutes = require('./routes/Questions');

//Routes
app.use('/', QuestionsRoutes)

app.listen(4000, ()=>{
	console.log('Server started on port 4000')
})
