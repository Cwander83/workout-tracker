import React, { useState } from 'react';

const Profile = () => {
	const [username, setUsername] = useState('');
	const [data, setData] = useState([]);
	

	// onchange handler
	const usernameHandler = (e) => {
		setUsername(e.target.value);
	};
	// submit handler
	const searchHandler = () => {
		fetch(`/api/${username}`)
			.then((res) => res.json())
			.then((results) => setData(results));
	};

	console.log(username);
	return (
		<div className="flex flex-col justify-center text-center">
			<label className="" htmlFor="username">
				enter username to find history
			</label>
			<input
				type="text"
				name="username"
				id="username"
				onChange={usernameHandler}
			/>
			<button onClick={searchHandler}>Search</button>
			<div className="">
				<ul>
					{data.map((user, i) => {
						return (
							<li key={i}>
								<h4>{user.username}</h4>
								<h4>{user.email}</h4>
								<ul>
									{user.exercises.map((workout, j) => {
										return (
											<li className="" key={j}>
												<h4>{workout.name}</h4>
												<h4>{workout.set}</h4>
											</li>
										);
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Profile;
