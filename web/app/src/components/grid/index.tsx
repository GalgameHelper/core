import { ComponentProps } from '@/type'
import React from 'react'
import { classNames } from 'harpe'
import './index.less'

export interface GridProps extends ComponentProps {
  [key: string]: any
}

export function Grid(props: GridProps) {
  const { className, children, ...rest } = props
  return (
    <div className={classNames('grid', className)} {...rest}>
      {children}
    </div>
  )
}
