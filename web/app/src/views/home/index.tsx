import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ObjectType } from '0type'
import './index.less'
import { getCharacters } from '@/service'
import { CharacterType } from '@/type'

export function Home() {
  const [characters, setCharacters] = React.useState<ObjectType[]>([])

  const nav = useNavigate()

  const init = async () => {
    setCharacters(await getCharacters())
  }

  React.useEffect(() => {
    init()
  }, [])

  return (
    <div className='home'>
      <div className='characters'>
        {characters.map((item: CharacterType, i) => {
          const { name } = item
          return (
            <div key={i} className='character-item'>
              <img
                src={require(`@/assets/img/characters/${name.en_US}.webp`)}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  nav(`/characters?name=${name.en_US || ''}`)
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
