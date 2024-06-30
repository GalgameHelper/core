import React from 'react'
import { CharacterList, t } from '@/db'
import { Img, Star } from '@/components'
import { classNames } from 'harpe'
import './index.less'
import { useSearchParams } from 'react-router-dom'

export interface CharactersProps {
  [key: string]: any
}

export function Characters(props: CharactersProps) {
  const [search] = useSearchParams()
  const name = search.get('name')

  return (
    <div className='characters'>
      <Star value={4} />
      {CharacterList.filter((_) => _.uid === name).map((item: any, i) => {
        const { logo, bg, info = [] } = item
        return (
          <div key={i}>
            <Img
              src={logo}
              style={{ cursor: 'pointer' }}
              size={128}
              onClick={() => {
                history.back()
              }}
            />
            <div className='characters-item'>
              {info.map((item: any, i: number) => {
                const [name, value, type = { default: true }] = item || []
                return (
                  <div className={classNames('info-item', type)} key={i}>
                    <div className='name'>{t(name)}</div>
                    <div className='value'>
                      {type.star ? <Star value={value} /> : value}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
