import axios from 'axios'

export const createForm = (payload) => {
    return axios.post("http://localhost:8000/create-form", payload);
};

export const getJSONForm = (id) => {
    return axios.get(`http://localhost:8000/get-form/${id}`)
}

export const addFormData = (payload) => {
    return axios.post("http://localhost:8000/add-user-form", payload);
};

export const getUserData = (id) => {
    return axios.get(`http://localhost:8000/get-user-form/${id}`)
}