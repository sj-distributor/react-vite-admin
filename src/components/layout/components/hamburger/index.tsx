import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { FC } from 'react'

interface HamburgerProps {
  className?: string
  collapsed: boolean
  toggleCollapsed: () => void
}

export const Hamburger: FC<HamburgerProps> = ({ className, collapsed, toggleCollapsed }) => {
  return (
    <div className={classNames(className)} onClick={toggleCollapsed}>
      {collapsed ? <MenuUnfoldOutlined style={{ fontSize: 20 }} /> : <MenuFoldOutlined style={{ fontSize: 20 }} />}
    </div>
  )
}
