import React, { useReducer } from 'react';
import Axios from 'axios';
const initialState = {
	user: null,
};

export const SEARCH_USER = 'SEARCH_USER';
export const UPDATE_USER = 'UPDATE_USER';

const reducer = (state, action) => {
	switch (action.type) {
		case SEARCH_USER:
			return {
				user: action.payload,
			};
		case UPDATE_USER:
			return {
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
        updateUser: (user, data)=> {
            Axios.put(`/api/${user.username}`,data).then(()=> dispatch({type: UPDATE_USER, payload: data.data}))
        }
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
