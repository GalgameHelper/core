import { ComponentProps } from '@/type'
import React from 'react'
import { classNames } from 'harpe'
import './index.less'

export interface FlexProps extends ComponentProps {
  [key: string]: any
}

export function Flex(props: FlexProps) {
  const { className, children, ...rest } = props
  return (
    <div className={classNames('a-flex', className)} {...rest}>
      {children}
    </div>
  )
}
