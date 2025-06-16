import {
    ExpandLess,
    ExpandMore,
    Logout,
    Menu as MenuIcon,
} from '@mui/icons-material';
import {
    Box,
    Collapse,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import abLogo from '../../assets/ab-logo.svg';
import avatar from '../../assets/avatar.png';
import { default as appLogo, default as logo } from '../../assets/logo.svg';
import { dropdownData } from '../../utils/data';
import Button from '../Button/Button';
import './Navbar.scss';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedDrawerItem, setExpandedDrawerItem] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  const navItems = [
    {
      id: 'courses',
      label: 'Courses',
      hasDropdown: true,
    },
    {
      id: 'webinars',
      label: 'Webinars',
      hasDropdown: false,
    },
    {
      id: 'trade-events',
      label: 'Trade Events',
      hasDropdown: false,
    },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleDrawerItemClick = (itemId) => {
    if (navItems.find((item) => item.id === itemId)?.hasDropdown) {
      setExpandedDrawerItem(expandedDrawerItem === itemId ? null : itemId);
    } else {
      //   navigate(`/${itemId}`);
      setIsDrawerOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsDrawerOpen(false);
    navigate('/');
    enqueueSnackbar('Logged out successfully', {
      variant: 'info',
    });
  };

  const renderDrawerContent = () => (
    <Box
      sx={{
        width: 280,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Logo Section */}
      <Box sx={{ p: 2, borderBottom: '1px solid #e5e7eb' }}>
        <img src={logo} alt="App Logo" style={{ width: '120px' }} />
      </Box>

      {/* Navigation Items */}
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <div key={item.id}>
            <ListItem
              button
              onClick={() => handleDrawerItemClick(item.id)}
              sx={{
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                  '& .MuiListItemText-primary': {
                    color: '#2563eb',
                  },
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 500,
                    color: '#374151',
                  },
                }}
              />
              {item.hasDropdown &&
                (expandedDrawerItem === item.id ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                ))}
            </ListItem>

            {/* Dropdown Content */}
            {item.hasDropdown && (
              <Collapse
                in={expandedDrawerItem === item.id}
                timeout="auto"
                unmountOnExit
              >
                <Box sx={{ pl: 2, pr: 2, pb: 2 }}>
                  {/* Categories */}
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 'bold', mb: 1, color: '#111827' }}
                  >
                    Categories
                  </Typography>
                  {dropdownData.categories.map((category) => (
                    <ListItem
                      key={category}
                      button
                      sx={{
                        pl: 2,
                        py: 0.5,
                        '&:hover': {
                          backgroundColor: '#f3f4f6',
                          '& .MuiListItemText-primary': {
                            color: '#2563eb',
                          },
                        },
                      }}
                    >
                      <ListItemText
                        primary={category}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontSize: '0.875rem',
                            color: '#4b5563',
                          },
                        }}
                      />
                    </ListItem>
                  ))}

                  {/* Levels */}
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 'bold', mb: 1, mt: 2, color: '#111827' }}
                  >
                    Level
                  </Typography>
                  {dropdownData.levels.map((level) => (
                    <ListItem
                      key={level}
                      button
                      sx={{
                        pl: 2,
                        py: 0.5,
                        '&:hover': {
                          backgroundColor: '#f3f4f6',
                          '& .MuiListItemText-primary': {
                            color: '#2563eb',
                          },
                        },
                      }}
                    >
                      <ListItemText
                        primary={level}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontSize: '0.875rem',
                            color: '#4b5563',
                          },
                        }}
                      />
                    </ListItem>
                  ))}

                  {/* Languages */}
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 'bold', mb: 1, mt: 2, color: '#111827' }}
                  >
                    Language
                  </Typography>
                  {dropdownData.languages.map((language) => (
                    <ListItem
                      key={language}
                      button
                      sx={{
                        pl: 2,
                        py: 0.5,
                        '&:hover': {
                          backgroundColor: '#f3f4f6',
                          '& .MuiListItemText-primary': {
                            color: '#2563eb',
                          },
                        },
                      }}
                    >
                      <ListItemText
                        primary={language}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontSize: '0.875rem',
                            color: '#4b5563',
                          },
                        }}
                      />
                    </ListItem>
                  ))}

                  {/* Filter Button */}
                  <Box sx={{ mt: 2 }}>
                    <Button
                      title="Filter Now"
                      variant="contained"
                      onClick={() => {
                        setIsDrawerOpen(false);
                      }}
                      style={{ width: '100%' }}
                    />
                  </Box>
                </Box>
              </Collapse>
            )}
          </div>
        ))}
      </List>

      <Divider />

      {/* Auth Section */}
      <Box sx={{ p: 2 }}>
        {!user ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button
              title="Signup"
              variant="outlined"
              onClick={() => {
                navigate('/signup');
                setIsDrawerOpen(false);
              }}
              style={{ width: '100%' }}
            />
            <Button
              title="Login"
              variant="contained"
              onClick={() => {
                navigate('/login');
                setIsDrawerOpen(false);
              }}
              style={{ width: '100%' }}
            />
          </Box>
        ) : (
          <Box>
            {!isMobile && (
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}
              >
                <img
                  src={avatar}
                  alt="avatar"
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                />
              </Box>
            )}
            <ListItem
              button
              onClick={() => {
                navigate('/profile');
                setIsDrawerOpen(false);
              }}
              sx={{
                pl: 0,
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                  '& .MuiListItemText-primary': {
                    color: '#2563eb',
                  },
                },
              }}
            >
              <img
                src={avatar}
                alt="avatar"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  marginRight: '8px',
                }}
              />
              {user?.name}
            </ListItem>
            <ListItem
              button
              onClick={handleLogout}
              sx={{
                pl: 0,
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                  '& .MuiListItemText-primary': {
                    color: '#2563eb',
                  },
                },
              }}
            >
              <Logout sx={{ mr: 1, color: '#374151' }} />
              <ListItemText
                primary="Logout"
                sx={{
                  '& .MuiListItemText-primary': {
                    color: '#374151',
                  },
                }}
              />
            </ListItem>
          </Box>
        )}

        {/* Powered by logo */}
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <img
            src={abLogo}
            alt="Powered by AliceBlue"
            style={{ width: '80px' }}
          />
        </Box>
      </Box>
    </Box>
  );

  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="logo-container">
          <img src={appLogo} alt="App Logo" className="app-logo" />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="main-nav">
            {navItems.map((item) => (
              <div
                key={item.id}
                className={`nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() =>
                  item.hasDropdown && setIsDropdownOpen(false)
                }
              >
                <button className="nav-button">
                  {item.label} {item.hasDropdown && ' ▾'}
                </button>

                {isDropdownOpen && item.hasDropdown && (
                  <div className="dropdown-menu-new">
                    <div className="dropdown-content">
                      {/* Categories Column */}
                      <div className="dropdown-column">
                        <h3 className="column-header">Categories</h3>
                        <div className="column-items">
                          {dropdownData.categories.map((category) => (
                            <div key={category} className="dropdown-item-new">
                              {category}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Level Column */}
                      <div className="dropdown-column">
                        <h3 className="column-header">Level</h3>
                        <div className="column-items">
                          {dropdownData.levels.map((level) => (
                            <div key={level} className="dropdown-item-new">
                              {level}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Language Column */}
                      <div className="dropdown-column">
                        <h3 className="column-header">Language</h3>
                        <div className="column-items">
                          {dropdownData.languages.map((language) => (
                            <div key={language} className="dropdown-item-new">
                              {language}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Filter Button */}
                    <div className="filter-section">
                      <button className="filter-button-new">Filter Now</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}

        <div className="right-section">
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: '#374151' }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop Auth Buttons */}
          {!isMobile && (
            <>
              {!user ? (
                <div className="auth-buttons">
                  <Button
                    title="Signup"
                    variant="contained"
                    onClick={() => navigate('/signup')}
                  />
                  <Button
                    title="Login"
                    variant="outlined"
                    onClick={() => navigate('/login')}
                  />
                </div>
              ) : (
                <div className="avatar-container">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="avatar"
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  />
                  {isProfileMenuOpen && (
                    <div className="profile-menu">
                      <div className="profile-item">{user?.name}</div>
                      <div className="profile-item" onClick={handleLogout}>
                        <Logout /> Logout
                      </div>
                    </div>
                  )}
                </div>
              )}

              <img
                src={abLogo}
                alt="Powered by AliceBlue"
                className="powered-by-logo"
              />
            </>
          )}
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
      >
        {renderDrawerContent()}
      </Drawer>
    </div>
  );
};

export default Navbar;
