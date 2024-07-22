import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import * as cheerio from 'cheerio'
import config from './conf.js'
import { downloadImg } from './util.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cb = (e) => e && console.error(e)

const db = {}

const gen = async (type, lang) => {
  const target = await fs.readFileSync(
    path.resolve(__dirname, config.path(type, lang))
  )
  const value = target.toString()
  const $ = cheerio.load(value)
  $('table.genshin_table tbody')
    .find('tr')
    .each((i, ele) => {
      const col = $(ele).find('td')
      const name = col.eq(1).text().replaceAll(/^"|"$/g, '')
      db[type][i].type = type
      db[type][i].name[lang] = name
      db[type][i].rarity = col.eq(2).find('.rsh').text()
      db[type][i].atk = col.eq(3).text()
      db[type][i].sub = col.eq(4).text()
      db[type][i].value = col.eq(5).text()
      db[type][i].affix[lang] = col.eq(6).text()


      const list = []
      const logo = col.eq(0).find('img').attr('src')
      if (lang === 'en_US') {
        col
          .eq(7)
          .find('img')
          .each((i, e) => {
            list.push($(e).attr('alt'))
          })
        db[type][i].ascensionMaterials = list
        // console.log(config.getImgUrl + logo)
        downloadImg({
          input: config.getImgUrl + logo,
          output: path.resolve(__dirname, config.imgOutput(name))
        })
      }
    })
}

const run = async () => {
  for (let i = 0; i < config.type.length; i++) {
    db[config.type[i]] = new Array(100).fill('').map(() => ({
      name: {},
      rarity: 1,
      atk: '',
      sub: '',
      value: '',
      affix: {},
      ascensionMaterials: []
    }))
    for (let j = 0; j < config.langs.length; j++)
      await gen(config.type[i], config.langs[j])
  }
  const newDB = []

  Object.values(db).forEach((item) => {
    item.forEach((_) => {
      if (_.name.en_US || _.name.zh_CN) {
        newDB.push(_)
      }
    })
  })
  console.log(config.output)

  fs.writeFile(
    // path.resolve(__dirname, config.output),
    path.resolve(__dirname, './db.json'),
    JSON.stringify(
      newDB,
      // db.filter((_) => _.name.en_US || _.name.zh_CN),
      null,
      2
    ),
    cb
  )
}

run()
