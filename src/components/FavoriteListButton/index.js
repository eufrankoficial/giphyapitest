import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const FavoriteListButton = () => {

	return (
		<div className="favorite-list-button">
			<Link to="/favorite-list">
				<button>My Favorite List</button>
			</Link>
		</div>
	)
}


export default FavoriteListButton;