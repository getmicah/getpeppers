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
							<span>{products[this.props.id].price}</span>
							{products[this.props.id].price ?
								<button name='purchase'>Buy now</button>
								:
								<button name='purchase' disabled>Buy now</button>
							}
						</div>
					</div>
					<div className='main-product__specs'>

					</div>
				</div>
			</div>
		);
	}
}
