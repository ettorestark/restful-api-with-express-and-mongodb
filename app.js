const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middleware
app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('', (req, res) => {
	res.send('We are on home');
});

//Connect to datanase
mongoose.connect(process.env.DB_CONNECTION, () => {
	console.log('Connected to database!');
});

app.listen(3000);