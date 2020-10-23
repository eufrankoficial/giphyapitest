import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';



const BackToHome = () => {

	return (
		<div className="back">
			<Link to="/">
				<button>Back to Home</button>
			</Link>
		</div>
	)
}


export default BackToHome;