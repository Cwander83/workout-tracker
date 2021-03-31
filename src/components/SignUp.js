import React, { useState, useContext, useEffect } from 'react';

// context
import { Store } from '../context/user.js';

const SignUp = () => {
	const { userState, userActions } = useContext(Store);

	const [email, setEmail] = useState('');
	const [open, setOpen] = useState(false);

	
	return (
		<>
			<button onClick={() => setOpen(!open)}>forgot username?</button>
			{open && (
				<div className="">
					<p>{email}</p>
					<p>userstate: {userState.username}</p>
					<label htmlFor="email">enter email: </label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						name="email"
						type="text"
					/>
					<button onClick={() => userActions.emailSearch(email)}>
						find username
					</button>
				</div>
			)}
		</>
	);
};

export default SignUp;
