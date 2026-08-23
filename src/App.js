import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header.js';
import routes from './routes/routes.js';

function App() {
	return (
		<Router>
			<div className="min-h-screen w-full bg-grayish">
				<Header />
				<Switch>{routes}</Switch>
			</div>
		</Router>
	);
}

export default App;
