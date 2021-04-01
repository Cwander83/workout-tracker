import React from 'react';

// react router
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="bg-blueish flex">
			<h1 className="text-white py-10 text-2xl text-center">Workout Tracker</h1>
			{/* <nav className=" flex flex-col justify-center text-center">
				<Link to="/">Home</Link>

				<Link to="/profile">Profile</Link>

				<Link to="/workout">Workout Tracker</Link>
			</nav> */}
		</header>
	);
};

export default Header;
