import { CharacterList } from '@/db'
import { CharacterType } from '@/type'

export const getCharacter = async (
  name: string | null
): Promise<CharacterType | null> => {
  if (name) {
    const character = CharacterList.filter(
      (_) => _.uid === name
    )[0] as CharacterType
    return character || null
  }
  return null
}
