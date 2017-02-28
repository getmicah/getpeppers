import React from 'react';

export default class Product extends React.Component {
	render() {
		return (
			<div className='product'>
				<h1>Product</h1>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}
