import axios from 'axios'

const axiosConf = {
	baseURL: 'https://api.giphy.com/v1/gifs/',
	params: {
		api_key: 'SU0uOJ2e5CX9BSo3wwd70wjnj5wahrFh'
	}
};

const api = axios.create(axiosConf);

export default api;


