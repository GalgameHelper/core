/** @format */

import * as React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.body)

function App() {
  return <h2>Hello from React18!</h2>
}

root.render(<App />)
