import React from 'react';
import { Route } from 'react-router';

// pages
import Home from '../components/Home.js';
import Profile from '../components/Profile.js';
import Workout from '../components/Workout.js';

const routes = (
	<>
		<Route exact path="/">
			<Home />
		</Route>
		<Route exact path="/profile">
			<Profile />
		</Route>
		<Route exact path="/workout">
			<Workout />
		</Route>
	</>
);

export default routes;
