import React from 'react'
import { ObjectType } from '0type'
import { stringify } from 'abandonjs'
import './index.less'
import { Img, Star } from '@/components'
import { classNames } from 'harpe'
import { t } from '@/locales'
import { isEffectArray, isString } from 'asura-eye'

export function Medicine() {
  const [list, setList] = React.useState<ObjectType[]>([])

  React.useEffect(() => {
    setList(
      new Array(3).fill({
        name: 'aaa',
        uid: '123',
        // account: '***',
        // pwd: '***',
        characters: [
          {
            name: {
              en_US: 'Kamisato Ayaka',
              zh_CN: '神里绫华'
            },
            rarity: '5',
            weapon: 'sword',
            element: 'cryo',
            ascensionMaterials: [
              'Shivada Jade Chunk',
              'Perpetual Heart',
              'Kageuchi Handguard',
              'Sakura Bloom',
              'Philosophies of Elegance',
              'Bloodjade Branch'
            ]
          }
        ]
      })
    )
  }, [])
  const lang = localStorage.lang || 'zh_CN'

  return (
    <div className='medicine'>
      {list.map((item: any, i) => {
        const { characters = [] } = item
        return (
          <div key={i}>
            <div>{stringify(item)}</div>
            {characters.map((char: any, j: number) => {
              const {
                name = {
                  en_US: '',
                  zh_CN: ''
                },
                rarity = '5',
                weapon = '',
                element,
                ascensionMaterials = []
              } = char
              return (
                <div
                  key={j}
                  className='character-info'
                  style={{ display: name ? 'block' : 'none' }}>
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
                  <div className='character-info-item'>
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
                        {isString(element) &&
                          element &&
                          !['none'].includes(element) && (
                            <Img
                              src={require(`@/assets/img/element/${element}.png`)}
                              size={32}
                            />
                          )}
                      </div>
                    </div>
                    {/* 突破材料 */}
                    <div className={classNames('info-item', 'one-row')}>
                      <div className='name'>{t('ascension-materials')}</div>
                      <div className='value'>
                        {isEffectArray<string>(ascensionMaterials) &&
                          ascensionMaterials.map((name, i) => {
                            return (
                              <Img
                                key={i}
                                src={require(`@/assets/img/ascension-materials/${name}.webp`)}
                                size={48}
                              />
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
