<div data-reactroot="" id="app-container">
	<header>
		<h1>React Boilerplate</h1>
		<p>An all in one build system for React projects.</p>
	</header>
	<div>
		<h2>Getting Started</h2>
		<p>Clone this repository to your development machine:</p><pre><code>git clone https://github.com/getmicah/react-boilerplate.git</code></pre>
		<p>Go into the new directory and install the dependencies:</p><pre><code>npm install</code></pre>
		<p>After everything is installed you can run the server:</p><pre><code>npm start</code></pre>
		<p>
			Now go to
			<a href="http://localhost:8080">localhost:8080</a>
			where you will now see your React app. Any changes you make to the source will now automatically show up here. If you are unfamiliar with React I highly suggest you check out their
			<a href="https://facebook.github.io/react/docs/hello-world.html">Getting Started</a>
			guide and watch these
			<a href="https://www.youtube.com/watch?v=MhkGQAoc7bc&amp;list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b">videos</a>
			to learn more.
		</p>
	</div>
	<div>
		<h2>Using Sass &amp; CSS</h2>
		<p>
			To include any
			<code>*.scss</code>
			or
			<code>*.css</code>
			style sheets in your project just import the file:

		</p>
		<pre><code>import style from './path/to/style.scss'</code></pre>
		<p>
			Webpack will then automatically include it in your build and if your file is small it will even inline the styles. I have included Bootstrap into the
			<code>index.html</code>
			file

		</p>
	</div>
	<div>
		<h2>Adding Images</h2>
		<p>Just import the directory or url to your image into your React component like this:</p>
		<pre>
import Image from './path/to/logo.png'

export default class Logo {
	render() {
		return(
			&#60;img src={Image} alt="logo"/>;
		);
	}
}
		</pre>
		<p>Like with the stylesheets, Webpack will properly link to the image or, if the image is small enough, it will automatically inline the image into the bundle.</p>
	</div>
</div>
