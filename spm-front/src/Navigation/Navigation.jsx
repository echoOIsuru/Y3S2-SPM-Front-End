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
import Container from '../Components/Container';
import ProtectedRoute from '../Hooks/ProtectedRoute';



import EditAppointment from '../Pages/DoctorsManagement/EditAppointements';
import EditHealthStatus from '../Pages/DoctorsManagement/EditHealthStatus';
import ManageMedications from '../Pages/DoctorsManagement/ManageMedicalRecords';
import ListOngoingAppointments from '../Pages/DoctorsManagement/OngoingAppointmentsList';
import ListMedicalHistory from '../Pages/DoctorsManagement/PatientMedicalHistoryList';


import Login from '../Pages/UserManagement/Login';
import Register from '../Pages/UserManagement/Register';
import UserManagement from '../Pages/UserManagement/UserManagement';

import AddStock from '../Pages/PharmacyManagement/AddStock';
import UpdateStock from '../Pages/PharmacyManagement/UpdateStock';
import ViewStocks from '../Pages/PharmacyManagement/ViewStocks';
import PharmacyDashboard from '../Pages/PharmacyManagement/PharmacyDashboard';


import DoctorReports from '../Pages/DoctorsManagement/DoctorReports';
import CuredList from '../Pages/DoctorsManagement/CuredPatientsList';
import AppointementsList from './../Pages/DoctorsManagement/AppointementsList';
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
            <Route path="/add" element={<CreateAppointment/>}/>
                <Route path="/appointments/" element={<Appointment/>}/>
                <Route path="/report/" element={<Report/>}/>
                <Route path="/edit/:id" element={<EditStudent/>}/>
                <Route path="/patient-home" element={<SearchReacord/>}/>
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
                <Route path='/onGoingAppointments' element={<Container data={<ListOngoingAppointments />} />} />
                <Route path='/appointments/edit/:id' element={<Container data={<EditAppointment />} />} />
                <Route path='/medicalDetails' element={<Container data={<ListMedicalHistory />}/>} />
                <Route path='/medication/create' element={<Container data={<ManageMedications />}/>} />
                <Route path='/medication/edit/:id' element={<Container data={<ManageMedications />} />}/>
                <Route path='/healthStatus/edit' element={<Container data={<EditHealthStatus />} />}/>
                <Route path='/view/doctorReports' element={<Container data={<DoctorReports />} />}/>
                <Route path='/view/curedPatients' element={<Container data={<CuredList />} />}/>
                <Route path='/view/appointementsList' element={<Container data={<AppointementsList />} />}/>
           
            </Route>

        </Routes>
    )
}

export default Navigation