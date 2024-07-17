import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import conf from './conf.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cb = (e) => e && console.error(e)

const db = []
const wash = async (conf) => {
  console.log(conf)
}

const run = async () => {
  for (let i = 0; i < conf.list.length; i++) {
    await wash(conf.list[i])
  }
}

run()
