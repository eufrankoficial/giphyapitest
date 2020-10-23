import React, { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faStar } from '@fortawesome/free-solid-svg-icons'


import { FavoriteContext } from '../../contexts/FavoriteContext';

import './styles.css';

const Button = (props) => {

	const [favorites, setFavorites] = useContext(FavoriteContext);
	const [textButtonFav, setTextButtonFav] = useState('Favorite');

	const copyUrlToClipBoard = () => {
		navigator.clipboard.writeText(props.url)

		alert('Link copied: ' + props.url);
	}

	function addToFavorites (gif) {
		
		const found = favorites.some(favorite => favorite.id === gif.id);
		if(!found) {
			favorites.push(gif);
			setFavorites(favorites);
			setTextButtonFav('Favorited');
		} else {
			alert('Already on favorite list ');
		}
	}

	return (

		<div className="actions">
			
			<button onClick={copyUrlToClipBoard.bind(props.url)}>
				Copy url <FontAwesomeIcon icon={faClone} />
			</button>

			<button onClick={() => addToFavorites(props.gif)}>
				{ textButtonFav } <FontAwesomeIcon icon={faStar} />
			</button>
			
		</div>	


	)

}


export default Button;