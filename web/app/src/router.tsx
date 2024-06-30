import React from 'react'
import { RouteObject, Link } from 'react-router-dom'
import { Characters } from './views/Characters'
import { Home } from './views/home'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/characters',
    element: <Characters />
  },
]
