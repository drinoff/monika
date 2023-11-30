import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from './Assets/logo.svg';
import './Navigation.css';

const pages = ['За Нас', 'Уреди', 'Услуги', 'Контакти'];

function Navigation() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FCFCFC' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <img src={logo} alt="" />
            <div className="navLinks">
              {pages.map((page) => (
                <Button disableRipple key={page} sx={{ my: 2, color: '#4462C4', display: 'block', fontWeight: 'bold' }}>
                  {page}
                </Button>
              ))}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
