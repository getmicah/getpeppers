module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		publicPath: '/build',
		path: __dirname + '/build'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
        		loaders: ['style', 'css', 'postcss', 'sass']
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'url-loader'
			}
		]
	},
	devServer: {
		colors: true,
		inline: true,
		historyApiFallback: true,
		port: 8080
	}
}
