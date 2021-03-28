const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
	mode: 'production',
	// optimization: {
	// 	splitChunks: { chunks: 'all' },
	// },
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
			}
		}
	},
	devtool: 'source-map',
});
