import request from 'request'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// 爬取数据

const url = 'https://gensh.honeyhunterworld.com/fam_chars/?lang=CHS'
const cb = (error) => {
  if (error) {
    console.error(error)
  }
}
request(url, (err, res) => {
  if (err) {
    console.log(err.code)
  } else {
    fs.writeFile(path.resolve(__dirname, './database/db.html'), res.body, cb)
  }
})
