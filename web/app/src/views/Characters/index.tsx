import React from 'react'
import { t } from '@/locales'
import { Img, Star } from '@/components'
import { classNames } from 'harpe'
import './index.less'
import { useSearchParams } from 'react-router-dom'
import { ObjectType } from '0type'
import { useSetState } from '0hook'
import { CharacterType } from '@/type'
import { getCharacter } from '@/service'

export interface CharactersProps {
  [key: string]: any
}

export function Characters(props: CharactersProps) {
  const [search] = useSearchParams()
  const name = search.get('name')

  const [{ logo, bg, info = [] }, setState] = useSetState<CharacterType>(
    {} as CharacterType
  )

  const init = async () => {
    const character = await getCharacter(name)
    if (character) setState(character)
  }

  React.useEffect(() => {
    init()
  }, [])

  return (
    <div className='characters'>
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
}
