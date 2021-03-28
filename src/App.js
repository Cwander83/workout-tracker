import React, { useEffect, useState } from 'react';

import Header from './components/Header.js';
import Profile from './components/Profile.js';

function App() {
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch('/api/')
	// 		.then((res) => res.json())
	// 		.then((results) => setData(results));
	// }, []);

	return (
		<div className="h-full w-full bg-grayish">
			<Header />
			<div className="w-full flex flex-row justify-evenly">
				<section className="w-2/5 bg-primary">
					<Profile />
				</section>
				<section className="w-2/5 bg-white">
					<h3>workout</h3>
				</section>
			</div>
		</div>
	);
}

export default App;
