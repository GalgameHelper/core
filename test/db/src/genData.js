/**
 * 生成数据 db-*.json
 */
import path from 'path'
import * as cheerio from 'cheerio'
import fs from 'fs'
import { fileURLToPath } from 'url'
const cb = (e) => e && console.error(e)

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const gen = async (config) => {
  const data = []

  fs.readFile(path.resolve(__dirname, config.input), (error, target) => {
    if (error) return console.error(error)

    const value = target.toString()
    const $ = cheerio.load(value)

    $('table.genshin_table tbody')
      .find('tr')
      .each((i, ele) => {
        const col = $(ele).find('td')
        const col5 = col.eq(5).find('a div')

        data.push([
          col.eq(0).find('a div img').attr('src'),
          ...new Array(col.length - 2).fill('').map((_, i) => {
            return col.eq(i + 1).text()
          }),
          new Array(col5.length).fill('').map((_, i) => {
            return [
              col5.eq(i).find('img').attr('alt'),
              col5.eq(i).find('img').attr('src')
            ]
          })
        ])
      })
    fs.writeFile(
      path.resolve(__dirname, config.output),
      JSON.stringify(data, null, 2),
      cb
    )
    // fs.writeFile(path.resolve(__dirname, config.output),JSON.stringify(data), cb)
  })
}

gen({
  input: '../../database/zh_CN.html',
  output: '../../database/db-zh_CN.json'
})
gen({
  input: '../../database/en_US.html',
  output: '../../database/db-en_US.json'
})
