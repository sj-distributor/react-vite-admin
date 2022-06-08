import { FC, useEffect, useState } from 'react'
import { message, Tooltip } from 'antd'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import screenfull from 'screenfull'
import classNames from 'classnames'

interface FullScreenProps {
  className?: string
}

const toggle = () => {
  if (!screenfull.isEnabled) {
    message.warning('you browser can not work')
    return false
  }
  screenfull.toggle()
}

export const FullScreen: FC<FullScreenProps> = ({ className }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const change = () => {
    setIsFullscreen(screenfull.isFullscreen)
  }

  useEffect(() => {
    screenfull.isEnabled && screenfull.on('change', change)
    return () => {
      screenfull.isEnabled && screenfull.off('change', change)
    }
  }, [])

  return (
    <Tooltip placement="bottom" title={isFullscreen ? '取消全屏' : '全屏'}>
      <div className={classNames(className)} onClick={toggle}>
        {isFullscreen ? (
          <FullscreenExitOutlined style={{ fontSize: 20 }} />
        ) : (
          <FullscreenOutlined style={{ fontSize: 20 }} />
        )}
      </div>
    </Tooltip>
  )
}
