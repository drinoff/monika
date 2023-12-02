import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../Assets/logo.svg';
import './Navigation.css';

const pages = ['За Нас', 'Уреди', 'Услуги', 'Контакти'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentPage, setCurrentPage] = useState('За Нас');
  const navigate = useNavigate();
  const location = useLocation();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setCurrentPage('За Нас');
        break;
      case '/appliances':
        setCurrentPage('Уреди');
        break;
      case '/services':
        setCurrentPage('Услуги');
        break;
      case '/contact':
        setCurrentPage('Контакти');
        break;
      default:
    }
  }, [location.pathname]);

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    switch (page) {
      case 'За Нас':
        navigate('/');
        break;
      case 'Уреди':
        navigate('/appliances');
        break;
      case 'Услуги':
        navigate('/services');
        break;
      case 'Контакти':
        navigate('/contact');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FCFCFC' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <img className="mobileVersionLogo" src={logo} alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <img src={logo} alt="logo" />
            <div className="navLinks">
              {pages.map((page) => (
                <Button
                  disableRipple
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: currentPage === page ? 'coral':'#4462C4', display: 'block', fontWeight: 'bold' }}
                >
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
export default ResponsiveAppBar;
