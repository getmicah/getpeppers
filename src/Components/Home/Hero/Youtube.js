import React from 'react';

export default class Youtube extends React.Component {
	componentDidMount() {
		this.refs.iframe.addEventListener('load', this.props.onLoad);
	}
	render () {
		return (
			<div className={`hero__video__youtube ${this.props.isReady ? null : 'hidden'}`}>
				<div className='hero__video__youtube__wrapper'>
					<iframe ref='iframe'
							src="https://www.youtube.com/embed/gblpzvNReDE?rel=0&&autoplay=1" 
							width="560" 
							height="315" 
							frameBorder="0" 
							allowFullscreen>
					</iframe>
				</div>
			</div>
		);
	}
}
