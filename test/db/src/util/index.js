import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

export const cb = (e) => e && console.error(e)

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const WebpToPng = (url) => {
  // const res = sharp(url).png()
  const res = sharp(path.resolve(__dirname, '../i_n12425_70.webp'))
    .png()
    .toFile('./1.png', (err, info) => {
      if (err) return console.error(err)

      console.log(info)
    })

  console.log(url)
  return res
}
