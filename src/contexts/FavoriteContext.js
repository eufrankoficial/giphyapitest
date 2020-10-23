import React, { useState, createContext } from 'react';

export const FavoriteContext = createContext();


export const FavoriteProvider = props => {
	const [favorites, setFavorites] = useState([]);
	
	

	return (
		<FavoriteContext.Provider value={[favorites, setFavorites]}>
			{ props.children }
		</FavoriteContext.Provider>
	);
}