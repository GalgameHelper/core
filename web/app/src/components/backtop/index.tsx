import React from "react"

export interface BackTopProps {
  [key: string]: any
}

export function BackTop(props: BackTopProps){
  const {} = props
  return (
    <div>
      BackTop
      {JSON.stringify(Object.keys(props))}
    </div>
  )
}
