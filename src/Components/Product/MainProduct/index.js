import React from 'react';

import products from '../../../Assets/products.js';

export default class MainProduct extends React.Component {
	render() {
		const info = [];
		for (let i = 0; i < products[this.props.id].info.length; i++) {
			info.push(
				<li key={i}>{products[this.props.id].info[i]}</li>
			);
		}
		return (
			<div className='main-product'>
				<div className='main-product__container'>
					<div className='main-product__item'>
						<div className='main-product__item__image'>
							<img
								src={products[this.props.id].img}
								alt={products[this.props.id].name}
							/>
						</div>
						<div className='main-product__item__details'>
							<h1>{products[this.props.id].name}</h1>
							<span>${products[this.props.id].price}</span>
							{products[this.props.id].inStock ?
								<button name='purchase'>Buy now</button>
								:
								<button name='purchase' disabled>Out of stock</button>
							}
						</div>
					</div>
					<div className='main-product__info'>
						<h1>Product Information:</h1>
						<ul>{info}</ul>
					</div>
				</div>
			</div>
		);
	}
}
