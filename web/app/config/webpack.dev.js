import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpack.base.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const devServer = {
  port: '6900',
  // client: { logging: "error" },//浏览器中设置日志级别
  compress: true, //是否启用 gzip 压缩
  open: false,
  hot: true,
  // https: true,
  historyApiFallback: true,
  watchFiles: ['src/**/*', 'public/**/*'],
  proxy: {
    '/vr/': 'http://localhost:13000/'
  }
}

webpackConfig.output = {
  path: path.resolve(__dirname, '../dist'),
  filename: 'bundle.[fullhash].js',
  publicPath: '/' //通常是CDN地址
}

const compiler = Webpack(webpackConfig)
const server = new WebpackDevServer(devServer, compiler)

const runServer = async () => {
  await server.start()
}

runServer()
