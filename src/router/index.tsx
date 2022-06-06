import { FC } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import { Layout } from '@/components'
import { DashBoard } from '@/pages'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <DashBoard />
      }
    ]
  }
]

const RenderRouter: FC = () => {
  const element = useRoutes(routes)
  return element
}

export default RenderRouter
