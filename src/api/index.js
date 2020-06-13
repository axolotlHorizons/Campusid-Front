import axios from 'axios';

export const allowAuthentication = (email, password) => {
    if (!email || !password) {
        return;
    }
    return axios
        .get(`${process.env.REACT_APP_STUDENT_ROUTE}?email=${email}`)
        .then(response => {
            if (response.data[0] && password === response.data[0].password) {
                return response.data[0].email;
            }
            alert('Informations incorrectes');
            return;
        })
        .catch(err => console.log(err));
};

export const fetchUser = email => {
    return axios
        .get(`${process.env.REACT_APP_STUDENT_ROUTE}/?email=${email}`)
        .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data;
        });
};

export const fetchCourses = idClass => {
    return axios.get(`${process.env.REACT_APP_COURSES_ROUTE}/${idClass}`);
};

export function getInternship(id = null) {
    let path = process.env.REACT_APP_INTERNSHIP_ROUTE;
    if (id != null) path += `/${id}`;
    return axios.get(path).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response.data;
    });
}

export const uploadAvatar = (newAvatar, userId) => {
    try {
        return axios.patch(`${process.env.REACT_APP_STUDENT_ROUTE}/${userId}`, {
            avatar: newAvatar,
        });
        console.log('success');
    } catch (e) {
        console.log('erf');
        return e.response.status;
    }
};

export function getGrades(id = null) {
    let path = process.env.REACT_APP_GRADES_ROUTE;
    if (id != null) path += `/${id}`;
    return axios.get(path).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response.data;
    });
}

export function getCourses(id = null) {
    let path = process.env.REACT_APP_EXTERNAL_COURSES_ROUTE;
    if (id != null) path += `/${id}`;
    return axios.get(path).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return response.data;
    });
}
