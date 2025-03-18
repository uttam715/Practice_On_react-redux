// const path = require('path');

// module.exports = {
//   entry: './index.js', // Your main JS file
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js', // Output file
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/, // Match .js files
//         exclude: /node_modules/, // Don't transpile node_modules
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'], // Use Babel presets
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'], // Handle both JS and JSX files
//   },
//   mode: 'development', // Use 'production' for production builds
// };


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
  ]
};
