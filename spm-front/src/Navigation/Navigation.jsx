import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import AdminDashboard from '../Pages/UserManagement/AdminDashboard';
import Appointment from '../Pages/patient/appointmentDetails';
import CreateAppointment from '../Pages/patient/createAppointment';
import EditStudent from '../Pages/patient/editAppointment';
import SearchReacord from '../Pages/patient/gg';
import Report from '../Pages/patient/rerport';

function Navigation() {
    return (
        <Routes>
            <Route path="/add" element={<CreateAppointment/>}/>
                <Route path="/appointments/" element={<Appointment/>}/>
                <Route path="/report/" element={<Report/>}/>
                <Route path="/edit/:id" element={<EditStudent/>}/>
                <Route path="/patient-home" element={<SearchReacord/>}/>
        </Routes>
    )
}

export default Navigation