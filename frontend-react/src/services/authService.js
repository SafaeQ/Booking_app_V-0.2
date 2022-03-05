import axios from 'axios';
// const URL = 'http://localhost:8000/auth'

export function login(email, password) {
    return axios.post(`http://localhost:8000/auth/login`,{ 
        email: email, password: password
    })
}

// module.exports = login