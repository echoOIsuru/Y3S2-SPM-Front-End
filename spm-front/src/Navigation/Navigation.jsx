import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import AdminDashboard from '../Pages/UserManagement/AdminDashboard';

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<AdminDashboard />} />
            <Route path='/test' element={<div>test</div>} />
        </Routes>
    )
}

export default Navigation