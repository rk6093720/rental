import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Property from './Property'
import System from '../Component/System'

const SettingMainRoutes = () => {
  return (
    <Routes>
        <Route path='/setting' element={<System/>}/>
    </Routes>
  )
}

export default SettingMainRoutes