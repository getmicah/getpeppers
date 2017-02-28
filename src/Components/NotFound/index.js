import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
	render() {
		return (
			<div className='notfound'>
				<h1>Page not found.</h1>
				<Link to='/'>How 'bout you buy some peppers?</Link>
			</div>
		);
	}
}
