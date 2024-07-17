import { Genshin_Impact_Logo } from '@/assets'
import { Flex, Img } from '@/components'
import { ComponentProps } from '@/type'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export interface HeaderProps extends ComponentProps {
  [key: string]: any
}

export function Header(props: HeaderProps) {
  const nav = useNavigate()
  React.useEffect(() => {
    if (location.href.indexOf('#') === -1) {
      nav('/Genshin_Impact')
    }
  }, [])
  return (
    <Flex className='app-header'>
      <Img
        size={48}
        src={Genshin_Impact_Logo}
        style={{ borderRadius: 12, cursor: 'pointer' }}
        onClick={() => {
          nav('/Genshin_Impact')
        }}
      />
    </Flex>
  )
}
