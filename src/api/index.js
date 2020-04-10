import axios from 'axios';

export function getUser(id) {
    return axios
        .get(`${process.env.REACT_APP_STUDENT_ROUTE}/${id}`)
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data;
        });
}
