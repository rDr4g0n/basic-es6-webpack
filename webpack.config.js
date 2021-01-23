const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
			{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};
