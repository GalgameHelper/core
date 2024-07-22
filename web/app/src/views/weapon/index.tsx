import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'
import { getWeapons } from '@/service'
import { WeaponsType } from '@/type'
import { t } from '@/locales'
import { isEffectArray } from 'asura-eye'
import { Img } from '@/components'

export function Weapon() {
  const [list, setList] = React.useState<WeaponsType[]>([])

  const nav = useNavigate()

  const init = async () => {
    setList(await getWeapons())
  }

  React.useEffect(() => {
    init()
  }, [])
  // const igImg = [
  //   'ead Ley Line Branch',
  //   'Dead Ley Line Branch',
  //   'Treasure Hoarder Insignia',
  //   "Tile of Decarabian's Tower",
  //   'Fetters of the Dandelion Gladiator',
  //   'Heavy Horn'
  // ]
  return (
    <div className='weapons'>
      {list.map((item: WeaponsType, i) => {
        const { name, ascensionMaterials } = item
        return (
          <div key={i} className='item'>
            <span>{t(name)}</span>
            {/* <span>{t(item.rarity)}</span> */}
            {/* <span>{t(item.atk)}</span> */}
            {/* <span>{t(item.sub)}</span> */}
            {/* <span>{t(item.value)}</span> */}
            {/* <span>{t(item.affix)}</span> */}
            {/* <span>{t(item.type)}</span> */}
            {/* <div>
                {isEffectArray<string>(ascensionMaterials) &&
                  ascensionMaterials.map((name, i) => {
                    if (igImg.includes(name) || i > 0) {
                      return <></>
                    }
                    try {
                      return (
                        <Img
                          key={i}
                          src={require(`@/assets/img/ascension-materials/${name}.webp`)}
                          size={48}
                        />
                      )
                    } catch (error) {
                      return <></>
                    }
                  })}
              </div> */}
            {/* {name.en_US && (
                <img
                  src={require(`@/assets/img/weapon/${name.en_US}.webp`)}
                  style={{ cursor: 'pointer' }}
                  // onClick={() => {
                  //   nav(`/Genshin_Impact/character/info?name=${name.en_US || ''}`)
                  // }}
                />
              )} */}
          </div>
        )
      })}
    </div>
  )
}
