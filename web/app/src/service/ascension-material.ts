import { CharacterType } from '@/type'
import ascensionMaterials from '../assets/database/ascensionMaterials.json'

export const getAscensionMaterial = async (
  name: string | null
): Promise<CharacterType | null> => {

  if (name) {
    return ascensionMaterials.filter((item: any) =>
      Object.values(item).includes(name)
    )[0]
  }
  return null
}

/**
 * @description 获取全部进阶材料
 */
export const getAscensionMaterials = async (): Promise<CharacterType[]> => {
  return ascensionMaterials
}
