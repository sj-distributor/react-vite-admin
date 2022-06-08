import { Layout } from 'antd'
import { FC } from 'react'
import styles from './index.module.css'
import { Hamburger } from '../hamburger'
import { FullScreen } from '../fullscreen'
import { Logout } from '../logout'

const { Header: AntdHeader } = Layout

interface HeaderProps {
  collapsed: boolean
  toggleCollapsed: () => void
}

export const Header: FC<HeaderProps> = ({ collapsed, toggleCollapsed }) => {
  return (
    <AntdHeader className={styles.appHeader}>
      <div className={styles.left}>
        <Hamburger className={styles.actionItem} collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      </div>
      <div className={styles.content}></div>
      <div className={styles.right}>
        <FullScreen className={styles.actionItem} />
        <Logout className={styles.actionItem} />
      </div>
    </AntdHeader>
  )
}
