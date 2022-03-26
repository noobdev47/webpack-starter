const webpack = require('webpack')
const commonPaths = require('./common-paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
				use: 'babel-loader',
			},
		],
	},
	optimization: {
		moduleIds: 'deterministic',
		// runtimeChunks: 'single',
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
				vendor: {
					chunks: 'all',
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
				},
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			// favicon: 'public/favicon.ico',
		}),
		new BundleAnalyzerPlugin(),
	],
}
module.exports = config
