import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// const MyPlugin  = require('./plugin')
// const { ESBuildPlugin } = require('esbuild-loader')

export default {
  entry: './src/index.tsx',
  mode: 'development',
  // stats: 'errors-only',
  experiments: {
    outputModule: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.tsx', '.js', '.ts', '.less', '.css', '.module.less', '.d.ts']
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   // exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //     },
      //   },
      // },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        exclude: /\.module.less/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                // modifyVars: themes[process.env.theme],
                // modifyVars: themes[process.env.theme],
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      //设置模块化样式，添加hash命名，antd的样式修改只能引入.less文件覆盖
      {
        test: /\.module.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '_[local]_[hash:base64:6]'
              },
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                importLoaders: 2,
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][hash:8][ext]'
        }
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf|ico)$/i,
        // test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf|ico)$/i,
        type: 'asset/resource',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new MyPlugin({
    // 	name: 'myPlugin',
    // }),
    // new ESBuildPlugin(),
    //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      // title: '0Design',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html', //打包后的文件名
      hash: true,
      // cache: false,
      cache: true,
      // favicon: './src/assets/images/favicon.ico',
      minify: {
        // removeComments: true,
        // removeAttributeQuotes: true,
        // collapseWhitespace: true,
        // minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
        // minifyCSS: true // 缩小CSS样式元素和样式属性
      }
    })
  ]
}
