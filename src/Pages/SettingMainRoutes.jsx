import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import System from "../Component/System"
import Property from './Property'
import Payments from '../Component/Payments'
import Notification from "../Component/Notification"
import Tentant from '../Component/Tentant';
import Lease from '../Component/Lease';
const SettingMainRoutes = () => {
  return (
    <Routes>
        <Route path='/setting/' element={<System/>}/>
        <Route path='/setting/property' element={<Property/>}/>
       <Route path='/setting/payments' element={<Payments/>}/>
      <Route path='/setting/email' element={<Notification/>}/>
      <Route path='/setting/tenant'element={<Tentant/>}/>
      <Route path='/setting/lease' element={<Lease/>} />

    </Routes>
  )
}

export default SettingMainRoutes