const request = require('request')
const cheerio = require('cheerio')
const dayjs = require('dayjs')
const fs = require('fs')
// console.log(fs, dayjs)

const time = dayjs().format("YYYY-MM-DD HH:mm:ss")


// request('https://www.jianshu.com/u/5b23cf5114a1', (err, res) => {
const url = 'https://gensh.honeyhunterworld.com/fam_chars/?lang=CHS'
request(url, (err, res) => {
  if (err) {
    console.log(err.code)
  } else {
    let $ = cheerio.load(res.body)
    console.log(time)
    // fs.writeFileSync('./.js')
    // console.log($('body').text())
    // console.log($('.main-top>.title>a').text())
  }
})
