import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:4000/api',
    baseURL: 'https://app-eventsbrews-backend-5b2f934bf492.herokuapp.com',
    withCredentials: true
})

export default instance