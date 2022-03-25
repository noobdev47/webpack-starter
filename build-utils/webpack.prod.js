const webpack = require('webpack')
const commonPaths = require('./common-paths')

const config = {
	mode: 'production',
	entry: {
		app: [`${commonPaths.appEntry}/index.js`],
	},
	output: {
		filename: 'static/[name].[fullhash].js',
		clean: true,
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
		],
	},
}
module.exports = config
