import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import * as cheerio from 'cheerio'
import config from './conf.js'
import request from 'request'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cb = (e) => e && console.error(e)
const db = []

/*
 * 判断文件是否存在的函数
 * @path_way, 文件路径
 */
export function isFileExisted(url) {
  return new Promise((resolve, reject) => {
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
  })
}

const getLang = (conf) => {
  if (conf.lang) return conf.lang
  if (conf.input && conf.input.indexOf('en_US') > -1) return 'en_US'
  if (conf.output && conf.output.indexOf('en_US') > -1) return 'en_US'

  return 'zh_CN'
}

const gen = async (conf) => {
  const lang = getLang(conf)
  const target = await fs.readFileSync(path.resolve(__dirname, conf.input))
  const value = target.toString()
  const $ = cheerio.load(value)
  $('table.genshin_table tbody')
    .find('tr')
    .each((i, ele) => {
      const col = $(ele).find('td')

      const logo = col.eq(0).find('img').attr('src')
      const name = col.eq(1).text()
      const desc =
        conf.input.indexOf('zh_CN') > -1
          ? col
              .eq(2)
              .text()
              .replace('2-Piece', '2件套')
              .replace('4-Piece', '4件套')
          : col.eq(2).text()

      if (lang === 'en_US')
        downloadImg({
          input: config.getImgUrl + logo,
          output: path.resolve(
            __dirname,
            `../../../database/img/artifact-set/${name}.webp`
          )
        })
      if (db[i]) {
        db[i][0][lang] = name
        db[i][1][lang] = desc
      } else {
        const record = [
          {
            [lang]: name
          },
          {
            [lang]: desc
          }
        ]

        db.push(record)
      }
    })

}

const run = async () => {
  for (let i = 0; i < config.list.length; i++) {
    await gen(config.list[i])
  }
  fs.writeFile(
    path.resolve(__dirname, config.output),
    JSON.stringify(db, null, 2),
    cb
  )
}

run()
