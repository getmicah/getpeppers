import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Header from './Components/Header';
import Home from './Components/Home';
import Product from './Components/Product';
import NotFound from './Components/NotFound';
import Styles from './Style/index.scss';

class App extends React.Component {
	render() {
		return (
			<div id='app-container'>
				<Header />
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path='/' component={Home} />
			<Route path='/products/carolina-reaper' component={Product} id={0} />
			<Route path='/products/chocolate-bhutlah' component={Product} id={1} />
			<Route path='/products/tshirt' component={Product} id={2} />
			<Route path='*' component={NotFound} />
  		</Route>
	</Router>
), document.getElementById('app'));
