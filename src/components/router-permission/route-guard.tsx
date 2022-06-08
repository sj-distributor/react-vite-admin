import { OnRouteBefore, RouteMata } from '@/types'
import { FC, ReactElement, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface RouteGuardProps {
  element: ReactNode
  mate: RouteMata
  onRouteBefore?: OnRouteBefore
}

let template: ReactNode

export const RouteGuard: FC<RouteGuardProps> = ({ element, mate, onRouteBefore }) => {
  const location = useLocation()
  const { pathname } = location

  if (onRouteBefore) {
    if (template === element) {
      return element as ReactElement
    }
    const path = onRouteBefore({ pathname, mate })
    if (path && path !== pathname) {
      element = <Navigate to={path} replace={true} />
    }
  }

  template = element
  return element as ReactElement
}
