import React from 'react'
import { Header } from './header'
import './index.css'

export interface LayoutProps {
  children: React.ReactNode
  [key: string]: any
}

export function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <div className='app-layout'>
      <Header className='app-layout-header' />
      <div className='app-layout-content'>{children}</div>
    </div>
  )
}
