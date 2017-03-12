import React from 'react';
import { Link } from 'react-router';

export default class OtherProduct extends React.Component {
	render() {
		return (
			<Link className='product__others__item' to={`/products/${this.props.url}`}>
				<img src={this.props.img} alt={this.props.name} />
				<span><b>{this.props.name}</b></span>
			</Link>
		);
	}
}
