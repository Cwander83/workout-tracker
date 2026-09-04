const STORAGE_KEY = 'workout-tracker-sessions';

export function getSessions() {
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		return stored ? JSON.parse(stored) : [];
	} catch (err) {
		console.error(err);
		return [];
	}
}

export function saveSession(session) {
	const sessions = getSessions();
	sessions.unshift(session);
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
	return sessions;
}
