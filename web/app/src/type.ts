import React from 'react'
import { ObjectType } from '0type'

export interface ComponentProps {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  [key: string]: any
}
export type URLType = string | any

export interface CharacterType {
  logo: URLType
  uid: string
  bg: URLType
  info?: [
    string,
    string | ObjectType<string | boolean>,
    string | ObjectType<string | boolean>
  ][]
  [key: string]: any
}
