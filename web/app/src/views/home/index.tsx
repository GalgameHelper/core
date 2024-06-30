import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CharacterList } from '@/db'
import { ObjectType } from '0type'
import { Img } from '@/components'
import './index.less'

export function Home() {
  const [list, setList] = React.useState<ObjectType[]>([])
  const nav = useNavigate()

  React.useEffect(() => {
    const newList: ObjectType[] = []

    CharacterList.forEach((item) => {
      const record = {
        ...item,
        name: item.info.filter((_) => _[0] === 'name')[0]
      }
      newList.push(record)
    })
    setList(newList)
  }, [CharacterList])

  return (
    <div>
      <div className='character-card-list'>
        {list.map((item, i) => {
          return (
            <div
              className='card'
              key={i}
              onClick={() => {
                nav(`/characters?name=${item.uid || ''}`)
              }}>
              <Img src={item.logo} size={64} />
            </div>
          )
        })}
      </div>
      {/* <Link to='characters'>characters</Link> */}
    </div>
  )
}
