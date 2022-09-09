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

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={<Container data={<AdminDashboard />} />} />
                <Route path='/user-management' element={<Container data={<UserManagement />} />} />
            </Route>
        </Routes>
    )
}

export default Navigation