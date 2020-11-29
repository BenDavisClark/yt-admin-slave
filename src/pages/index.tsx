import React from 'react'
import { Button } from 'antd'

export default function Demo(props: AnyKeyProps) {
  return (
    <div>
      <h1 className="title">
        <Button type="primary">子应用测试</Button>
      </h1>
    </div>
  )
}
