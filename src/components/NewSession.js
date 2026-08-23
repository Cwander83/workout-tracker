import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { saveSession } from '../utils/sessions.js';

const emptyExercise = {
	name: '',
	set: '',
	reps: '',
	weight: '',
};

const today = () => new Date().toISOString().slice(0, 10);

const NewSession = () => {
	const history = useHistory();
	const [date, setDate] = useState(today);
	const [exercise, setExercise] = useState(emptyExercise);
	const [exercises, setExercises] = useState([]);
	const [message, setMessage] = useState('');

	const updateField = (field) => (e) => {
		setExercise((current) => ({
			...current,
			[field]: e.target.value,
		}));
	};

	const addExercise = (e) => {
		e.preventDefault();
		if (!exercise.name.trim()) {
			setMessage('Enter an exercise name.');
			return;
		}

		setExercises((current) => [
			...current,
			{
				name: exercise.name.trim(),
				set: exercise.set ? Number(exercise.set) : '',
				reps: exercise.reps ? Number(exercise.reps) : '',
				weight: exercise.weight ? Number(exercise.weight) : '',
			},
		]);
		setExercise(emptyExercise);
		setMessage('');
	};

	const saveWorkout = () => {
		if (exercises.length === 0) {
			setMessage('Add at least one exercise before saving.');
			return;
		}

		saveSession({
			id: String(Date.now()),
			date,
			exercises,
		});
		history.push('/history');
	};

	return (
		<section className="w-full max-w-3xl mx-auto my-8 px-4">
			<div className="bg-white p-6">
				<h2 className="text-2xl text-primary mb-2">New Session</h2>
				<p className="text-primary mb-6">
					Log today&apos;s exercises, sets, reps, and weight.
				</p>

				<label className="text-primary mb-2 block" htmlFor="session-date">
					Session date
				</label>
				<input
					id="session-date"
					className="border border-primary px-3 py-2 mb-6 text-black bg-white"
					type="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>

				<form onSubmit={addExercise} className="mb-6">
					<div className="flex flex-col">
						<label className="text-primary mb-2" htmlFor="exercise-name">
							Exercise
						</label>
						<input
							id="exercise-name"
							className="border border-primary px-3 py-2 mb-3 text-black bg-white"
							type="text"
							value={exercise.name}
							onChange={updateField('name')}
							placeholder="Bench press"
						/>
					</div>
					<div className="flex flex-col sm:flex-row">
						<div className="flex flex-col sm:mr-3 mb-3 sm:mb-0 sm:w-1/3">
							<label className="text-primary mb-2" htmlFor="exercise-sets">
								Sets
							</label>
							<input
								id="exercise-sets"
								className="border border-primary px-3 py-2 text-black bg-white"
								type="number"
								min="0"
								value={exercise.set}
								onChange={updateField('set')}
							/>
						</div>
						<div className="flex flex-col sm:mr-3 mb-3 sm:mb-0 sm:w-1/3">
							<label className="text-primary mb-2" htmlFor="exercise-reps">
								Reps
							</label>
							<input
								id="exercise-reps"
								className="border border-primary px-3 py-2 text-black bg-white"
								type="number"
								min="0"
								value={exercise.reps}
								onChange={updateField('reps')}
							/>
						</div>
						<div className="flex flex-col sm:w-1/3">
							<label className="text-primary mb-2" htmlFor="exercise-weight">
								Weight
							</label>
							<input
								id="exercise-weight"
								className="border border-primary px-3 py-2 text-black bg-white"
								type="number"
								min="0"
								value={exercise.weight}
								onChange={updateField('weight')}
							/>
						</div>
					</div>
					<button
						className="bg-secondary text-white px-4 py-2 mt-4 hover:bg-blueish"
						type="submit"
					>
						Add exercise
					</button>
				</form>

				{exercises.length > 0 && (
					<ul className="mb-6">
						{exercises.map((item, index) => (
							<li key={`${item.name}-${index}`} className="text-primary mb-1">
								{item.name} — {item.set || 0} sets, {item.reps || 0} reps
								{item.weight ? `, ${item.weight} lb` : ''}
							</li>
						))}
					</ul>
				)}

				{message && <p className="text-primary mb-4">{message}</p>}

				<button
					className="bg-primary text-white px-4 py-2 hover:bg-blueish"
					type="button"
					onClick={saveWorkout}
				>
					Save session
				</button>
			</div>
		</section>
	);
};

export default NewSession;
