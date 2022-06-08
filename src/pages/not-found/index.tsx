import { FC } from 'react'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在"
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  )
}

export default NotFound
