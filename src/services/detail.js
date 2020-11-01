import api from './api';


export const detail = async (gifId) => {
	const { data: gif } = await api.get(`/${gifId}`)

	return gif;
}

export const random = async (gif) => {
	const { data: { data } } = await api.get('/random', {
		params: { tag: gif.data.title }
	});

	return data;
}