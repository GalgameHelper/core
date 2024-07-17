import React from 'react'
import { RouteObject, Link } from 'react-router-dom'
import { CharacterInfo } from './views/Character-Info'
import { Home } from './views/home'
import { CharacterList } from './views/Character-List'
import { Layout } from './layout'
import { AscensionMaterials } from './views/ascension-materials'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/Genshin_Impact',
        element: <Home />
      },
      {
        path: '/Genshin_Impact/character/list',
        element: <CharacterList />
      },
      {
        path: '/Genshin_Impact/character/info',
        element: <CharacterInfo />
      },
      {
        path: '/Genshin_Impact/ascension_material/list',
        element: <AscensionMaterials />
      }
    ]
  }
]

// Genshin_Impact
