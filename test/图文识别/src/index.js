import Tesseract from 'tesseract.js'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

Tesseract.recognize(path.resolve(__dirname, './image.png'), 'eng')
  .then((res) => {
    console.log(res?.data?.text)
  })
  .catch(console.error)
