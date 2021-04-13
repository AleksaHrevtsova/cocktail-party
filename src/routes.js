import { lazy } from 'react'
import { v4 as uuid } from 'uuid'

const routes = [
  {
    key: uuid(),
    exact: true,
    path: '/',
    // path: `${match.url}`,
    component: lazy(() => import('./pages/Home/Container')),
    private: true,
    restricted: true,
  },
  {
    key: uuid(),
    exact: true,
    path: '/cocktails',
    component: lazy(() => import('./pages/Cocktails/Cocktails')),
    private: true,
    restricted: true,
  },
  {
    key: uuid(),
    exact: true,
    path: '/contacts',
    component: lazy(() => import('./pages/Contacts/Contacts')),
    private: true,
    restricted: true,
  },
  {
    key: uuid(),
    exact: true,
    path: '/register',
    component: lazy(() => import('./pages/RegisterPage/RegisterPage')),
    private: false,
    restricted: false,
  },
  {
    key: uuid(),
    exact: true,
    path: '/login',
    component: lazy(() => import('./pages/LoginPage/LoginPage')),
    private: false,
    restricted: false,
  },
]
export default routes
