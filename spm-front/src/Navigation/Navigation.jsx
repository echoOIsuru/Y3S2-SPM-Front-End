import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import AdminDashboard from '../Pages/UserManagement/AdminDashboard';
import EditAppointment from '../Pages/DoctorsManagement/EditAppointements';
import EditHealthStatus from '../Pages/DoctorsManagement/EditHealthStatus';
import ManageMedications from '../Pages/DoctorsManagement/ManageMedicalRecords';
import ListOngoingAppointments from '../Pages/DoctorsManagement/OngoingAppointmentsList';
import ListMedicalHistory from '../Pages/DoctorsManagement/PatientMedicalHistoryList';

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<AdminDashboard />} />
            <Route path='/test' element={<div>test</div>} />
            <Route path='/onGoingAppointments' element={<ListOngoingAppointments />} />
            <Route path='/appointments/edit/:id' element={<EditAppointment />} />
            <Route path='/medicalDetails' element={<ListMedicalHistory />} />
            <Route path='/medication/create' element={<ManageMedications />} />
            <Route path='/medication/edit/:id' element={<ManageMedications />} />
            <Route path='/healthStatus/edit' element={<EditHealthStatus />} />
        </Routes>
    )
}

export default Navigation