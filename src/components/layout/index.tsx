import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout as AntdLayout } from 'antd'
import styles from './index.module.css'
import { Sider } from './components/sider'
import { Header } from './components/header'
import { useAppStore } from '@/store/app'

const { Content } = AntdLayout

export const Layout: FC = () => {
  const { collapsed, toggleCollapsed } = useAppStore()

  return (
    <AntdLayout className={styles.appLayout}>
      <Sider collapsed={collapsed} />
      <AntdLayout>
        <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Content>
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  )
}
