const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: "./src/index.js", // 入口
  // 开发阶段不需要配置output，只有在生产阶段才需要配置
  output:{
    path:path.join(__dirname,"dist"),
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,// 排除第三方包
        use: {
          loader: "babel-loader",
          // options: { // 可以和 .babelrc 二选一
          //   presets: ["@babel/preset-react"]
          // }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{ loader: 'url-loader' }]
      }
    ]
  },
  plugins: [
    // 将来生成开发阶段的index.html 和 生产阶段的 index.html 以 public/index.html 为模板
    new HtmlWebpackPlugin({template: './public/index.html'})
  ],
  mode:'production', // 生产阶段配置为 production
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  }
}
