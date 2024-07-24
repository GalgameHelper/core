/** @format */

import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './layout'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

const root = createRoot(document.querySelector('.app'))

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

root.render(<App />)
