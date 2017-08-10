import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	handleClick() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<header className='header'>
				<div className='header__container'>
					<Link to='/' className='header__logo' onClick={this.handleClick.bind(this)}>
						<span>Get</span>
						<span>Peppers</span>
					</Link>
					<div className='header__promo'>
						<a className='disabled-link' disabled="true">Join our newsletter</a>
					</div>
				</div>
			</header>
		);
	}
}