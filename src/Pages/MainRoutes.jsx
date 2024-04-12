import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Properties from './Properties';
import Profile from './Profile';
import Landlord from './Landlord';
import Tentants from './Tentants';
import Leases from './Leases';
import Utlility from './Utlility';
import Invoices from './Invoices';
import Payment from './Payment';
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
import EditInvoice from './EditInvoice';
import ViewInvoice from './ViewInvoice';
import Apartment from './Apartment';
import AddApartment from './AddApartment';
import ViewApartment from './ViewApartment';
import EditApartmentDetails from './EditApartmentDetails';
// import HelpDesk from './HelpDesk';
const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/properties' element={<Properties />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/landlords' element={<Landlord />} />
                <Route path='/tentants' element={<Tentants />} />
                <Route path='/leases' element={<Leases />} />
                <Route path='/utilities' element={<Utlility/>}/>
                <Route path='/invoices' element={<Invoices/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/reports' element={<Reports/>}/>
                <Route path='/dashboard' element={
                <Dashboard/>
                 }/>
                 <Route path='/apartment' element={<Apartment/>}/>
                  <Route path='/AddApartment' element={<AddApartment/>}/>
                <Route path='/AddLandLord' element={<AddLandlord/>}/>
                <Route path='/AddProperty' element={<AddProperty/>}/>
                <Route path='/AddPayment' element={<AddPayment/>}/>
                <Route path='/AddTentants' element={<AddTentants/>}/>
                <Route path='/AddLease' element={<AddLease/>}/>
                <Route path='/AddUtility' element={<AddUtility/>}/>
                <Route path='/view-apartment/:id' element={<ViewApartment/>}/>
                <Route path='/apartment/:id/edit' element={<EditApartmentDetails/>}/>
                <Route path='/viewUtility/:id' element={<ViewUtility/>}/>
                <Route path='/viewLease/:id' element={<ViewLease/>}/>
                <Route path='/viewPayment/:id' element={<ViewPayment/>}/>
                <Route path='/viewTentants/:id' element={<ViewTentant/>}/>
                <Route path='/viewLandlord/:id' element={<ViewLandLord/>}/>
                <Route path='/viewProperty/:id' element={<ViewProperties/>}/>
                <Route path='/viewInvoice/:id' element={<ViewInvoice/>}/>
                <Route path='/tentant/:id/edit' element={<EditTentant/>}/>
                <Route path='/landlord/:id/edit' element={<EditLandLord/>}/>  
                <Route path='/property/:id/edit' element={<EditProperty/>}/> 
                <Route path='/lease/:id/edit' element={<EditLease/>}/>
                <Route path='/utility/:id/edit' element={<EditUtility/>}/>
                <Route path='/invoice/:id/edit' element={<EditInvoice/>}/>
                {/* <Route path='/helpDesk' element={<HelpDesk/>}/> */}
            </Routes>
        </div>
    )
}
export default MainRoutes
