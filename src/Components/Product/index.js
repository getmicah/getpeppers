import React from 'react';
import Blur from 'react-blur';

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
		return (
			<Blur img={products[this.props.route.id].img} blurRadius={10}>
				<div className='product'>
					<div className='product__container'>
						<div className='product__details'>
							<h1>{products[this.props.route.id].name}</h1>
							<p>{products[this.props.route.id].description}</p>
						</div>
					</div>
				</div>
			</Blur>
		);
	}
}
