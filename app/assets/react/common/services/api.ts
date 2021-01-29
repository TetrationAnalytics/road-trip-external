import axios from 'axios';

export function createClient() {
    return axios.create({
        baseURL: '/api',
    });
}

export default createClient();
