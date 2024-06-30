import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import { routes } from './router'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { Layout } from './layout'

function App() {
  return (
    <Layout>
      <RouterProvider router={createHashRouter(routes)} />
    </Layout>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
