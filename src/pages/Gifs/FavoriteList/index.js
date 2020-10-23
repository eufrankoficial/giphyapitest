import React, { useContext } from 'react';

import Gif from '../../../components/Gif';
import BackToHome from '../../../components/BackToHome';

import { FavoriteContext } from '../../../contexts/FavoriteContext';

const FavoriteList = () => {

	const [favorites] = useContext(FavoriteContext);

	return (
		<>
			<BackToHome />			
			{
				favorites.length > 0 ? <div className="gif-list">
					{favorites.map(gif => (
						<article key={gif.id}>							
							<Gif title={gif.title} url={gif.url} image={gif.images.original} gif={gif} detail={false} next={false} />
						</article>
					))}
				</div> : <h1>Você não favoritou um gif</h1>
			}
			
		</>

	);

}


export default FavoriteList;