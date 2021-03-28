const express = require('express');
const router = express.Router();

const db = require('../models');

// get
router.route('/').get((req, res) =>
	db.User.find({})
		.populate('workout')
		.then((user) => res.json(user))
);
// post
router.route('/addUser').post((req, res) => {
	let user = new db.User({
		username: req.body.username,
		notes: req.body.notes
	});
	user
		.save()
		.then(() => res.status(200).json({ workout: 'Added workout' }))
		.catch((err) => console.error(err));
});

router.route('/addExercise/:id').post((req, res) => {
	let userId = req.params.id;
	let workout = new db.Workout(req.body);
    console.log(req.body.weight);
	workout
		.save()
		.then((data) =>
			db.User.findByIdAndUpdate(
				userId,
				{ $push: { exercises: data._id } },
				{ new: true }
			)
		)
		.then((result) => res.json(result))
		.catch((err) => console.error(err));
});
//put
// delete

module.exports = router;
