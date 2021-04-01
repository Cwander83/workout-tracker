import React from 'react';

// react router
import { Link } from 'react-router-dom';

// components
import Login from './Login.js';
import { Container } from '../containers/Container.js';
import SignUp from './SignUp.js';
import UpdateUser from './UpdateUser.js';

const Home = () => {
	return (
		<Container>
			<div className=" my-5 mx-10 py-5 flex flex-col justify-center items-center tracking-wide border-2 border-primary shadow-md rounded-sm font-medium">
				<h1 className="text-lg ">Welcome</h1>
				<h2>to</h2>
				<h3 className="text-lg">Workout Tracker</h3>
				<div className=" mt-2">
					Sign Up / Login
				</div>
				<div className="flex flex-col justify-center">
					<h4 className="text-lg mt-6 mb-3">How to use Workout Tracker</h4>
					<ul className=" break-words">
						<li>1. Sign Up, all you need is email</li>
						<li>2. Create a username</li>
						<li>3. Set a goal</li>
						<li>4. Start saving your workouts</li>
						<li>5. Hit your Goal!</li>
					</ul>
				</div>
			</div>
			<section>{/*
					<Login />
					 <SignUp />
				<UpdateUser /> */}</section>
		</Container>
	);
};

export default Home;
