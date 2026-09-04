import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const linkClass = 'text-white px-3 py-2 hover:text-blueish';
const activeClass = 'underline';

const Header = () => {
	return (
		<header className="bg-primary w-full">
			<div className="flex flex-col sm:flex-row items-center justify-between px-6 py-6">
				<h1 className="text-white text-2xl mb-4 sm:mb-0">
					<Link to="/" className="text-white hover:text-blueish">
						Workout Tracker
					</Link>
				</h1>
				<nav aria-label="Main">
					<ul className="flex flex-row items-center">
						<li>
							<NavLink
								to="/history"
								className={linkClass}
								activeClassName={activeClass}
							>
								History
							</NavLink>
						</li>
						<li>
							<NavLink
								exact
								to="/"
								className={linkClass}
								activeClassName={activeClass}
							>
								New Session
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
