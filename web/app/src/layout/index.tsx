import { ComponentProps } from '@/type'
import React from 'react'
import { Header } from './header'
import './index.less'
import { Outlet } from 'react-router-dom'

export function Layout() {
  
  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <Outlet />
      </div>
    </div>
  )
}
