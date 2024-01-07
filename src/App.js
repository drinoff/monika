import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { db } from './config';
import { onValue, ref, set } from 'firebase/database';
import { getAuth, signOut } from 'firebase/auth';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contacts from './Components/Contacts/Contacts';
import HeatPumps from './Components/Appliances/HeatPumps';
import Login from './Components/Login/Login';
import Add from './Components/Add/Add';

import './App.css';

function App() {
  const [appliances, setAppliances] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const query = ref(db, '/appliances');

    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setAppliances(data);
    });
  }, []);

  const Push = (data) => {
    appliances.push(data);

    set(ref(db, 'appliances'), {
      ...appliances,
    }).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  };

  // const handleAdminClick = () => {
  //   navigate('/login');
  // };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Navigation logout={logout} />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/appliances/heatPumps"
            element={<HeatPumps items={appliances && appliances.filter((item) => item.type === 'heatPump')} />}
          />
          <Route
            path="/appliances/aCs"
            element={<HeatPumps items={appliances && appliances.filter((item) => item.type === 'aCs')} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={JSON.parse(localStorage.getItem('user')) ? <Add Push={Push} /> : <Login />} />
        </Routes>
      </div>
      {/* {!navigator.userAgentData.mobile && (
        <div className="footer">
          <p>© 2023 - All rights reserved</p>
          <p onClick={handleAdminClick}>Administration</p>
        </div>
      )} */}
    </div>
  );
}

export default App;
