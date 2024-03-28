import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import System from "../Component/System"
import Payments from '../Component/Payments'
import Notification from "../Component/Notification"
import Lease from '../Component/Lease';
const SettingMainRoutes = () => {
  return ( 
    <Routes>
        <Route path='/setting/' element={<System/>}/>
       <Route path='/setting/payments' element={<Payments/>}/>
      <Route path='/setting/email' element={<Notification/>}/>
      <Route path='/setting/lease' element={<Lease/>} />

    </Routes>
  )
}

export default SettingMainRoutes