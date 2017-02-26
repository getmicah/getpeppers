import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Home from './Components/Home';
import NotFound from './Components/Error/NotFound';
import Styles from './Style/index.scss';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/">
			<IndexRoute component={Home} />
			<Route path="*" component={NotFound} />
  		</Route>
	</Router>
), document.getElementById('app'));
