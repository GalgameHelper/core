// artifact-set
import { ArtifactSetType } from '@/type'
import artifactSet from '../assets/database/artifact-set.json'

export const getArtifactSet = async (
  name: string | null
): Promise<ArtifactSetType | null> => {

  if (name) {
    return artifactSet.filter((item: any) =>
      Object.values(item[1]).includes(name)
    )[0]
  }
  return null
}

/**
 * @description 获取全部圣遗物
 */
export const getArtifactSets = async (): Promise<ArtifactSetType[]> => {
  return artifactSet
}
