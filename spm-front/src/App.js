import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Appointment from './Pages/patient/appointmentDetails';
import CreateAppointment from './Pages/patient/createAppointment';
import EditStudent from './Pages/patient/editAppointment';
import SearchReacord from './Pages/patient/gg';
import Report from './Pages/patient/rerport';




function App() {
  return (
    <BrowserRouter>


           <Routes>

                <Route path="/add" element={<CreateAppointment/>}/>
                <Route path="/appointments/" element={<Appointment/>}/>
                <Route path="/report/" element={<Report/>}/>
                <Route path="/edit/:id" element={<EditStudent/>}/>
                <Route path="/" element={<SearchReacord/>}/>
           
          </Routes>


</BrowserRouter>
  );
}

export default App;
