import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'

function App() {
  return (
    <div className='app'>
      app 
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
