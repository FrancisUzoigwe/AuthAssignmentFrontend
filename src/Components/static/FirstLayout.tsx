import React from 'react'
import FirstHeader from './FirstHeader'
import { Outlet } from 'react-router-dom'

const FirstLayout = () => {
  return (
    <div>
      <FirstHeader/>
      <Outlet/>
    </div>
  )
}

export default FirstLayout
