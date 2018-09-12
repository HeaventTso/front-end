const autoprefixer = require("autoprefixer")

//给需要兼容的样式添加浏览器标识前缀 -webkit-, -moz-, -o-, -ms-
module.exports = {
    plugins: [
        autoprefixer()
    ]
}