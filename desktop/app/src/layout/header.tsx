import React from 'react'
import { CloseSvg } from '../assets'
import { Img } from '../components'
import { classNames } from 'harpe'
import { emit } from '../utils'
// import { ipcRenderer } from 'electron/renderer'

export interface HeaderProps {
  [key: string]: any
}

export function Header(props: HeaderProps) {
  const { ...rest } = props
  return (
    <div className='app-layout-header' {...rest}>
      <div className='left'>
        <Img
          dataType='logo.Genshin_Impact'
          style={{
            width: 42,
            height: 42
          }}
        />
      </div>
      <div className='center'></div>
      <div className='right'>
        <div
          className='close'
          onClick={() => {
            emit('close-app')
          }}>
          <CloseSvg />
        </div>
      </div>
    </div>
  )
}
