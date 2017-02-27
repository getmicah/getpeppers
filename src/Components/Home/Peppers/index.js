import React from 'react';
import { Link } from 'react-router';

export default class Peppers extends React.Component {
	render() {
		return (
			<section className='peppers'>
				<div className='peppers__container'>
					<div className='peppers__title'>
						<h1>Peppers</h1>
					</div>
					<div className='peppers__wrapper'>
						<Link className='peppers__item' to='/'>
							<span className='peppers__item__name'>Carolina Reaper</span>
							<span className='peppers__item__price'>Sold out</span>
						</Link>
						<Link className='peppers__item' to='/'>
							<span className='peppers__item__name'>Chocolate Bhutlah</span>
							<span className='peppers__item__price'>Sold out</span>
						</Link>
						<Link className='peppers__item' to='/'>
							<span className='peppers__item__name'>Ghost Pepper</span>
							<span className='peppers__item__price'>Sold out</span>
						</Link>
					</div>
				</div>
			</section>
		);
	}
}
