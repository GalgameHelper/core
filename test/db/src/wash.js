/**
 *  清洗和分析数据
 *  通过 db*.json 获取图片
 */

import fs from 'fs'
import path from 'path'
import { isArray, isString } from 'asura-eye'
import { fileURLToPath } from 'url'
import { downloadImg } from './util/downloadImg.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const db = {}
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

    // const record = {
    //   logo: `${name}.webp`,
    //   name: {},
    //   rarity,
    //   weapon,
    //   ascensionMaterials: []
    // }

    if (isString(logoUrl)) {
      downloadImg({
        input: logoUrl,
        output: path.resolve(
          __dirname,
          `../../database/img/characters/${name}.webp`
        )
      })
    }
    if (isArray(ascensionMaterials)) {
      ascensionMaterials.forEach((amItem) => {
        if (!isArray(amItem)) return
        const [name, url] = amItem
        // if (!name || !url) {
        //   console.warn(item)
        // }
        if (!ascensionMaterialsDB[url]) {
          ascensionMaterialsDB[url] = {}
        }
        // if (
        //   !ascensionMaterials[url][lang] ||
        //   ascensionMaterials[url][lang] !== name
        // ) {
        ascensionMaterialsDB[url][lang] = name
        // }

        downloadImg({
          input: url,
          output: path.resolve(
            __dirname,
            `../../database/img/ascension-materials/${name}.webp`
          )
        })
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
  console.timeEnd()
}
run()
