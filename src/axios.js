import axios from 'axios';

const instance = axios.create({
    //The API (cloud function) URL
    baseURL: "http://localhost:5001/challenge-9c53a/us-central1/api"
});

export default instance;