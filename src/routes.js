import { lazy } from 'react'
import { v4 as uuid } from 'uuid'

const routes = [
  {
    key: uuid(),
    exact: true,
    path: '/',
    // path: `${match.url}`,
    component: lazy(() => import('./pages/Home/Container')),
  },
  {
    key: uuid(),
    exact: true,
    path: '/cocktails',
    component: lazy(() => import('./pages/Cocktails/Cocktails')),
  },
  {
    key: uuid(),
    exact: true,
    path: '/contacts',
    component: lazy(() => import('./pages/Contacts/Contacts')),
  },
  {
    key: uuid(),
    exact: true,
    path: '/register',
    component: lazy(() => import('./pages/RegisterPage/RegisterPage')),
  },
  {
    key: uuid(),
    exact: true,
    path: '/login',
    component: lazy(() => import('./pages/LoginPage/LoginPage')),
  },
]
export default routes
