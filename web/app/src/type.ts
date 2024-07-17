import React from 'react'
import { ObjectType } from '0type'

export interface ComponentProps {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  [key: string]: any
}
export type URLType = string | any

export type I18nField = {
  zh_CN: string
  en_US: string
  [key: string]: any
}

export interface CharacterType {
  name: I18nField
  rarity: string
  weapon: string
  element: string
  ascensionMaterials: string[]
  // logo: URLType
  // uid: string
  // bg: URLType
  // info?: [
  //   string,
  //   string | ObjectType<string | boolean>,
  //   string | ObjectType<string | boolean>
  // ][]
  [key: string]: any
}

export type ArtifactSetType = [I18nField, I18nField]
