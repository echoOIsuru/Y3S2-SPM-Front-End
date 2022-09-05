import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Navigation from './Navigation/Navigation';
import '../src/css/sb-admin-2.min.css';
import TopNavigation from './Components/TopNavigation';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <body id="page-top">
        <div id="wrapper">
          <NavigationBar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <TopNavigation />
              {/* Content Route */}
              <Navigation />
              {/* End */}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
