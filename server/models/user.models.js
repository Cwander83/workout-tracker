const mongoose = require('mongoose');

const { Schema } = mongoose;

const opts = {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const User = new Schema(
	{
		username: {
			type: String,
			trim: true,
			unique: [true, 'That username is taken.'],
			required: [true, 'Enter a username.'],
		},
        email: {
            type: String,
			trim: true,
			unique: [true, 'That email is taken.'],
			required: [true, 'Required, used for username recovery.'],
        },

		notes: { type: String },
		exercises: [{ type: Schema.Types.ObjectId, ref: 'Workout' }],
	},
	opts
);

module.exports = mongoose.model('User', User);
