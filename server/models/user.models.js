const mongoose = require('mongoose');

const { Schema } = mongoose;

const opts = {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const User = new Schema(
	{
		username: String,

		notes: String,
		exercises: [{ type: Schema.Types.ObjectId, ref: 'Workout' }],
	},
	opts
);

module.exports = mongoose.model('User', User);
