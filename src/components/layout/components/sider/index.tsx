import { FC, useState } from 'react'
import { Button, Layout, Menu } from 'antd'
import { AppstoreOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons'

const { Sider: AntdSider } = Layout

export const Sider: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <AntdSider collapsed={collapsed}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['Dashboard']}
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
              }
            ]
          }
        ]}
      />
    </AntdSider>
  )
}
