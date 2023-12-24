import { Box } from '@mui/material';
import React from 'react';

const Login = () => {
    return ( 
        <Box>
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
                <button type="submit">Login</button>
            </form>
        </Box>
     );
}
 
export default Login;