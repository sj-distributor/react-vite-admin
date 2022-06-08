import { FC } from 'react'
import { Layout, Menu } from 'antd'
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.css'

const { Sider: AntdSider } = Layout

interface SiderProps {
  collapsed: boolean
}

export const Sider: FC<SiderProps> = ({ collapsed }) => {
  return (
    <AntdSider className={styles.appSider} collapsed={collapsed} collapsedWidth={64}>
      <Menu
        className={styles.appMenu}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['list']}
        items={[
          {
            key: 'Dashboard',
            icon: <AppstoreOutlined />,
            label: 'Dashboard'
          },
          {
            key: 'userManage',
            icon: <UserOutlined />,
            label: '用户管理',
            children: [
              {
                key: 'list',
                label: '用户列表'
              },
              {
                key: 'add',
                label: '添加用户'
              }
            ]
          },
          {
            key: 'permission',
            icon: <UserOutlined />,
            label: '权限管理',
            children: [
              {
                key: 'addpermission',
                label: '用户列表'
              },
              {
                key: 'listpermission',
                label: '添加用户'
              }
            ]
          }
        ]}
      />
    </AntdSider>
  )
}
