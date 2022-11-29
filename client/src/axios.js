import axios from 'axios';

export default axios.create({
    // baseURL: 'https://agritech-web.herokuapp.com/api/v1',
    baseURL: 'http://localhost:4000/api',
});