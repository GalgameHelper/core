import React from 'react'
import { RouteObject } from 'react-router-dom'
import { CharacterInfo } from './views/Character-Info'
import { Home } from './views/home'
import { CharacterList } from './views/Character-List'
import { Layout } from './layout'
import { AscensionMaterials } from './views/ascension-materials'
import { ArtifactSet } from './views/Artifact-Set'
import { Weapon } from './views/weapon'
import { Medicine } from './views/medicine'

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
      },
      {
        path: '/Genshin_Impact/artifact_set/list',
        element: <ArtifactSet />
      },
      {
        path: '/Genshin_Impact/weapon/list',
        element: <Weapon />
      },
      {
        path: '/Genshin_Impact/medicine/list',
        element: <Medicine />
      }
    ]
  }
]

// Genshin_Impact
