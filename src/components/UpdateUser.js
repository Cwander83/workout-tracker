import React, { useState, useContext } from 'react';

import { Store } from '../context/user.js';

const UpdateUser = () => {
	const { userState, userActions } = useContext(Store);

	const [goal, setGoal] = useState('');

	const updateHandler = () => {
		console.log('react id: ' + userState.user._id);
		userActions.updateUser(userState.user._id, {"goal": goal});
	};

	return (
		<div>
			<label htmlFor="goal">Enter new goal: </label>
			<input
				onChange={(e) => setGoal(e.target.value)}
				type="text"
				name="goal"
			/>
			<button onClick={updateHandler}>update goal</button>
		</div>
	);
};

export default UpdateUser;
