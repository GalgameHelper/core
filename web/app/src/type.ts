import React from 'react'

export interface ComponentProps {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  [key: string]: any
}
