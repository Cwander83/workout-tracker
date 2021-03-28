const mongoose = require('mongoose');

const { Schema } = mongoose;

const opts = {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const workout = new Schema(
	{
		name: String,

		set: Number,
		weight: Number,

		reps: Number,
	},
	opts
);

module.exports = mongoose.model('Workout', workout);
