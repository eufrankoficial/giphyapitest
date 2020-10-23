import React from 'react';
import { Link } from 'react-router-dom';

import Actions from '../../components/Actions';

import './styles.css';

const Gif = (props) => {

	let img;
	if(props.image !== undefined) {
		img = <img src={props.image.url} width={props.image.width} height={props.image.width} alt={props.gif.title} />;
	} else {
		img = 'Loading...';
	}

	let link;
	if(props.next.data !== undefined) {
		link = <Link to={`/gif/${props.next.data.id}`}><button>Next</button></Link>
	}	

	return (
		<div className="gif-info">
			<h1>{props.title}</h1>
			
			<div className="nextButton">
				{link}
			</div>
			
			{

				!props.detail ? 

				<Link to={`/gif/${props.gif.id}`}>
					<div className="image">
						{img}
					</div>
				</Link> :

				<div className="image">
					{img}
				</div>
			
			}
			
			
			{
				props.url !== undefined ? 
					<div className="info">
					<Actions copied={false} gif={props.gif} url={props.image.url} detail={props.detail}/>
				</div> : null
			}

			
		</div>
	)
}


export default Gif;