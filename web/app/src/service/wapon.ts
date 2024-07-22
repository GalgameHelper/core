import { WeaponsType } from '@/type'
import weapon from '../assets/database/weapon.json'

export const getWeapon = async (
  name: string | null
): Promise<WeaponsType | null> => {

  if (name) {
    return weapon.filter((item: any) =>
      Object.values(item).includes(name)
    )[0]
  }
  return null
}

/**
 * @description 获取全部武器
 */
export const getWeapons = async (): Promise<WeaponsType[]> => {
  return weapon
}
