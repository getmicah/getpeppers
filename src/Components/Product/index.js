import React from 'react';

import products from '../../Assets/products.js';
import OtherProduct from './OtherProduct';

export default class Product extends React.Component {
	render() {
		const otherProducts = [];
		for (let i = 0; i < products.length; i++) {
			if (i != this.props.route.id) {
				otherProducts.push(
					<OtherProduct
						key={i}
						img={products[i].img}
						name={products[i].name}
						price={products[i].price}
						url={products[i].url}
					/>
				);
			}
		}
		return (
			<div className='product'>
				<div className='product__container'>
					<div className='product__main'>
						<div className='product__header'>
							<div className='product__header__image'>
								<img
									src={products[this.props.route.id].img}
									alt={products[this.props.route.id].name}
								/>
							</div>
							<div className='product__header__details'>
								<h1>{products[this.props.route.id].name}</h1>
								<p>{products[this.props.route.id].description}</p>
							</div>
						</div>
						<div className='product__cards'>
							<div className='product__cards__specs'>

							</div>
						</div>
					</div>
					<div className='product__others'>
						<div className='product__others__header'>
							<h1>Other Products</h1>
						</div>
						{otherProducts}
					</div>
				</div>
			</div>
		);
	}
}
