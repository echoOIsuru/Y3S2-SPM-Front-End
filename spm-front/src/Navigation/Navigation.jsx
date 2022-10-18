import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Container from '../Components/Container';
import ProtectedRoute from '../Hooks/ProtectedRoute';
import AdminDashboard from '../Pages/UserManagement/AdminDashboard';
import EditAppointment from '../Pages/DoctorsManagement/EditAppointements';
import EditHealthStatus from '../Pages/DoctorsManagement/EditHealthStatus';
import ManageMedications from '../Pages/DoctorsManagement/ManageMedicalRecords';
import ListOngoingAppointments from '../Pages/DoctorsManagement/OngoingAppointmentsList';
import ListMedicalHistory from '../Pages/DoctorsManagement/PatientMedicalHistoryList';
import Login from '../Pages/UserManagement/Login';
import Register from '../Pages/UserManagement/Register';

import AddStock from '../Pages/PharmacyManagement/AddStock';
import UpdateStock from '../Pages/PharmacyManagement/UpdateStock';
import ViewStocks from '../Pages/PharmacyManagement/ViewStocks';
import PharmacyDashboard from '../Pages/PharmacyManagement/PharmacyDashboard';
import DoctorReports from '../Pages/DoctorsManagement/DoctorReports';
import CuredList from '../Pages/DoctorsManagement/CuredPatientsList';
import AppointementsList from './../Pages/DoctorsManagement/AppointementsList';

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route element={<ProtectedRoute />}> */}
                <Route path='/dashboard' element={<Container data={<AdminDashboard />} />} />
                {/* pharmacy management routes */}
                <Route path='/pharmacy/add_stock' element={<Container data={<AddStock />} />}></Route>
                <Route path='/pharmacy/update_stock' element={<Container data={<UpdateStock />} />}></Route>
                <Route path='/pharmacy/view_stocks' element={<Container data={<ViewStocks />} />}></Route>
                <Route path='/pharmacy/pharmacy_dashboard' element={<Container data={<PharmacyDashboard />} />}></Route>
                <Route path='/onGoingAppointments' element={<Container data={<ListOngoingAppointments />} />} />
                <Route path='/appointments/edit/:id' element={<Container data={<EditAppointment />} />} />
                <Route path='/medicalDetails' element={<Container data={<ListMedicalHistory />}/>} />
                <Route path='/medication/create' element={<Container data={<ManageMedications />}/>} />
                <Route path='/medication/edit/:id' element={<Container data={<ManageMedications />} />}/>
                <Route path='/healthStatus/edit' element={<Container data={<EditHealthStatus />} />}/>
                <Route path='/view/doctorReports' element={<Container data={<DoctorReports />} />}/>
                <Route path='/view/curedPatients' element={<Container data={<CuredList />} />}/>
                <Route path='/view/appointementsList' element={<Container data={<AppointementsList />} />}/>
            {/* </Route> */}

        </Routes>
    )
}

export default Navigation