import React from 'react';

import Header from '../Header';
import Hero from './Hero';
import Peppers from './Peppers';
import Merch from './Merch';
import Footer from './Footer';

export default class Home extends React.Component {
	render() {
		return (
			<div id="app-container">
				<Header />
				<Hero />
				<Peppers />
			</div>
		);
	}
}
