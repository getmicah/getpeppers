module.exports = {
	plugins: [
		require('postcss-smart-import'),
		require('precss'),
		require('autoprefixer')({
			browsers: [
				'last 2 versions',
				'iOS >= 8',
				'Safari >= 8'
			]
		})
	]
}
