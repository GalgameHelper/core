import React from 'react'
import { ObjectType } from '0type'
import { getAscensionMaterials } from '@/service'
import { useNavigate } from 'react-router-dom'
import { stringify } from 'abandonjs'
import { t } from '@/locales'
import { Flex, Grid, Img } from '@/components'
import './index.less'

export function AscensionMaterials() {
  const [ascensionMaterials, setAscensionMaterials] = React.useState<
    ObjectType[]
  >([])

  const nav = useNavigate()

  const init = async () => {
    setAscensionMaterials(await getAscensionMaterials())
  }

  React.useEffect(() => {
    init()
  }, [])

  return (
    <Flex className='ascension-materials' center>
      {ascensionMaterials.map((item, i) => (
        <Flex className='item' key={i} center>
          <Img size={38} src={require(`@/assets/img/ascension-materials/${item.en_US}.webp`)}  />
          <div>{t(item)}</div>
        </Flex>
      ))}
    </Flex>
  )
}
