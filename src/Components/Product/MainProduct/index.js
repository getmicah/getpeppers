import React from 'react';

import products from '../../../Assets/products.js';

export default class MainProduct extends React.Component {
	render() {
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
							<p>{products[this.props.id].description}</p>
						</div>
					</div>
					<div className='main-product__cards'>
						<div className='main-product__cards__specs'>
							cards
						</div>
					</div>
				</div>
			</div>
		);
	}
}
