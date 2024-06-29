/** @format */

import * as React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.body)

function App() {
  return (
    <div>
      <div className='title'>标题</div>
      <h2>Hello from React18!</h2>
    </div>
  )
}

root.render(<App />)
