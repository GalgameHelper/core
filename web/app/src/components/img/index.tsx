import { ComponentProps } from '@/type'
import { classNames } from 'harpe'
import { isNumber } from 'asura-eye'
import React, { HtmlHTMLAttributes } from 'react'

export interface ImgProps extends ComponentProps, HtmlHTMLAttributes<any> {
  /**
   * @description 设置宽高
   */
  size?: number
  [key: string]: any
}

export function Img(props: ImgProps) {
  const { style = {}, size, className, ...rest } = props
  if (isNumber(size)) {
    style.width = size
    style.height = size
  }
  return (
    <img style={style} className={classNames('a-img', className)} {...rest} />
  )
}
