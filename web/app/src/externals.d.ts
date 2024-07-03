declare module '*.less'
declare module '*.module.less'
declare module '*.svg'
declare module '*.json'
declare module '*.png'
declare module '*.jpg'
declare module '*.md'
declare module '*.txt'

declare var require: {
  (path: string): any
  resolve(path: string): string
  cache: any
  extensions: any
  main: any
}
