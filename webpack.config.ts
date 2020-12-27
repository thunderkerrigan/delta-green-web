import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import Dotenv from 'dotenv-webpack'

const devMode = process.env.NODE_ENV !== 'production'

const customHtmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Delta Green',
    inject: false,
    favicon: 'src/images/dg.ico',
    templateContent: ({ htmlWebpackPlugin }): string => `
      <html>
        <head>
        <title>'Delta Green'</title>
          <base href="/">
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          ${htmlWebpackPlugin.tags.headTags}
        </head>
        <body>
          <noscript>Veuillez activer javascript</noscript>
          <div id="root"></div>
          ${htmlWebpackPlugin.tags.bodyTags}
        </body>
      </html>
    `,
})

module.exports = {
    // mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist/public'),
        filename: '[name].js',
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            'png',
            '.css',
            '.scss',
            '.sass',
            '.html',
            '.gif',
            '.jpg',
            '.jpeg',
        ],
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.webpack.json',
                        },
                    },
                ],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader'],
            },
        ],
    },
    plugins: [
        customHtmlWebpackPlugin,
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new Dotenv(),
    ],
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    devServer: {
        allowedHosts: ['develop.lumapps.com'],
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
}
