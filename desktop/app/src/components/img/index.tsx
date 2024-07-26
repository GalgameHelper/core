import React, { ImgHTMLAttributes } from 'react'
import { ObjectType } from '0type'

export interface ImgProps extends ImgHTMLAttributes<any> {
  dataType?: string
  [key: string]: any
}
const ImgConf: ObjectType<any> = {
  'logo.Genshin_Impact': require('../../assets/img/logo/Genshin_Impact.png')
}
const getImg = (dataType: string) => {
  if (ImgConf[dataType]) return ImgConf[dataType]
  return undefined
}
export function Img(props: ImgProps) {
  const { dataType, ...rest } = props

  return <img src={getImg(dataType)} {...rest} />
}
