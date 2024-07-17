import React from 'react'
import { getArtifactSets } from '@/service/artifact-set'
import { ArtifactSetType } from '@/type'
import './index.less'
import { Flex, Img } from '@/components'
import { t } from '@/locales'
import { isString } from 'asura-eye'

export function ArtifactSet() {
  const [list, setList] = React.useState<ArtifactSetType[]>([])

  const init = async () => {
    setList(await getArtifactSets())
  }

  React.useEffect(() => {
    init()
  }, [])
  const getDesc = (value: string) => {
    if (!isString(value)) return []
    if (value.indexOf('4件套') > -1) {
      const [a, b] = value.split('4件套')
      return [a, '4件套' + b]
    }
    if (value.indexOf('4-Piece') > -1) {
      const [a, b] = value.split('4-Piece')
      return [a, '4-Piece' + b]
    }
    return [value]
  }

  return (
    <div className='artifactSet-list'>
      {list.map((item, i) => {
        const [name, desc] = item
        // console.log(t(desc).split('4件套: '))
        return (
          <React.Fragment key={i}>
            <span className='name'>
              <Img
                size={38}
                src={require(`@/assets/img/artifact-set/${name.en_US}.webp`)}
              />
              <span>{t(name)}</span>
            </span>
            <span className='desc'>
              {getDesc(t(desc)).map((val, i) => (
                <div key={i}>{val}</div>
              ))}
            </span>
          </React.Fragment>
        )
      })}
    </div>
  )
}
