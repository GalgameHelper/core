import { CharacterType } from '@/type'
import characters from '../assets/database/characters.json'

export const getCharacter = async (
  name: string | null
): Promise<CharacterType | null> => {

  if (name) {
    return characters.filter((item: any) =>
      Object.values(item.name).includes(name)
    )[0]
  }
  return null
}

/**
 * @description 获取全部角色
 */
export const getCharacters = async (): Promise<CharacterType[]> => {
  return characters
}
