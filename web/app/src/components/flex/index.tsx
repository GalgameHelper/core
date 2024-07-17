import { ComponentProps } from '@/type'
import React from 'react'
import { classNames } from 'harpe'
import './index.less'
import { isEffectArray } from 'asura-eye'

export interface FlexProps extends ComponentProps {
  center?: boolean | ('x' | 'y')[]
  [key: string]: any
}

export function Flex(props: FlexProps) {
  const { center, className, children, style = {}, ...rest } = props

  if (center) {
    if (isEffectArray(center)) {
      if (center.includes('x')) style['justifyContent'] = 'center'
      if (center.includes('y')) style['alignItems'] = 'center'
    } else {
      style['justifyContent'] = 'center'
      style['alignItems'] = 'center'
    }
  }

  return (
    <div className={classNames('flex', className)} style={style} {...rest}>
      {children}
    </div>
  )
}
