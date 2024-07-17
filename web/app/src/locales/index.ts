import { isObject, isString } from 'asura-eye'
import { locales } from './locales'

export { locales }

export const t = (key: string | any): string => {
  const lang = localStorage.lang

  if (isObject(key)) {
    if (isString(key[lang])) return key[lang]
    if (isString(key.zh_CN)) return key.zh_CN
    if (isString(key.en_US)) return key.en_US
    return ''
  }

  if (isString(key)) {
    if (lang === 'en') {
      const langKey = key + '.' + lang
      if (key && locales[langKey]) {
        return locales[langKey]
      }
    }
    if (key && locales[key]) {
      return locales[key]
    }
    // console.info(`没有相应国际化字段配置 key: ${key}`)
    return key
  }

  return ''
}
