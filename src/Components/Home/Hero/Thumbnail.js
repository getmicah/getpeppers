import React from 'react';

import thumbnail from '../../../Assets/thumbnail.jpg';

export default class Thumbnail extends React.Component {
	handleClick() {
		this.props.handleClick();
	}
	render() {
		return (
			<div className={`hero__video__thumbnail ${this.props.isLoading ? 'loading' : null}`} onClick={this.handleClick.bind(this)}>
				<img src={thumbnail} alt='youtube-thumbnail'/>
				<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
					<path d='M0 0h24v24H0z' fill='none'/>
					<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
				</svg>
			</div>
		);
	}
}
