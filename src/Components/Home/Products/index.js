import React from 'react';
import { Link } from 'react-router';

import reaper from './reaper.jpg';
import bhutlah from './bhutlah.jpg';
import tshirt from './tshirt.jpg';

export default class Products extends React.Component {
	render() {
		return (
			<section className='products'>
				<div className='products__container'>
					<div className='products__title'>
						<h1>Products</h1>
					</div>
					<div className='products__wrapper'>
						<Link className='products__item' to='/'>
							<img className='products__item__img' src={reaper} alt='reaper'></img>
							<span className='products__item__name'>Carolina Reaper</span>
							<span className='products__item__price'>Out of stock</span>
						</Link>
						<Link className='products__item' to='/'>
							<img className='products__item__img' src={bhutlah} alt='bhutlah'></img>
							<span className='products__item__name'>Chocolate Bhutlah</span>
							<span className='products__item__price'>Out of stock</span>
						</Link>
						<Link className='products__item' to='/'>
							<img className='products__item__img' src={tshirt} alt='tshirt'></img>
							<span className='products__item__name'>GetPeppers T-shirt</span>
							<span className='products__item__price'>$15</span>
						</Link>
					</div>
				</div>
			</section>
		);
	}
}
