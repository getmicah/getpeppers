import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	render() {
		return (
			<header className='header'>
				<div className='header__container'>
					<Link to='/' className='header__logo'>
						<span>Get</span>
						<span>Peppers</span>
					</Link>
					<div className='header__promo'>
						<Link to='/'>Join our newsletter</Link>
					</div>
				</div>
			</header>
		);
	}
}

// social icons: https://github.com/larsenwork/web.svg.min
