import React from 'react';
import { Link } from 'react-router';

import products from '../../../Assets/products.js';

export default class Products extends React.Component {
	render() {
		const items = [];
		for (let i = 0; i < products.length; i++) {
			items.push(
				<Link key={i} className='products__item' to={`/products/${products[i].url}`}>
					<img src={products[i].img} alt={products[i].name} />
					<span>{products[i].name}</span>
					{products[i].price ?
						<span>${products[i].price}</span>
						:
						<span>Out of stock</span>
					}
				</Link>
			);
		}
		return (
			<section className='products'>
				<div className='products__container'>
					<div className='products__title'>
						<h1>Products</h1>
					</div>
					<div className='products__wrapper'>
						{items}
					</div>
				</div>
			</section>
		);
	}
}
