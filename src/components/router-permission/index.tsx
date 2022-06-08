import { FC, ReactNode } from 'react'
import { LazyComponent, OnRouteBefore, RouteConfig, RouteMata } from '@/types'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { RouteGuard } from './route-guard'
import React from 'react'

interface RouterPermissionProps {
  routes: RouteConfig[]
  fallback?: ReactNode
  onRouteBefore?: OnRouteBefore
}

class Router {
  routes: RouteConfig[]
  fallback?: ReactNode
  onRouteBefore?: OnRouteBefore

  constructor(options: RouterPermissionProps) {
    this.routes = options.routes
    this.fallback = options.fallback || <div />
    this.onRouteBefore = options.onRouteBefore
  }

  lazyLoad(component: LazyComponent, mate: RouteMata) {
    const LazyElement = React.lazy(component)
    const element = (
      <React.Suspense fallback={this.fallback}>
        <LazyElement />
      </React.Suspense>
    )
    return <RouteGuard element={element} mate={mate} onRouteBefore={this.onRouteBefore} />
  }

  load(element: ReactNode, mate: RouteMata) {
    return <RouteGuard element={element} mate={mate} onRouteBefore={this.onRouteBefore} />
  }

  transformRoutes(routes = this.routes) {
    return routes.reduce((res, route) => {
      const mate = route.mate ?? ({} as RouteMata)
      if (route.redirect) {
        route.element = <Navigate to={route.redirect} replace={true} />
      } else if (route.component) {
        route.element = this.lazyLoad(route.component, mate)
      } else {
        route.element = this.load(route.element, mate)
      }
      if (route.children) {
        route.children = this.transformRoutes(route.children)
      }
      return [...res, route]
    }, [] as RouteObject[])
  }
}

export const RouterPermission: FC<RouterPermissionProps> = ({ routes, onRouteBefore }) => {
  const router = new Router({ routes, onRouteBefore })
  const routers = router.transformRoutes()
  const element = useRoutes(routers)
  return element
}
