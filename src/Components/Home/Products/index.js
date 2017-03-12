import React from 'react';
import { Link } from 'react-router';

import products from '../../../Assets/products.js';

import reaper from '../../../Assets/reaper.jpg';
import bhutlah from '../../../Assets/bhutlah.jpg';
import tshirt from '../../../Assets/tshirt.jpg';

export default class Products extends React.Component {
	render() {
		return (
			<section className='products'>
				<div className='products__container'>
					<div className='products__title'>
						<h1>Products</h1>
					</div>
					<div className='products__wrapper'>
						<Link className='products__item' to='/products/carolina-reaper'>
							<img className='products__item__img' src={reaper} alt='reaper' />
							<span className='products__item__name'>Carolina Reaper</span>
							<span className='products__item__price'>Out of stock</span>
						</Link>
						<Link className='products__item' to='/products/chocolate-bhutlah'>
							<img className='products__item__img' src={bhutlah} alt='bhutlah' />
							<span className='products__item__name'>Chocolate Bhutlah</span>
							<span className='products__item__price'>Out of stock</span>
						</Link>
						<Link className='products__item' to='/products/tee'>
							<img className='products__item__img' src={tshirt} alt='tshirt' />
							<span className='products__item__name'>GetPeppers T-shirt</span>
							<span className='products__item__price'>$15</span>
						</Link>
					</div>
				</div>
			</section>
		);
	}
}
