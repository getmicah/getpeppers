import React from 'react';

export default class Youtube extends React.Component {
	componentDidMount() {
		this.refs.iframe.addEventListener('load', this.props.onLoad);
	}
	render () {
		return (
			<div className={`hero__video__youtube ${this.props.isReady ? null : 'hidden'}`}>
				<div className='hero__video__youtube__wrapper' >
					<iframe src='https://www.youtube.com/embed/gblpzvNReDE?start=1&&autoplay=1'
					 		ref='iframe'
							frameBorder='0'
							allowFullScreen >
					</iframe>
				</div>
			</div>
		);
	}
}
