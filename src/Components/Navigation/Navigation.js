import React, { useEffect, useState } from 'react';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Navigation.css';

const pages = ['За Нас', 'Уреди', 'Услуги', 'Контакти'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [subElNav, setSubElNav] = useState(null);
  const [subElNavDesktop, setSubElNavDesktop] = useState(null);
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
    console.log(page);
    setAnchorElNav(null);
    setSubElNav(null);
    setSubElNavDesktop(null);
    switch (page) {
      case 'За Нас':
        navigate('/');
        break;
      // case 'Уреди':
      //   navigate('/appliances');
      //   break;
      case 'Услуги':
        navigate('/services');
        break;
      case 'Контакти':
        navigate('/contact');
        break;
      case 'Термопомпи':
        setCurrentPage('Уреди');
        navigate('/appliances/heatPumps');
        break;
      case 'Климатици':
        setCurrentPage('Уреди');
        navigate('/appliances/aCs');
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
                <MenuItem
                  key={page}
                  onClick={(event) => (page === 'Уреди' ? setSubElNav(event.currentTarget) : handleCloseNavMenu(page))}
                >
                  <Typography textAlign="center">
                    {subElNav ? (
                      <Menu
                        id="menu-appbar"
                        anchorEl={subElNav}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        open={Boolean(subElNav)}
                        //onClose={() => {setSubElNav(null); handleCloseNavMenu(page)}}
                        sx={{
                          display: { xs: 'block', md: 'none' },
                        }}
                      >
                        {' '}
                        {subElNav ? (
                          <div>
                            <MenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCloseNavMenu('Термопомпи');
                              }}
                            >
                              Термопомпи
                            </MenuItem>
                            <MenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCloseNavMenu('Климатици');
                              }}
                            >
                              Климатици
                            </MenuItem>
                          </div>
                        ) : (
                          page
                        )}
                      </Menu>
                    ) : (
                      page
                    )}
                  </Typography>
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
                  onMouseEnter={(event) => (page === 'Уреди' ? setSubElNavDesktop(event.currentTarget) : null)}
                  sx={{
                    my: 2,
                    color: currentPage === page ? 'coral' : '#4462C4',
                    display: 'block',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  {page === 'Уреди' ? (
                    <div className="appliancesNavMenuContainer">
                      {page}
                      <KeyboardArrowDownIcon />
                    </div>
                  ) : (
                    page
                  )}
                </Button>
              ))}
            </div>
          </Box>
        </Toolbar>
      </Container>
      {subElNavDesktop ? (
        <Menu
          id="menu-appbar"
          anchorEl={subElNavDesktop}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(subElNavDesktop)}
          onClose={() => setSubElNavDesktop(null)}
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
          {' '}
          {subElNavDesktop ? (
            <div>
              <MenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseNavMenu('Термопомпи');
                }}
              >
                Термопомпи
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseNavMenu('Климатици');
                }}
              >
                Климатици
              </MenuItem>
            </div>
          ) : (
            'Уреди'
          )}
        </Menu>
      ) : null}
    </AppBar>
  );
}
export default ResponsiveAppBar;
