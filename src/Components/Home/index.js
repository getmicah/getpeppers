import React from 'react';

import Hero from './Hero';
import Products from './Products';

export default class Home extends React.Component {
	render() {
		return (
			<div className='homepage'>
				<Hero />
				<Products />
			</div>
		);
	}
}
