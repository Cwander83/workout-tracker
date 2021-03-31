import Axios from 'axios';

export const actions = {
    userSearch: (user) => {
        if (user) {
            Axios.get(`/api/${user}`)
            .then((data) => dispatch({ type: SEARCH_USER, payload: data.data }));
        }
    },
};