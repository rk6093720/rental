import React from 'react';
import MainRoutes from './Pages/MainRoutes';
import { Navigate,Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import OwnerLogin from './Pages/OwnerLogin';
import UserLogin from './Pages/UserLogin';
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import SuperAdmin from './Pages/SuperAdmin';
import OwnerDashboard from "./Pages/OwnerDashboard";
import TDashboard from './Pages/TDashboard';
const App = () => {
  const isAuth = useSelector((state)=> state.Auth.isAuth);
  return (
    <div>  
        <Routes>
      {!isAuth && ( 
        <Route path='/*' element={<Navigate to="/adminSignup" replace/>}/>
      )}
         <Route path='/adminLogin' element={<Login/>}/>  
         <Route path='/adminSignup' element={<Signup/>}/>
         <Route path="/owner-login" element={<OwnerLogin/>}/>
         <Route path='/user-login' element={<UserLogin/>}/>
         <Route path="/forget-password" element={<ForgetPassword/>} />
         <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
         <Route path='/superAdmin' element={<SuperAdmin/>}/>
         <Route path='/owner-dashboard' element={<OwnerDashboard/>}/> 
         <Route path="/tentant-dashboard" element={<TDashboard/>}/>
         {isAuth && (
                <Route path="/*" element={<MainRoutes />} />
            )}
         </Routes>
      
    </div>
  )
}

export default App
