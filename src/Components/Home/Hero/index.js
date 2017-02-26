import React from 'react';

export default class Hero extends React.Component {
	render() {
		return (
			<section className='hero'>
				<div className='hero__container'>
					<div className='hero__video'>
						<div className='hero__video__wrapper'>
							<iframe src="https://www.youtube.com/embed/gblpzvNReDE" frameBorder="0" allowFullScreen></iframe>
						</div>
					</div>
					<div className='hero__text'>
						<h1>Reasonably Priced,<br/>Unreasonably spiced.</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Phasellus nec ullamcorper odio. Cras at purus massa.
							Donec erat orci, mollis sit amet iaculis malesuada, faucibus et neque.
							Suspendisse ultricies congue est quis dictum.
							Integer id nulla in lacus blandit elementum.
						</p>
					</div>
				</div>
			</section>
		);
	}
}
