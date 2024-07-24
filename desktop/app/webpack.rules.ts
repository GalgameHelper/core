import type { ModuleOptions } from 'webpack'

export const rules: Required<ModuleOptions>['rules'] = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader'
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules'
      }
    }
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  },
  // {
  //   test: /\.tsx?$/,
  //   use: [
  //     {
  //       loader: 'esbuild-loader',
  //       options: {
  //         loader: 'tsx'
  //       }
  //     }
  //   ],
  //   exclude: /node_modules/
  // },
  // {
  //   test: /\.css$/,
  //   exclude: /(node_modules|\.webpack)/,
  //   use: ['style-loader', 'css-loader']
  // },
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
            javascriptEnabled: true
          }
        }
      }
    ]
  },
  //设置模块化样式，添加hash命名，antd的样式修改只能引入.less文件覆盖
  // {
  //   test: /\.module.less$/,
  //   exclude: /node_modules/,
  //   use: [
  //     'style-loader',
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         modules: {
  //           localIdentName: '_[local]_[hash:base64:6]'
  //         },
  //         importLoaders: 2
  //       }
  //     },
  //     {
  //       loader: 'postcss-loader'
  //     },
  //     {
  //       loader: 'less-loader',
  //       options: {
  //         lessOptions: {
  //           importLoaders: 2,
  //           javascriptEnabled: true
  //         }
  //       }
  //     }
  //   ]
  // },
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

  // {
  //   test: /\.less$/,
  //   exclude: /\.module.less/,
  //   use: [
  //     {
  //       loader: 'style-loader'
  //     },
  //     {
  //       loader: 'css-loader' // translates CSS into CommonJS
  //     },
  //     {
  //       loader: 'less-loader', // compiles Less to CSS
  //       options: {
  //         lessOptions: {
  //           // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
  //           // modifyVars: themes[process.env.theme],
  //           // modifyVars: themes[process.env.theme],
  //           javascriptEnabled: true
  //         }
  //       }
  //     }
  //   ]
  // },
  //设置模块化样式，添加hash命名，antd的样式修改只能引入.less文件覆盖
  // {
  //   test: /\.module.less$/,
  //   exclude: /node_modules/,
  //   use: [
  //     'style-loader',
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         modules: {
  //           localIdentName: '_[local]_[hash:base64:6]'
  //         },
  //         importLoaders: 2
  //       }
  //     },
  //     {
  //       loader: 'postcss-loader'
  //     },
  //     {
  //       loader: 'less-loader',
  //       options: {
  //         lessOptions: {
  //           importLoaders: 2,
  //           javascriptEnabled: true
  //         }
  //       }
  //     }
  //   ]
  // },
  // {
  //   test: /\.(jpe?g|png|gif|)$/i,
  //   type: 'asset/resource',
  //   generator: {
  //     filename: 'img/[name][ext]'
  //   }
  // },
  // {
  //   test: /\.(svg|woff|woff2|eot|ttf|otf|ico)$/i,
  //   // test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf|ico)$/i,
  //   type: 'asset/resource',
  //   exclude: /node_modules/
  // }
]
