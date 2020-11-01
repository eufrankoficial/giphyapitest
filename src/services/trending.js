import api from './api';

export const trending = async (params) => {

	const {data: {data}} = await api.get('trending', {
		params: params
	}).catch(error => {
		return error;
	});

	return data;
}