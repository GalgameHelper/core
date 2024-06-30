import { Genshin_Impact_Logo } from '@/assets'
import { Flex, Img } from '@/components'
import { ComponentProps } from '@/type'
import React from 'react'

export interface HeaderProps extends ComponentProps {
  [key: string]: any
}

export function Header(props: HeaderProps) {
  // const {} = props
  return (
    <Flex className='app-header'>
      <Img size={48} src={Genshin_Impact_Logo} style={{ borderRadius: 12 }} />
    </Flex>
  )
}
