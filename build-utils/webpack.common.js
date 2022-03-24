const webpack = require('webpack')
const commonPaths = require('./common-paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	entry: {
		vendor: './src/index.js',
	},
	output: {
		path: commonPaths.outputPath,
		publicPath: '/',
	},
	resolve: {
		extensions: ['.jsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
				vendor: {
					chunks: 'initial',
					test: 'vendor',
					name: 'vendor',
					enforce: true,
				},
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			// favicon: 'public/favicon.ico',
		}),
	],
}
module.exports = config
