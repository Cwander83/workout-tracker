import React, { useState, useContext } from 'react';


import { Store } from '../context/user.js';

const Login = () => {
	const { userState, userActions } = useContext(Store);

	const [username, setUsername] = useState('');

	const usernameHandler = (e) => {
		setUsername(e.target.value);
	};

	const loginHandler = () => {
		userActions.userSearch(username);
	};

	console.log(`User: ${JSON.stringify(userState, null, 2)}`);

	return (
		<div>
			
			<label className="" htmlFor="username">
				enter username
			</label>
			<input
				type="text"
				name="username"
				id="username"
				onChange={usernameHandler}
			/>
			<button onClick={loginHandler}>Search</button>
		</div>
	);
};

export default Login;
