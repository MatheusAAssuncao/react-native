import axios from 'axios';

// https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=07b20c75b79253d30219
const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7',
});

export default api;