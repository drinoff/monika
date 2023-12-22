import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contacts from './Components/Contacts/Contacts';
import HeatPumps from './Components/Appliances/HeatPumps';
import ACS from './Components/Appliances/ACS';
import { db } from './config';
import { onValue, ref, set } from 'firebase/database';

function App() {
  const [appliances, setAppliances] = useState([]);
  useEffect(() => {
    const query = ref(db, '/appliances');

    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setAppliances(data);
    });
  }, []);

  const Push = () => {
    appliances.push({ username: 'o22', email: 'o22@gmail.com', age: '22' });

    set(ref(db, 'appliances'), {
      ...appliances,
    });
  };

  return (
    <div className="App">
      <button onClick={Push}>Add</button>
      <Navigation />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/appliances/heatPumps"
            element={<HeatPumps items={appliances.filter((item) => item.type === 'heatPump')} />}
          />
          <Route path="/appliances/aCs" element={<ACS />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
