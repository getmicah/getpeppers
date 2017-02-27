import React from 'react';

import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Hero />
				<Products />
			</div>
		);
	}
}
