import axios from 'axios';

export function getUser(id) {
    return axios
        .get(`${process.env.REACT_APP_STUDENT_ROUTE}/${id}`)
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data;
        });
}

export function getInternship(id = null) {
    let path = process.env.REACT_APP_INTERNSHIP_ROUTE;
    if (id != null)
        path += `/${id}`;
    return axios
        .get(path)
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data;
        });
}

export function getGrades(id = null) {
    let path = process.env.REACT_APP_GRADES_ROUTE;
    if (id != null)
        path += `/${id}`;
    return axios
        .get(path)
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data;
        });
}

export function getCourses(id = null) {
    let path = process.env.REACT_APP_EXTERNAL_COURSES_ROUTE;
    if (id != null)
        path += `/${id}`;
    return axios
        .get(path)
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data;
        });
}
