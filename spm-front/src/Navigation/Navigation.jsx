import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import AdminDashboard from '../Pages/UserManagement/AdminDashboard';

import AddStock from '../Pages/PharmacyManagement/AddStock';
import UpdateStock from '../Pages/PharmacyManagement/UpdateStock';
import ViewStocks from '../Pages/PharmacyManagement/ViewStocks';
import PharmacyDashboard from '../Pages/PharmacyManagement/PharmacyDashboard';

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<AdminDashboard />} />
            <Route path='/test' element={<div>test</div>} />

            {/* pharmacy management routes */}
            <Route path='/pharmacy/add_stock' element={<AddStock/>}></Route>
            <Route path='/pharmacy/update_stock' element={<UpdateStock/>}></Route>
            <Route path='/pharmacy/view_stocks' element={<ViewStocks/>}></Route>
            <Route path='/pharmacy/pharmacy_dashboard' element={<PharmacyDashboard/>}></Route>

        </Routes>
    )
}

export default Navigation