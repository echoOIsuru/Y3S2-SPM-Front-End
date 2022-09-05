import { BrowserRouter } from 'react-router-dom';
// import './App.css';
import NavigationBar from './Components/NavigationBar';
import Navigation from './Navigation/Navigation';
import '../src/css/sb-admin-2.min.css';
import TopNavigation from './Components/TopNavigation';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>

      <Navigation />

    </BrowserRouter>
  );
}

export default App;
