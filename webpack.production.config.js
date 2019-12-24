const merge = require("webpack-merge");
const config = require("./webpack.common.config");
// плагин для извлечения стилей в отдельные файлы
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge.smart(config, {
    mode: "production",
    module: {
        rules: [
            // babel для все JS-файлов, кроме файлов из папки node_modules
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            // стили в production выносим в отдельный файл

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: {} },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-preset-env')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                }),
                            ]
                        }
                    },
                    { loader: "sass-loader", options: {} }
                ]
            },

        ],
    },

    plugins: [
        // тут как раз название файла для собранного css
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
});