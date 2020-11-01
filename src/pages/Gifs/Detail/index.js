import React, { Component } from 'react';
import { detail, random } from '../../../services/detail';
import Actions from '../../../components/Actions';
import BackToHome from '../../../components/BackToHome';
import FavoriteListButton from '../../../components/FavoriteListButton';
import './styles.css';

export default class Detail extends Component {
	state = {
		gif: {},
		image: {},
		copied: false,
		favorites: [],
		related: {},
		loading: true,
		hasError: false
	}

	async componentDidMount () {
		const { id } = this.props.match.params;
		this.getGif(id);
	}

	getGif = async (gifId) => {

		try {
			const gif = await detail(gifId);
			const related = await random(gif);

			this.setState({
				gif: gif.data,
				image: gif.data.images,
				loading: false,
				related: related,
			});
		} catch(error) {
			this.setState({hasError: true})
		}
	}

	nextGif = (id) => {
		this.setState({loading: true});
		this.getGif(id);
	}

	copyUrlToClipBoard = (url) => {
		navigator.clipboard.writeText(url)
    	this.setState({ copied: true });
	}

	favoriteGif = (gif) => {
		const { images: { original }, url, id } = gif;
		const favorite = {
			id: id,
			url: url,
			image: original.url
		};

		const favorites = this.state.favorites;
		favorites.push({favorite});

		this.setState({
			favorites: favorites
		});
	}

	render() {
		const { gif, image, related, loading, hasError } = this.state;

		let img;
		if(!loading && image.original !== undefined) {
			img = <img src={image.original.url} width={gif.images.width} height={gif.images.width} alt={gif.title} />;
		} else {
			img = 'Loading...';
		}

		let link;
		if(gif !== undefined) {
			link = <button onClick={() => this.nextGif(related.id)}>Next</button>
		}

		return (
			<>
				{

					!hasError ?
					<div>
						<BackToHome />
						<FavoriteListButton />


						<div className="gif-info">
							<h1>{gif.title}</h1>
							<div className="nextButton">
								{link}
							</div>

							<div className="image">
								{img}
							</div>

							<div className="info">
								<Actions copied={false} gif={gif} url={image.url} detail={true} url={gif.url}/>
							</div>
						</div>
					</div>

					: <h1>Não foi possível processar a requisição, tente novamente</h1>
				}
			</>
		)
	}
}
