import React from 'react';

import Thumbnail from './Thumbnail';
import Youtube from './Youtube';

export default class Hero extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			loadVideo: false,
			showVideo: false
		};
	}
	handleClick() {
		this.setState({
			isLoading: true,
			loadVideo: true
		});
	}
	onLoad() {
		this.setState({
			isLoading: false,
			showVideo: true
		});
	}
	render() {
		return (
			<section className='hero'>
				<div className='hero__container'>
					<div className='hero__video'>
						{this.state.showVideo || <Thumbnail handleClick={this.handleClick.bind(this)} isLoading={this.state.isLoading} />}
						{this.state.loadVideo && <Youtube onLoad={this.onLoad.bind(this)} isReady={this.state.showVideo} />}
					</div>
					<div className='hero__text'>
						<h1>Reasonably Priced,<br/>Unreasonably spiced.</h1>
						<p>
							What started with a simple goal of growing the hottest peppers in the world has pivoted into a multi-facet operation centering around the one thing that matters: <b>community</b>.
							We promise only the highest quality, which is why we grow our peppers in the world renowned soil of eastern Washington where they are then cared for extensively until harvest season.
						</p>
					</div>
				</div>
			</section>
		);
	}
}
