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

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={<Container data={<AdminDashboard />} />} />
                <Route path='/user-management' element={<Container data={<UserManagement />} />} />
                {/* pharmacy management routes */}
                <Route path='/pharmacy/add_stock' element={<Container data={<AddStock />} />}></Route>
                <Route path='/pharmacy/update_stock' element={<Container data={<UpdateStock />} />}></Route>
                <Route path='/pharmacy/view_stocks' element={<Container data={<ViewStocks />} />}></Route>
                <Route path='/pharmacy/pharmacy_dashboard' element={<Container data={<PharmacyDashboard />} />}></Route>
            </Route>

        </Routes>
    )
}

export default Navigation