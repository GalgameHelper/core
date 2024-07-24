import { createHashRouter, Link, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <div>
        <h1>Home</h1>
        <Link to='about'>About Us</Link>
      </div>
    )
  },
  {
    path: 'about',
    element: <div>About</div>
  }
]

export const router = createHashRouter(routes)
