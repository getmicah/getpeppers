import React from 'react';

export default class Youtube extends React.Component {
	render () {
		return (
			<div className='hero__video__wrapper'>
				<iframe src="https://www.youtube.com/embed/gblpzvNReDE?start=1&&autoplay=1" frameBorder="0" allowFullScreen ></iframe>
			</div>
		);
	}
}
