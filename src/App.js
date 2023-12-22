import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contacts from './Components/Contacts/Contacts';
import HeatPumps from './Components/Appliances/HeatPumps';
import ACS from './Components/Appliances/ACS';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appliances/heatPumps" element={<HeatPumps />} />
          <Route path="/appliances/aCs" element={<ACS />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
