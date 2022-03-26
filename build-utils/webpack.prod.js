const webpack = require('webpack')
const commonPaths = require('./common-paths')

const config = {
	mode: 'production',
	entry: {
		app: [`${commonPaths.appEntry}/index.js`],
	},
	output: {
		filename: 'static/[name].[contenthash].js',
		clean: true,
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
}
module.exports = config
