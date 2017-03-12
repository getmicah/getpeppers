import React from 'react';

import MainProduct from './MainProduct';
import OtherProducts from './OtherProducts';

export default class Product extends React.Component {
	render() {
		return (
			<div>
				<MainProduct id={this.props.route.id} />
				<OtherProducts id={this.props.route.id} />
			</div>
		);
	}
}
