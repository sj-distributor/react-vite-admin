import { ComponentType } from 'react'
import { RouteObject } from 'react-router-dom'

export interface RouteMata {
  title: string
}

export type LazyComponent = () => Promise<{ default: ComponentType }>

export interface RouteConfig extends RouteObject {
  mate?: RouteMata
  redirect?: string
  component?: LazyComponent
  children?: RouteConfig[]
}

export type OnRouteBeforeResult = string | void

export interface OnRouteBefore {
  (payload: { pathname: string; mate: RouteMata }): OnRouteBeforeResult
}
