import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import products from './Assets/products';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';
import NotFound from './Components/NotFound';
import Styles from './Style/index.scss';

class App extends React.Component {
	render() {
		return (
			<div id='app-container'>
				<Header />
				<main>{this.props.children}</main>
				<Footer />
			</div>
		);
	}
}

const items = products.map((item, i) => {
	return <Route
		path={`/products/${item.url}`}
		component={Product}
		id={i}
		key={i}
	/>
});
ReactDOM.render((
	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
		<Route component={App}>
			<Route path='/' component={Home} />
			{items}
			<Route path='*' component={NotFound} />
  		</Route>
	</Router>
), document.getElementById('app'));
