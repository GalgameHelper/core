import React, { ImgHTMLAttributes } from 'react'

export interface ImgProps extends ImgHTMLAttributes<any> {
  [key: string]: any
}

export function Img(props: ImgProps) {
  // const {} = props
  return <img {...props} />
}
