import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getSessions } from '../utils/sessions.js';

const History = () => {
	const location = useLocation();
	const localSessions = useMemo(() => getSessions(), [location.key]);
	const [username, setUsername] = useState('');
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	const [searched, setSearched] = useState(false);

	const usernameHandler = (e) => {
		setUsername(e.target.value);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		const query = username.trim();
		if (!query) {
			return;
		}

		setError('');
		setSearched(true);

		fetch(`/api/${encodeURIComponent(query)}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Unable to load history');
				}
				return res.json();
			})
			.then((results) => setData(Array.isArray(results) ? results : []))
			.catch((err) => {
				console.error(err);
				setData([]);
				setError('Could not load history for that username.');
			});
	};

	return (
		<section className="w-full max-w-3xl mx-auto my-8 px-4">
			<div className="bg-white p-6">
				<h2 className="text-2xl text-primary mb-2">History</h2>
				<p className="text-primary mb-6">
					Review saved sessions and look up a username.
				</p>

				<div className="mb-8">
					<h3 className="text-lg text-primary mb-3">Saved sessions</h3>
					{localSessions.length === 0 ? (
						<p className="text-primary">
							No sessions yet.{' '}
							<Link to="/" className="text-secondary hover:underline">
								Start a new session
							</Link>
							.
						</p>
					) : (
						<ul>
							{localSessions.map((session) => (
								<li
									key={session.id}
									className="border border-primary p-4 mb-3"
								>
									<h4 className="text-primary mb-2">{session.date}</h4>
									<ul>
										{session.exercises.map((exercise, index) => (
											<li key={`${session.id}-${index}`} className="text-primary">
												{exercise.name} — {exercise.set} sets, {exercise.reps}{' '}
												reps
												{exercise.weight ? `, ${exercise.weight} lb` : ''}
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					)}
				</div>

				<form onSubmit={searchHandler} className="flex flex-col">
					<label className="text-primary mb-2" htmlFor="username">
						Enter username to find history
					</label>
					<input
						className="border border-primary px-3 py-2 mb-3 text-black bg-white"
						type="text"
						name="username"
						id="username"
						value={username}
						onChange={usernameHandler}
					/>
					<button
						className="bg-secondary text-white px-4 py-2 hover:bg-blueish"
						type="submit"
					>
						Search
					</button>
				</form>

				{error && <p className="text-primary mt-4">{error}</p>}

				<div className="mt-6">
					{searched && data.length === 0 && !error && (
						<p className="text-primary">No history found for that username.</p>
					)}
					<ul>
						{data.map((user, i) => (
							<li key={user._id || i} className="border border-primary p-4 mb-3">
								<h4 className="text-primary">{user.username}</h4>
								{user.email && <p className="text-primary">{user.email}</p>}
								<ul className="mt-2">
									{(user.exercises || []).map((workout, j) => (
										<li key={workout._id || j} className="text-primary">
											{workout.name}
											{workout.set ? ` — ${workout.set} sets` : ''}
											{workout.reps ? `, ${workout.reps} reps` : ''}
											{workout.weight ? `, ${workout.weight} lb` : ''}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default History;
