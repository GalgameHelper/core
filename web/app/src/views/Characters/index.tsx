import React from 'react'
import { t } from '@/locales'
import { Img, Star } from '@/components'
import { classNames } from 'harpe'
import './index.less'
import { useSearchParams } from 'react-router-dom'
import { useSetState } from '0hook'
import { CharacterType } from '@/type'
import { getCharacter } from '@/service'
import { ObjectType } from '0type'
import { isString } from 'asura-eye'

export interface CharactersProps {
  [key: string]: any
}

export function Characters(props: CharactersProps) {
  const [search] = useSearchParams()
  const lang = localStorage.lang || 'zh_CN'
  const [
    {
      name = {
        en_US: '',
        zh_CN: ''
      },
      rarity = '5',
      weapon = '',
      element,
      ascensionMaterials = []
    },
    setState
  ] = useSetState<CharacterType>({} as CharacterType)

  const init = async () => {
    const character = await getCharacter(search.get('name'))
    if (character) setState(character)
  }

  React.useEffect(() => {
    init()
  }, [])

  return (
    <div className='characters' style={{ display: name ? 'block' : 'none' }}>
      {name.en_US && (
        <Img
          src={require(`@/assets/img/characters/${name.en_US}.webp`)}
          style={{ cursor: 'pointer' }}
          size={128}
          onClick={() => {
            history.back()
          }}
        />
      )}
      <div className='characters-item'>
        <div className={classNames('info-item')}>
          <div className='name'>{t('name')}</div>
          <div className='value'>{name[lang]}</div>
        </div>
        <div className={classNames('info-item')}>
          <div className='name'>{t('weapon')}</div>
          <div className='value'>{t(weapon)}</div>
        </div>
        <div className={classNames('info-item')}>
          <div className='name'>{t('rarity')}</div>
          <div className='value'>
            <Star value={rarity} />
          </div>
        </div>
        <div className={classNames('info-item')}>
          <div className='name'>{t('vision')}</div>
          <div className='value'>
            {isString(element) && element && !['none'].includes(element) && (
              <Img
                src={require(`@/assets/img/element/${element}.png`)}
                size={32}
              />
            )}
          </div>
        </div>
        {/* {info.map((item: any, i: number) => {
          const [name, value, type = { default: true }] = item || []
          return (
            <div className={classNames('info-item', type)} key={i}>
              <div className='name'>{t(name)}</div>
              <div className='value'>
                {type.star ? <Star value={value} /> : value}
              </div>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}
