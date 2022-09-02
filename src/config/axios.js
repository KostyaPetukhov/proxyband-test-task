import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	responseType: 'json',
});

export default apiClient;
