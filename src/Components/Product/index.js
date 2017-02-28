import React from 'react';

import reaper from '../../Assets/reaper.jpg';
import bhutlah from '../../Assets/bhutlah.jpg';
import tshirt from '../../Assets/tshirt.jpg';

const products = [
	{
		name: 'Caronlina Reaper',
		description: 'hottest pepper',
		img: reaper
	},
	{
		name: 'Chocolate Bhutlah',
		description: 'not sweet',
		img: bhutlah
	},
	{
		name: 'GetPeppers T-shirt',
		description: 'swag',
		img: tshirt
	}
]

export default class Product extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className='product'>
				<h1>{products[this.props.route.id].name}</h1>
				<p>{products[this.props.route.id].description}</p>
				<img src={products[this.props.route.id].img} alt={products[this.props.route.id].name} />
			</div>
		);
	}
}
