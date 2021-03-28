const mongoose = require('mongoose');

const { Schema } = mongoose;

const opts = {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const workout = new Schema(
	{
		name: { type: String, required: [true, 'Enter exercise name.'] },
		set: { type: Number, trim: true },
		weight: { type: Number, trim: true },
		reps: { type: Number, trim: true },
	},
	opts
);

module.exports = mongoose.model('Workout', workout);
