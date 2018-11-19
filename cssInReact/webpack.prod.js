const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


let analyze;
console.log()
if (process.env.npm_config_analyze) {
  analyze = !!JSON.parse(process.env.npm_config_analyze);
}

module.exports = {
    mode: 'production',
    entry: path.resolve('./src/index.tsx'),
    output: {
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true,
        // This does not produce a real file. It's just the virtual path that is served
        // by WebpackDevServer in development. This is the JS bundle containing code
        // from all our entry points, and the Webpack runtime.
        filename: 'bundle.min.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx']
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                oneOf: [
                    {
                        test: [
                            /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/
                        ],
                        loader: 'file-loader'
                    }, {
                        test: /\.(ts|tsx)$/,
                        use: [
                            {
                                loader: 'babel-loader',
                            }, 
                            {
                                loader: 'ts-loader',
                                options: {
                                    configFile: path.resolve('./tsconfig.json')
                                }
                            }
                        ]
                    }, 
                    {
                        test: /\.scss$/,
                        use: [
                            {
                                loader: "style-loader",
                                options: {
                                    // singleton: true,
                                }
                            }, {
                                loader: "css-loader",
                                options: {
                                    modules: true
                                }
                            },
                            "sass-loader"
                        ]
                    }
                ]
            }
        ]
    },
    plugins: [
        analyze && new BundleAnalyzerPlugin(),
        new UglifyJsPlugin({
            parallel: true,
            // Enable file caching
            cache: true,
            sourceMap: false,
          }),
          new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('./public/index.html')
        })].filter(n => !!n)
};