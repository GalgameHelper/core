import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import { getImg } from './utils'

function App() {
  return (
    <div className='app'>
      <img src={getImg()}/>
      app 
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
