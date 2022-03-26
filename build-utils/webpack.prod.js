const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const commonPaths = require('./common-paths')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PATHS = {
	src: path.join(__dirname, 'src'),
}

const config = {
	mode: 'production',
	entry: {
		app: [`${commonPaths.appEntry}/index.js`],
	},
	output: {
		filename: 'static/[name].[contenthash].js',
		clean: true,
	},
	// devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new PurgecssPlugin({
			paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
		}),
		new BundleAnalyzerPlugin(),
	],
}
module.exports = config
