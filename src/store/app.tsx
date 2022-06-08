import { createGlobalStore } from 'hox'
import { useState } from 'react'

export const [useAppStore, getAppStore] = createGlobalStore(() => {
  const [token, setToken] = useState('')

  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return {
    token,
    setToken,
    collapsed,
    toggleCollapsed
  }
})
