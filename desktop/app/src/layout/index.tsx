import React from 'react'

export interface LayoutProps {
  children: React.ReactNode
  [key: string]: any
}

export function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <div className='app-layout'>
      <div className='app-layout-header title'>
        title
      </div>
      <div className='app-layout-content'>{children}</div>
    </div>
  )
}
