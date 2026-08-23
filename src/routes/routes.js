import React from 'react';
import { Route } from 'react-router-dom';

import History from '../components/History.js';
import NewSession from '../components/NewSession.js';

const routes = (
	<>
		<Route exact path="/">
			<NewSession />
		</Route>
		<Route exact path="/history">
			<History />
		</Route>
	</>
);

export default routes;
