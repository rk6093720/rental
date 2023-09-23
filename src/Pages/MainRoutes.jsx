import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Properties from './Properties';
import Setting from './Setting';
import Profile from './Profile';
import Landlord from './Landlord';
import Tentants from './Tentants';
import Leases from './Leases';
import Logout from './Logout';
import Utlility from './Utlility';
import Invoices from './Invoices';
import Payment from './Payment';
import VacateNotices from './VacateNotices';
import Reports from './Reports';
import Dashboard from './Dashboard';
import ForgetPassword from './ForgetPassword';

// import { useSelector } from 'react-redux';

const MainRoutes = () => {
    // const auth = useSelector((state)=> state.Auth.isAuth)
    return (
        <div>
            <Routes>
              <Route path='/adminLogin' element={<Login />} />
                <Route path='/adminSignup' element={<Signup />} />
                <Route path='/properties' element={<Properties />} />
                <Route path='/setting' element={<Setting />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/landlords' element={<Landlord />} />
                <Route path='/tentants' element={<Tentants />} />
                <Route path='/leases' element={<Leases />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/utilities' element={<Utlility/>}/>
                <Route path='/invoices' element={<Invoices/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/vacateNotices' element={<VacateNotices/>}/>
                <Route path='/reports' element={<Reports/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                 
            </Routes>
        </div>
    )
}

export default MainRoutes
