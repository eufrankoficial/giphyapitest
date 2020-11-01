export const updateGifList = (result, prevList, stateDidSearch, term = null) => {
	if(term || stateDidSearch === true)
		return result;

	if(prevList.length == 0) {
		prevList = result;
	} else {
		prevList.concat(result);
	}

	return prevList;
}

/*setGifList(prevList => {
			return [... new Set([...prevList, ...result.map(g => g)])];
		});*/