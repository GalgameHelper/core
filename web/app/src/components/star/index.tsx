import { ComponentProps } from '@/type'
import { classNames } from 'harpe'
import React from 'react'
import StartPNG from './star.png'
import { likeNumber } from 'asura-eye'
import { Img } from '../img'
import './index.less'

export interface StarProps extends ComponentProps {
  value: number | string
  [key: string]: any
}

export function Star(props: StarProps) {
  const { className, value, ...rest } = props
  if (!likeNumber(value)) {
    return <div />
  }
  return (
    <div className={classNames('a-star', className)} {...rest}>
      {new Array(Number(value)).fill('').map((_, i) => (
        <Img key={i} src={StartPNG} />
      ))}
    </div>
  )
}
