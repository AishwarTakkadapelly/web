const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');

module.exports = (env) => {
  // Get the root path
  const currentPath = path.join(__dirname);

  // Create the fallback path for the .env file
  const basePath = `${currentPath}/.env`;

  // Determine the specific environment file
  const envPath = `${basePath}.${env.ENVIRONMENT}`;

  // Check if the environment-specific file exists, else fallback to .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Load environment variables from the specified .env file
  const fileEnv = dotenv.config({ path: finalPath }).parsed || {};

  // Create an object with the parsed environment variables
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    mode: env.ENVIRONMENT === 'development' ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js', // Use content hash for better cache management
      clean: true, // Clean the output directory before each build
    },
    devtool: env.ENVIRONMENT === 'development' ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.module\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]', // Customize CSS module class names
                },
                importLoaders: 1, // Apply postcss-loader to @imported files
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[contenthash][ext]', // Improved cache-busting
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'], // Support JSX and JSON
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Ensure the path is correct
        minify: env.ENVIRONMENT === 'production' && {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        }, // Minify HTML in production
      }),
      new webpack.DefinePlugin(envKeys), // Inject environment variables into the bundle
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'), // Serve from the dist directory
      },
      compress: true, // Enable gzip compression
      port: 9001, // Custom port
      hot: true, // Enable hot module replacement
      historyApiFallback: true, // Support for HTML5 history API (Single Page Apps)
    },
  };
};
