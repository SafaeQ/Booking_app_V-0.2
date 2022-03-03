import axios from 'axios';
const URL = 'http://localhost:8000/auth'

function login(email, password) {
    return axios.post(`${URL}/login`,{ 
        email: email, password: password
    })
}

module.exports = login