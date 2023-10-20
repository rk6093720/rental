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
import AddLandlord from './AddLandlord';
import ViewLandLord from './ViewLandLord';
import EditLandLord from './EditLandLord';
import ViewProperties from './ViewProperties';
import AddProperty from './AddProperty';
import EditProperty from './EditProperty';
import AddTentants from './AddTentants';
import ViewTentant from './ViewTentant';
import EditTentant from './EditTentant';
import AddLease from './AddLease';
import ViewLease from './ViewLease';
import EditLease from './EditLease';
import AddUtility from './AddUtility';
import ViewUtility from './ViewUtility';
import EditUtility from './EditUtility';
import AddPayment from './AddPayment';
import ViewPayment from './ViewPayment';
import AddVacateNotice from './AddVacateNotice';
import ViewVacateNotice from './ViewVacateNotice';
import EditVacateNotice from './EditVacateNotice';
const MainRoutes = () => {
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
                <Route path='/AddLandLord' element={<AddLandlord/>}/>
                <Route path='/AddProperty' element={<AddProperty/>}/>
                <Route path='/AddPayment' element={<AddPayment/>}/>
                <Route path='/AddTentants' element={<AddTentants/>}/>
                <Route path='/AddLease' element={<AddLease/>}/>
                <Route path='/AddUtility' element={<AddUtility/>}/>
                <Route path='/AddVacateNotice' element={<AddVacateNotice/>}/>
                <Route path='/viewUtility/:id' element={<ViewUtility/>}/>
                <Route path='/viewLease/:id' element={<ViewLease/>}/>
                <Route path='/viewPayment/:id' element={<ViewPayment/>}/>
                <Route path='/viewTentants/:id' element={<ViewTentant/>}/>
                <Route path='/viewLandlord/:id' element={<ViewLandLord/>}/>
                <Route path='/viewProperty/:id' element={<ViewProperties/>}/>
                <Route path='/viewVacateNotice/:id' element={<ViewVacateNotice/>}/> 
                <Route path='/tentant/:id/edit' element={<EditTentant/>}/>
                <Route path='/landlord/:id/edit' element={<EditLandLord/>}/>  
                <Route path='/property/:id/edit' element={<EditProperty/>}/> 
                <Route path='/lease/:id/edit' element={<EditLease/>}/>
                <Route path='/utility/:id/edit' element={<EditUtility/>}/>
                <Route path='/vacatenotice/:id/edit' element={<EditVacateNotice/>}/>    
            </Routes>
        </div>
    )
}
export default MainRoutes
