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
			<div className=" mx-5 px-5 py-5 flex flex-col justify-center items-center tracking-wide border-2 border-primary">
				<h1 className="text-lg">Welcome</h1>
				<h2>to</h2>
				<h3>Workout Tracker</h3>
			</div>
			<section>{/*
					<Login />
					 <SignUp />
				<UpdateUser /> */}</section>
		</Container>
	);
};

export default Home;
