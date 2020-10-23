import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Gifs/Detail';
import FavoriteList from '../pages/Gifs/FavoriteList';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/gif/:id" component={Detail} />
			<Route path="/favorite-list" component={FavoriteList} />
		</Switch>

	</BrowserRouter>

);


export default Routes;