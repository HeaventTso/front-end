const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")
const {VueLoaderPlugin} = require("vue-loader")
const webpack = require("webpack")

const isDev = process.env.NODE_ENV === "development"

const config = {
    target : "web",
    mode : process.env.NODE_ENV,
    entry : path.join(__dirname, "src/index.js"),
    output : {
        filename : "bundle.js",
        path : path.join(__dirname, "dist")
    },
    module : {
        rules : [
            { test : /\.vue$/,
              loader:  'vue-loader',
              options: {
                loaders: {
                    /*// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                    // the "scss" and "sass" values for the lang attribute to the right configs here.
                    // other preprocessors should work out of the box, no loader config like this necessary.
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    'css':'vue-style-loader!css-lotnpm、ader',
                    'style':'vue-style-loader',
                    'less':'vue-style-loader!css-loader!less-loader',
                    'stylus':'vue-style-loader!css-loader!stylus-loader',*/
                 }
                // other vue-loader options go here
              }
            },
            //需要配置.babelrc文件 并且执行npm i babel-preset-env babel-plugin-transform-vue-jsx
            { test : /\.jsx$/, loader: "babel-loader"},
            {
                test : /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //动态css编写工具 类似的工具有less、sass工具
                test : /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap : true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin({
            title: 'notepad index'
        }),
        new VueLoaderPlugin()
    ]
}

if(isDev){
    config.devtool = '#cheap-module-eval-source-map'
    //webpack 2版本后才有devServer的配置项 是一个小型Express服务器
    config.devServer = {
        port: 80,
        host: 'localhost', //0.0.0.0 可通过内网ip访问，方便手机调试
        overlay: {
            errors: true //是否显示网页错误
        },
        /*
        contentBase: "/dist",
        historyApiFallback: true,
        historyFallback: { //将webpack没有做映射的地址都映射到入口html文件中去

        },*/
        open: true, //自动打开浏览器
        hot: true, //相当于热部署 哪个vue组件修改了只更新vue组件渲染的部分而不是整个页面都刷新
        inline: true //实时刷新
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),  //配置了hot:true 需要将这个插件加上
        new webpack.NoEmitOnErrorsPlugin()  //减少不需要展示信息类型的信息
    )
}
module.exports = config