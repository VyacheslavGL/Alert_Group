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
    // entry: "./src/index.js",
    entry: {
        index: "./src/index.js",
        // html: "./src/index.html",
    },


    output: {
        // собранный файл

        // filename: "index.min.js",
        filename: "[name].js",
        // путь для сохранения сборки: в папке build из текущей папки
        path: path.resolve(__dirname, "build"),
    },
    /*build: {
        // env: require('./prod.env'),
        // index: path.resolve(__dirname, '../dist/index.html'),
        // assetsRoot: path.resolve(__dirname, '../dist'),
        // assetsSubDirectory: '',
        assetsPublicPath: '/src/',
        // assetsPublicPath: '/build/',
        // productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        // productionGzip: false,
        // productionGzipExtensions: ['js', 'css']
    },*/
    module: {
        rules: [
            // для все JS-файлов, кроме файлов из папки node_modules
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            //https://webpack.js.org/configuration/
            //https://www.npmjs.com/package/htmllint-loader
            //для обработки php кода в html
            /* {
                 test: /(htm|html|xhtml|hbs|handlebars|php|ejs)$/,
                 loader: 'htmllint-loader',
                 exclude: /(node_modules)/,
             },*/
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
            /*{
                test: /\.scss$/,
                use: [
                    {
                        loader: 'vue-style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browserslist:['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [
                                helpers.root('src', 'styles', 'global'),
                            ],
                            sourceMap: true
                        }
                    }
                ],
            },*/
            /*{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: {} },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                }),
                            ]
                        }
                    },
                    { loader: "sass-loader", options: {} }
                ]
            },*/
            /*{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },*/
            {
                test: /\.(gif|png|jpg|jpeg|svg)?$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]',
                },
            },
            // https://webpack.js.org/guides/asset-management/#loading-fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                /*use: [
                    'file-loader',
                ],*/
                use: {
                    loader: "file-loader",
                    options: {
                        // name: `${PATHS.assets}/fonts/[name].[ext]`,
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
    // devtool: "source-map",
    watchOptions: {
        aggregateTimeout: 100,
    },
    plugins: [
        // без этого плагина не работает обработка .vue-файлов
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        // параметры генерируемого автоматом файла index.html
        new HtmlWebpackPlugin({
            title: "Сборка проекта",
            template: "src/index.html"
        }),
    ]
};
