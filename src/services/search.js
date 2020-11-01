import api from './api';

export const search = async (params) => {
	const { data: { data } } = await api.get('search', {
		params: params
	}).catch(error => {
		return error;
	});

	return data;
}