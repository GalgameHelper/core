import React from 'react'

export const emit = (value: any) => {
  ;(window as any)?.electron?.send(value)
}
