/**
 *  清洗和分析数据
 *  通过 db*.json 获取图片
 */

import fs from 'fs'
import path from 'path'
import { isArray, isString } from 'asura-eye'
import { fileURLToPath } from 'url'
import { downloadImg } from './util/downloadImg.js'
import cfg from './config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const charactersDB = {}
const ascensionMaterialsDB = {}

const washData = async (config) => {
  const data = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, config.input)).toString()
  )
  // console.log(data)
  if (!isArray(data)) return

  const { lang = 'en_US' } = config
  data.forEach((item, i) => {
    if (!isArray(item)) return
    const [logoUrl, name, rarity, weapon, element, ascensionMaterials] = item

    if (!charactersDB[logoUrl]) {
      charactersDB[logoUrl] = {
        name: {},
        rarity,
        weapon,
        element,
        ascensionMaterials: []
      }
    }
    charactersDB[logoUrl].name[lang] = name

    // const record = {
    //   logo: `${name}.webp`,
    //   name: {},
    //   rarity,
    //   weapon,
    //   ascensionMaterials: []
    // }

    if (isString(logoUrl) && lang === 'en_US') {
      downloadImg({
        input: logoUrl,
        output: path.resolve(
          __dirname,
          `../../database/img/characters/${name}.webp`
        )
      })
    }
    if (isArray(ascensionMaterials)) {
      if (lang === 'en_US') {
        charactersDB[logoUrl].ascensionMaterials = ascensionMaterials.map(
          ([name]) => name
        )
      }

      ascensionMaterials.forEach((amItem, i) => {
        if (!isArray(amItem)) return
        let [amName, url] = amItem
        if (!amName || !url) {
          if (cfg.adjustment[`${name}.ascensionMaterials.${i}`]) {
            amName = cfg.adjustment[`${name}.ascensionMaterials.${i}`]
          } else console.warn(item)
        }
        if (!ascensionMaterialsDB[url]) {
          ascensionMaterialsDB[url] = {}
        }
        // if (
        //   !ascensionMaterials[url][lang] ||
        //   ascensionMaterials[url][lang] !== name
        // ) {
        ascensionMaterialsDB[url][lang] = amName
        // }
        if (lang === 'en_US') {
          downloadImg({
            input: url,
            output: path.resolve(
              __dirname,
              `../../database/img/ascension-materials/${amName}.webp`
            )
          })
        }
      })
    }
  })
}

const run = async () => {
  console.time()
  await washData({
    lang: 'en_US',
    input: '../../database/db-en_US.json'
  })
  await washData({
    lang: 'zh_CN',
    input: '../../database/db-zh_CN.json'
  })
  await fs.writeFile(
    path.resolve(__dirname, '../../database/ascensionMaterials.json'),
    JSON.stringify(Object.values(ascensionMaterialsDB), null, 1),
    (e) => e && console.error(e)
  )
  await fs.writeFile(
    path.resolve(__dirname, '../../database/characters.json'),
    JSON.stringify(Object.values(charactersDB), null, 1),
    (e) => e && console.error(e)
  )
  console.timeEnd()
}
run()
