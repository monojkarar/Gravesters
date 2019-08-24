const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },{
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  entry: {
    main: './src/index.js',

  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname),
    filename: "bundled.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src', 'components/'),
      containers: path.resolve(__dirname, 'src', 'containers/'),
      assets: path.resolve(__dirname, 'src', 'assets/'),
      api: path.resolve(__dirname, 'src', 'api/'),
      actions: path.resolve(__dirname, 'src', 'actions/'),
      constants: path.resolve(__dirname, 'src', 'constants/'),
      reducers: path.resolve(__dirname, 'src', 'reducers/'),
      sagas: path.resolve(__dirname, 'src', 'sagas/'),
      store: path.resolve(__dirname, 'src', 'store/'),
      common: path.resolve(__dirname, 'src', 'common/'),
    },
    extensions: ['.js', '.jsx', '.json'],
  }
};
