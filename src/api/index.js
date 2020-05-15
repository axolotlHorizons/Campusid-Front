import axios from 'axios';

export const allowAuthentication = (email, password) => {
    if (!email || !password) {
        return;
    }
    return axios
        .get(`${process.env.REACT_APP_USER_ROUTE}?email=${email}`)
        .then(response => {
            if (response.data[0] && password === response.data[0].password) {
                return response.data[0].email;
            }
            alert('Informations incorrectes');
            return;
        })
        .catch();
};

export const fetchUser = email => {
    return axios
        .get(`${process.env.REACT_APP_USER_ROUTE}/?email=${email}`)
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data;
        });
};

export const fetchCourses = idClass => {
    return axios
        .get(`${process.env.REACT_APP_COURSES_ROUTE}/${idClass}`)
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data;
        });
};
