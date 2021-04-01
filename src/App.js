import React from 'react';

// react router
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// components
import Header from './components/Header.js';

// routes
import routes from './routes/routes.js';

// context
import { StoreProvider } from './context/user.js';

function App() {
	return (
		<>
			<StoreProvider>
				<Router>
					<main className="h-screen flex flex-col bg-grayish max-w-screen-sm mx-auto shadow-lg">
						<Header />

						<Switch>{routes}</Switch>
					</main>
				</Router>
			</StoreProvider>
		</>
	);
}

export default App;
