import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'
import { Img } from '@/components'

export function Home() {
  const nav = useNavigate()

  React.useEffect(() => {
    nav('/Genshin_Impact')
  }, [])

  const conf = [
    {
      url: '/Genshin_Impact/character/list',
      logo: require('@/assets/img/logo/character.webp'),
      name: '角色'
    },
    {
      url: '/Genshin_Impact/ascension_material/list',
      logo: require('@/assets/img/logo/ascension-material.webp'),
      name: '突破材料'
    },
    {
      url: '/Genshin_Impact/artifact_set/list',
      logo: require('@/assets/img/logo/artifact-set.webp'),
      name: '圣遗物'
    },
  ]

  return (
    <div className='home'>
      <div className='modules'>
        {conf.map((item, i) => {
          return (
            <div
              key={i}
              className='module character-list'
              onClick={() => nav(item.url)}>
              <Img src={item.logo} />
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}
