import { isString } from 'asura-eye'
import { locales } from './locales'

export { locales }

export const t = (key: string | any): string => {
  if (!isString(key)) {
    return ''
  }
  const lang = localStorage.lang
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
