const webpack = require('webpack')
const commonPaths = require('./common-paths')

const config = {
	mode: 'production',
	entry: {
		app: [`${commonPaths.appEntry}/index.js`],
	},
	output: {
		filename: 'static/[name].[fullhash].js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localsConvention: 'camelCase',
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
					},
				],
			},
		],
	},
}
module.exports = config
