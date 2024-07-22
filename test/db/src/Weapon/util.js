import fs from 'fs'
import request from 'request'

/*
 * 判断文件是否存在的函数
 * @path_way, 文件路径
 */
export function isFileExisted(url) {
  return new Promise((resolve) => {
    fs.access(url, (err) => {
      if (err) {
        resolve(false) //"不存在"
      } else {
        resolve(true) //"存在"
      }
    })
  })
}

/**
 *  下载图片到指定目录
 */
export const downloadImg = async ({ input, output }) => {
  const isExisted = await isFileExisted(output)
  if (isExisted) return
  const process = fs.createWriteStream(output)
  request(input).pipe(process)

  process.on('finish', () => {
    // console.log(`下载成功~`)
    process.close()
  })
  process.on('error', (err) => {
    console.log(`下载失败~`, new Error(err))
    console.log('input url: ', input)
  })
}
