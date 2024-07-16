import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'
import { Img } from '@/components'

export function Home() {
  const nav = useNavigate()

  React.useEffect(() => {
    nav('/Genshin_Impact')
  }, [])

  return (
    <div className='home'>
      <div className='modules'>
        <div
          className='module character-list'
          onClick={() => nav('/Genshin_Impact/character/list')}>
          <Img src={require('@/assets/img/other/char_35.webp')} />
          角色
        </div>
      </div>
    </div>
  )
}
