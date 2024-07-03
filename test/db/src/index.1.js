import path from 'path'
import * as cheerio from 'cheerio'
import fs from 'fs'
import { fileURLToPath } from 'url'
const cb = (e) => e && console.error(e)

const __dirname = path.dirname(fileURLToPath(import.meta.url))

fs.readFile(
  path.resolve(__dirname, '../../database/db.html'),
  // path.resolve(__dirname, '../../database/db.html'),
  (error, target) => {

    if (error) return console.error(error)

    const value = target.toString()
    const $ = cheerio.load(value)
    const data = []

    $('.entry-content.wp-block-post-content table.genshin_table tbody')
      .find('tr')
      .each((i, ele) => {
        const col = $(ele).find('td')
        const col5 = col.eq(5).find('a div')
        // console.log(item.length, col5.length)


        const record = [
          [
            col.eq(0).find('a div img').attr('src'),
            col.eq(0).find('a div img').attr('alt')
          ],
          ...new Array(col.length - 2).fill('').map((_, i)=>{
            return col.eq(i + 1).text()
          }),
          new Array(col5.length).fill('').map((_, i) => {
            return [
              col5.eq(i).find('img').attr('alt'),
              col5.eq(i).find('img').attr('src')
            ]
          })
        ]
        data.push(record)
      })

    fs.writeFile(
      path.resolve(__dirname, '../../database/db.json'),
      JSON.stringify(
        {
          data
        },
        null,
        2
      ),
      cb
    )
  }
)
