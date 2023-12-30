import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { TextField } from '@mui/material';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const auth = getAuth();
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          localStorage.setItem('user', JSON.stringify(userCredential.user));
          navigate('/');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Box sx={{ marginTop: '200px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <TextField value={email} label={'Email'} onChange={(e) => setEmail(e.target.value)} />

      <TextField value={password} label={'Password'} type="password" onChange={(e) => setPassword(e.target.value)} />
      <button className="loginButton" onClick={signIn}>
        Login
      </button>
    </Box>
  );
};

export default Login;
