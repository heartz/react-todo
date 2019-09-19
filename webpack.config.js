var path = require('path');
var webpack = require('webpack');
    
module.exports = {
    entry: ['./src/static/js/main.jsx', 'webpack/hot/dev-server'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        //inline: true,
        publicPath: '/build/',
        contentBase: './public/'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-react',"@babel/preset-env"]
                    }
                  }
            }
          ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
