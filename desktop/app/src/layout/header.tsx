import React from 'react'
import { CloseSvg } from '../assets'
// import { CloseSvg, Genshin_Impact_Logo } from '../assets'
import { Img } from '../components'
import { classNames } from 'harpe'
// import { app } from 'electron'

export interface HeaderProps {
  [key: string]: any
}

export function Header(props: HeaderProps) {
  const { ...rest } = props
  return (
    <div className='app-layout-header' {...rest}>
      <div className='left'>
        {/* <Img
        src={Genshin_Impact_Logo}
        style={{
          width: 64,
          height: 64
        }}
      /> */}
      </div>
      <div className='center'></div>
      <div className='right'>
        <div
          className='close'
          onClick={() => {
            console.log('sjfkasjdfkj', window)
            // window.preApi.close('aaaa')
            // app.quit()
          }}>
          <CloseSvg />
        </div>
      </div>
    </div>
  )
}
