import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

import CreateAppointment from './Pages/patient/createAppointment';

function App() {
  return (
    <BrowserRouter>


           <Routes>

                <Route path="/add" element={<CreateAppointment/>}/>

          </Routes>


</BrowserRouter>
  );
}

export default App;
