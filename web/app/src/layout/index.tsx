import { ComponentProps } from '@/type'
import React from 'react'
import { Header } from './header'
import './index.less'

export function Layout(props: ComponentProps) {
  const { children } = props
  return (
    <div className='app'>
      <Header />
      <div className='app-content'>{children}</div>
    </div>
  )
}
