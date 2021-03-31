const express = require('express');
const router = express.Router();

const db = require('../models');

// get
// ** Get Call whole database
router.route('/').get((req, res) =>
	db.User.find()
		.populate({
			path: 'exercises',
		})
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((err) => {
			console.error(err);
			res.send(err.errors);
		})
);

// ** Get Call Search by username
router.route('/:username').get((req, res) =>
	db.User.find({
		username: req.params.username,
	})
		.populate({
			path: 'exercises',
		})
		.then((user) => res.status(200).json(user))
		.catch((err) => {
			console.error(err);
			res.send(err.errors);
		})
);
// ** Get Call Search by username
router.route('/email/:email').get((req, res) =>
	db.User.find({
		email: req.params.email,
	})

		.then((user) => res.status(200).json(user))
		.catch((err) => {
			console.error(err);
			res.send(err.errors);
		})
);

// post

// ** add user
router.route('/addUser').post((req, res) => {
	let user = new db.User(req.body);
	user
		.save()
		.then(() => res.status(200).json())
		.catch((err) => {
			console.error(err);
			res.send(err.errors);
		});
});

router.route('/addExercise/:id').post((req, res) => {
	let userId = req.params.id;
	let workout = new db.Workout(req.body);

	workout
		.save()
		.then((data) =>
			db.User.findByIdAndUpdate(
				userId,
				{ $push: { exercises: data._id } },
				{ new: true }
			)
		)
		.then((result) => res.status(200).json(result))
		.catch((err) => {
			console.error(err);
			res.send(err.errors);
		});
});

//put

// ** Update user goal
router.route('/updateUser/:id').put((req, res) => {
	console.log('***** id: ' + req.params.id);
	db.User.findByIdAndUpdate(req.params.id, req.body, {new: true})
		.then((result) => res.status(200).json(result))
		.then((result) => console.log(result))
		.catch((err) => {
			console.error(err);
			res.send(err.errors);
		});
});

// delete

// ** Remove Workout
router.route('/workout/:id').delete((req, res) => {
	db.Workout.findByIdAndRemove(req.params.id)
		.then((result) => res.status(200).json())
		.catch((err) => {
			console.error(err);
			res.send(err.errors);
		});
});
// ** Remove User
router.route('/workout/:username').delete((req, res) => {
	db.Workout.findOneAndRemove({ username: req.params.username })
		.then((result) => res.status(200).json())
		.catch((err) => {
			console.error(err);
			res.send(err.errors);
		});
});

module.exports = router;
