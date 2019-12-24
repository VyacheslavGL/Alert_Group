const merge = require("webpack-merge");
const config = require("./webpack.common.config");

module.exports = merge.smart(config, {
    // обязательно указываем dev-режим, по умолчанию webpack собирает в production
    mode: "development",
    // включаем source-maps
    devtool: "inline-source-map",

    // активируем рабочий сервер на 9000 порту, включаем hot reload
    devServer: {
        port: 9000,
        hot: true,
        historyApiFallback:  {
            rewrites: [
                { from: /.*/, to: '/index.html' }
            ]
        }
    }
});