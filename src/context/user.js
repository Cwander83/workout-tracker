import React, { useReducer } from 'react';
import Axios from 'axios';
const initialState = {
	user: null,
	username: '',
};

export const SEARCH_USER = 'SEARCH_USER';
export const SEARCH_EMAIL = 'SEARCH_EMAIL';
export const UPDATE_USER = 'UPDATE_USER';

const reducer = (state, action) => {
	switch (action.type) {
		case SEARCH_USER:
			return {
				...state,
				user: action.payload,
			};
		case SEARCH_EMAIL:
			return {
				...state,
				username: action.payload.username,
			};
		case UPDATE_USER:
			return {
				...state,
				user: action.payload,
			};
	}
	return state;
};

// store default value
export const Store = React.createContext();

// Provider
const StoreProvider = (props) => {
	const [userState, dispatch] = useReducer(reducer, initialState);

	const actions = {
		userSearch: (user) => {
			if (user) {
				Axios.get(`/api/${user}`).then((data) =>
					dispatch({ type: SEARCH_USER, payload: data.data })
				);
			}
		},
		emailSearch: (email) => {
			if (email) {
				Axios.get(`/api/email/${email}`).then((data) =>
					dispatch({ type: SEARCH_EMAIL, payload: data.data })
				);
			}
		},
		updateUser: (id, goal) => {
			Axios.put(`/api/updateUser/${id}`, goal).then((data) =>
				dispatch({ type: UPDATE_USER, payload: data.data })
			);
		},
	};

	return (
		<Store.Provider
			value={{
				userState: userState,
				userActions: actions,
			}}
		>
			{props.children}
		</Store.Provider>
	);
};

export { StoreProvider };
