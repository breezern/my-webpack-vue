var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './app/index.js'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, './dev')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
	        	loader: 'vue-loader',
			}				
		]
	},
  	resolve: {
    	alias: {
    		'vue': 'vue/dist/vue.js'
    	}
  	},
  	plugins: [
  		new HtmlWebpackPlugin({
  			title: 'my-webpack-vue',
  			template: 'index.html'
  		})
  	]
}