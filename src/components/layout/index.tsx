import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout as AntdLayout } from 'antd'
import styles from './index.module.css'
import { Sider } from './components/sider'

const { Header, Footer, Content } = AntdLayout

export const Layout: FC = () => {
  return (
    <AntdLayout className={styles.appLayout}>
      <Sider />
      <AntdLayout>
        <Header>Header</Header>
        <Content>
          <div>
            <Outlet />
          </div>
        </Content>
        <Footer>Footer</Footer>
      </AntdLayout>
    </AntdLayout>
  )
}
