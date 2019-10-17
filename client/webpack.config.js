const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    //react entry file path
    entry: './src/index.js',
    //location where the compiled scripts will be set
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                //compile all js + jsx files
                test: /\.(js|jsx)$/,
                //exclude node modules
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            }


        ]
    },
   /*  optimization: {
        minimizer: [
          new UglifyJsPlugin()
        ]
      }, */
    resolve: {
        extensions: ['*', '.js', 'jsx']
    },
    devServer: {
        proxy: {
            '/api/scrape': "http://localhost:3000"
        }
    },
    plugins: [
        //builds the index.html file after bundling
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 7,
            }
        })

    ]


}