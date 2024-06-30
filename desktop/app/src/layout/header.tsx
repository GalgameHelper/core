import React from 'react'
import { CloseSvg } from '../assets'
// import { CloseSvg, Genshin_Impact_Logo } from '../assets'
import { Img } from '../components'
import { classNames } from 'harpe'

export interface HeaderProps {
  [key: string]: any
}

export function Header(props: HeaderProps) {
  const { ...rest } = props
  return (
    <div {...rest}>
      {/* <Img
        src={Genshin_Impact_Logo}
        style={{
          width: 64,
          height: 64
        }}
      /> */}
      <CloseSvg />
    </div>
  )
}
