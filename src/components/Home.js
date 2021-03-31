import React from 'react';
import { Link } from 'react-router-dom';

// conponents
import Login from './Login.js'
import { Container } from '../containers/Container.js';


const Home = () => {
	return (
		<Container>
			<h1>Welcome</h1>
			<h2>to</h2>
			<h3>Workout</h3>
			<h3>Tracker</h3>
			<section>
				<Login />
			</section>
		</Container>
	);
};

export default Home;
