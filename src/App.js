import React, { useContext } from 'react';
import Routes  from './routes';

import Header from './components/Header';

import { FavoriteProvider, FavoriteContext } from './contexts/FavoriteContext';

import './styles.css';
 
const App = () => {
    
    const contextFav = useContext(FavoriteContext);
    console.log(contextFav);
    return (
    	<div className="App">
			<FavoriteProvider>
				<Header />

				<Routes />
			</FavoriteProvider>    
	      
	    </div>
	);

}

export default App;
