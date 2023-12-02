import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Appliances from './Components/Appliances/Appliances';
import Services from './Components/Services/Services';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
