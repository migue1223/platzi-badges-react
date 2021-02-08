const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {config} = require ('./config/index');

const bookController = require('./controllers/books');

mongoose
	.connect(
		config.mongo,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
	)
	.then(() => {
		const app = express();
		app.use(express.json());
		app.use(cors());
		app.use(bodyParser.json());

		app.get('/all_badges', bookController.findBadges);
		app.post('/all_badge/add', bookController.createBadge);
		app.get('/all_badge/:id', bookController.findBadge);
		app.patch('/all_badge/update/:id', bookController.updateBadge);
		app.delete('/all_badge/delete/:id', bookController.deleteBadge);

		app.listen(config.port, () => {
			console.log('Conecction successfully');
			console.log(`Server has started at port ${config.port}`);
		});
	})
	.catch(() => {
		console.log('Database connection failed!');
	});
