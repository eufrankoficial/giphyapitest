import React, { useRef, useCallback,  useState, useEffect } from 'react';
import { trending } from '../../services/trending';
import { search } from '../../services/search';
import { updateGifList } from '../../services/gifList';
import Gif from '../../components/Gif';
import FavoriteListButton from '../../components/FavoriteListButton';

import './styles.css';

const Home = () => {

	const [gifList, setGifList] = useState([]);
	const [offSetPage, setoffSetPage] = useState(10);
	const [loading, setLoading] = useState(true);
	const [searchText, setSearchText] = useState('Search');
	const [didSearch, setDidSearch] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [term, setTerm] = useState('');


	const observer = useRef(); // undefined like default

	const lastGifEl = useCallback(node => {
		if(loading) return;

		if(observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver(entries => {
			if(entries[0].isIntersecting) {
				loadGifs(offSetPage * 2, getTermToSearch());
			}
		});

		if (node) observer.current.observe(node);
	}, [loading, loadGifs, offSetPage]);

	useEffect(() => {
		loadGifs(offSetPage);
	}, []);

	useEffect(() => {
		setDidSearch(false);
	}, [term]);


	async function loadGifs (nextPage, term = null) {
			setLoading(true);

			let params = {
				limit: 10,
				offset: nextPage
			};

			var result;

			if(term !== null) {
				setDidSearch(true);
				params.q = term;
				result = await search(params);
			} else {
				result = await trending();
			}

			result = updateGifList(result, gifList, didSearch, term)

			setGifList(result);
			setoffSetPage(nextPage);
			setLoading(false);
			setSearchText('Search');
	}

	function onClickSearch () {
		setSearchText('Searching...');
		const term = getTermToSearch();
		loadGifs(offSetPage + 1, term);
		setTerm(term);
	}

	function getTermToSearch () {
		const term = document.getElementById('term').value;
		return term.trim() !== null ? term : null;
	}

	return (
		<>
			<div className="search">
				<input type="text" id="term" placeholder="Search for something"/>
				<button onClick={() => onClickSearch()}>{searchText}</button>
			</div>

			<FavoriteListButton />

			{!hasError ?

				<div className="gif-list">
					{gifList.map((gif, index) =>  {
						if(gifList.length === index + 1) {
							return <article ref={lastGifEl} key={gif.id}>
								<Gif title={gif.title} url={gif.url} image={gif.images.original} gif={gif} detail={false} next={false} />							</article>
						} else {
							return <article key={gif.id}>
								<Gif title={gif.title} url={gif.url} image={gif.images.original} gif={gif} detail={false} next={false} />							</article>
						}
					})}

					{loading ? <div className="loading"><h2>Loading...</h2></div> : null}
				</div>

				:

				<h1>Algo deu errado na requisição, atualize a página e tente novamente</h1>
			}
		</>

	);

}

export default Home;