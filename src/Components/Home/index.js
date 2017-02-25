import React from 'react';

import Navbar from './Navbar';
import Header from './Header';
import Peppers from './Peppers';
import Merch from './Merch';
import Footer from './Footer';

export default class Home extends React.Component {
	render() {
		return (
			<div id="app-container">
				<Navbar />
				<Header />
				<Peppers />
				<Merch />
				<Footer />
			</div>
		);
	}
}
