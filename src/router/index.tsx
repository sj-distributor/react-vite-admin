import { FC } from 'react'
import { Layout, RouterPermission } from '@/components'
import { RouteConfig, RouteMata } from '@/types'
import NotFound from '@/pages/not-found'
import Login from '@/pages/login'

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard')
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

const RenderRouter: FC = () => {
  return (
    <RouterPermission
      routes={routes}
      onRouteBefore={({ pathname, mate }: { pathname: string; mate: RouteMata }) => {
        console.log('pathname', pathname)
        console.log('mate', mate)
      }}
    />
  )
}

export default RenderRouter
