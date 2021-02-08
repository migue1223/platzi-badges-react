const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
	},
	jobTitle: {
		type: String,
	},
	twitter: {
		type: String,
	},
});

module.exports = mongoose.model('Badge', schema);
