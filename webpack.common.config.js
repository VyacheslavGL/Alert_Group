// встроенный node-модуль для обработки путей к файлам и папкам
const path = require("path");
// vue плагин для webpack
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// плагин для генерации html-файлов через webpack
const HtmlWebpackPlugin = require("html-webpack-plugin");
// плагин для очистки ненужных файлов сборки
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    // основной файл приложения
    entry: {
        index: "./src/index.js",
    },


    output: {
        // собранный файл
        filename: "[name].js",
        // путь для сохранения сборки: в папке build из текущей папки
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // для всех vue-файлов
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            // для всех scss-файлов
            {
                test: /\.scss$/,
                // применяется несколько лоадеров:
                // vue извлекает стили из секции style
                // sass-loader компилирует scss
                // а уже css-loader обрабатывает получившийся
                // из исходников на scss файл scss
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)?$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                }
            },
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src/'),
            images: path.resolve(__dirname, 'src/assets/'),
            fonts: path.resolve(__dirname, 'src/fonts/'),
        }
    },
    watchOptions: {
        aggregateTimeout: 100,
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        // параметры генерируемого автоматом файла index.html
        new HtmlWebpackPlugin({
            title: "Сборка проекта",
            template: "src/index.html"
        }),
    ]
};
