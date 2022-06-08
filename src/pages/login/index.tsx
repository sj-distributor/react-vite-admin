import { Button, Card, Form, Input } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

const Login: FC = () => {
  const navigate = useNavigate()

  const onFinish = () => {
    navigate('/')
  }

  return (
    <div className={styles.loginPage}>
      <Card className={styles.card} title="Login">
        <Form autoComplete="off" onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入账号' }]}>
            <Input placeholder="账号" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
