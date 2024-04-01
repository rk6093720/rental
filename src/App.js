// App.js

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import OwnerLogin from './Pages/OwnerLogin';
// import UserLogin from './Pages/UserLogin';
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import SuperAdmin from './Pages/SuperAdmin';
import OwnerDashboard from "./Pages/OwnerDashboard";
import TDashboard from './Pages/TDashboard';

const App = () => {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const isAuthAdmin= useSelector((state)=>state.Auth.isAuthAdmin);
  const isAuthUser= useSelector((state)=>state.Auth.isAuthUser)
  const role = useSelector((state)=> state.Auth.roles);
  const roles = useSelector((state)=>state.Auth.role);
  return (
    <div>
      <Routes>
        {!isAuth && (
          <>
            <Route path='/*' element={<Navigate to="/adminSignup" replace />} />
            <Route path='/adminSignup' element={<Signup />} />
          </>
        )}

        <Route path='/adminLogin' element={<Login />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        {/* <Route path='/user-login' element={<UserLogin />} /> */}
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />

        {isAuth && (
          <>
          {
            role === "SuperAdmin" && <Route path='/superAdmin/*' element={<SuperAdmin />}/> 
          } 
          </>
        )}
        {isAuthAdmin && (
          <>
          {
          roles === "Admin" && <Route path='/owner-dashboard/*' element={<OwnerDashboard/>}/>
          }
          </>
          )}
          {isAuthUser && (
          <>
          {
          roles === "User" && <Route path='/tentant-dashboard/*' element={<TDashboard/>}/>
          }
          </>
          )}
      </Routes>
    </div>
  );
};

export default App;
