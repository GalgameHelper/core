import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import { routes } from './router'
import { RouterProvider, createHashRouter } from 'react-router-dom'

function App() {
  return <RouterProvider router={createHashRouter(routes)} />
}

createRoot(document.getElementById('root')!).render(<App />)
