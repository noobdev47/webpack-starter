const webpack = require('webpack')
const commonPaths = require('./common-paths')

const port = process.env.PORT || 3000

const config = {
	mode: 'development',
	entry: {
		app: `${commonPaths.appEntry}/index.js`,
	},
	output: {
		filename: '[name].[hash].js',
	},
	devtool: 'inline-source-map',
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
						options: {
							modules: true,
							localsConvention: 'camelCase',
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	devServer: {
		hot: true,
		port: port,
		open: true,
		host: 'localhost',
		historyApiFallback: true,
	},
}

module.exports = config
