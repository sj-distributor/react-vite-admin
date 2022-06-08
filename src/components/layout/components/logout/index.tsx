import { CaretDownOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import classNames from 'classnames'
import { MenuInfo } from 'rc-menu/lib/interface'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface LogoutProps {
  className?: string
}

export const Logout: FC<LogoutProps> = ({ className }) => {
  const navigate = useNavigate()

  const onClick = ({ key }: MenuInfo) => {
    switch (key) {
      case 'logout':
        navigate('/login')
        break
      default:
        break
    }
  }

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={onClick}
          items={[
            {
              key: 'dashboard',
              label: '首页'
            },
            {
              type: 'divider'
            },
            {
              key: 'logout',
              label: '退出'
            }
          ]}
        />
      }
    >
      <div className={classNames(className)}>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <CaretDownOutlined />
      </div>
    </Dropdown>
  )
}
