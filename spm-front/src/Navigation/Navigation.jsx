import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Container from '../Components/Container';
import ProtectedRoute from '../Hooks/ProtectedRoute';
import AdminDashboard from '../Pages/UserManagement/AdminDashboard';
import Login from '../Pages/UserManagement/Login';
import Register from '../Pages/UserManagement/Register';
import UserManagement from '../Pages/UserManagement/UserManagement';

import AddStock from '../Pages/PharmacyManagement/AddStock';
import UpdateStock from '../Pages/PharmacyManagement/UpdateStock';
import ViewStocks from '../Pages/PharmacyManagement/ViewStocks';
import PharmacyDashboard from '../Pages/PharmacyManagement/PharmacyDashboard';
import ViewPrescriptions from '../Pages/PharmacyManagement/ViewPrescriptions';
import AddPrescription from '../Pages/PharmacyManagement/AddPrescription';
import Reports from '../Pages/PharmacyManagement/Reports';
import PrescriptionDetails from '../Pages/PharmacyManagement/PrescriptionDetails';
import AddUser from '../Pages/UserManagement/AddUser';
import UserProfile from '../Pages/UserManagement/UserProfile';
import { Setting } from '../Pages/UserManagement/Setting';
import UsersReport from '../Pages/UserManagement/UsersReport';

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={<Container data={<AdminDashboard />} />} />
                <Route path='/user-management' element={<Container data={<UserManagement />} />} />
                <Route path='/add-users' element={<Container data={<AddUser />} />} />
                <Route path='/profile' element={<Container data={<UserProfile />} />} />
                <Route path='/settings' element={<Container data={<Setting />} />} />
                <Route path='/users-reports' element={<Container data={<UsersReport />} />} />
                {/* pharmacy management routes */}
                <Route path='/pharmacy/add_stock' element={<Container data={<AddStock />} />}></Route>
                <Route path='/pharmacy/update_stock' element={<Container data={<UpdateStock />} />}></Route>
                <Route path='/pharmacy/view_stocks' element={<Container data={<ViewStocks />} />}></Route>
                <Route path='/pharmacy/pharmacy_dashboard' element={<Container data={<PharmacyDashboard />} />}></Route>
                <Route path='/pharmacy/view_prescriptions' element={<Container data={<ViewPrescriptions/>}/>}></Route>
                <Route path='/pharmacy/add_prescription' element={<Container data={<AddPrescription/>}/>}></Route>
                <Route path='/pharmacy/reports' element={<Container data={<Reports/>}/>}></Route>
                <Route path='/pharmacy/more_details' element={<Container data={<PrescriptionDetails/>}/>}></Route>
            </Route>

        </Routes>
    )
}

export default Navigation