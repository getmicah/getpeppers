import React from 'react';

import Header from '../Header';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';

export default class Home extends React.Component {
	render() {
		return (
			<div id="app-container">
				<Header />
				<Hero />
				<Products />
			</div>
		);
	}
}
