const Badge = require('../models/Book');

exports.findBadges = async (req, res) => {
	const books = await Badge.find();
	res.send({ data: books });
};

exports.createBadge = async (req, res) => {
	const book = new Badge(req.body);
	await book.save();
	res.send({ data: book });
};

exports.findBadge = async (req, res) => {
	try {
		const book = await Badge.findById(req.params.id);
		res.send({ data: book });
	} catch {
		res.status(404).send({ error: 'Book is not found!' });
	}
};

exports.updateBadge = async (req, res) => {
	try {
		const book = await Badge.findById(req.params.id);
		Object.assign(book, req.body);
		book.save();
		res.send({ data: book });
	} catch {
		res.status(404).send({ error: 'Book is not found!' });
	}
};

exports.deleteBadge = async (req, res) => {
	try {
		const book = await Badge.findById(req.params.id);
		await book.remove();
		res.send({ data: true });
	} catch {
		res.status(404).send({ error: 'Book is not found!' });
	}
};
