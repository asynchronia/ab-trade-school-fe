import { Logout } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import abLogo from '../../assets/ab-logo.svg';
import avatar from '../../assets/avatar.png';
import appLogo from '../../assets/logo.svg';
import { dropdownData } from '../../utils/data';
import Button from '../Button/Button';
import './Navbar.scss';

const Navbar = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      id: 'courses',
      label: 'Courses ▾',
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

  return (
    <header className="navbar-header">
      <div className="logo-container">
        <img src={appLogo} alt="App Logo" className="app-logo" />
      </div>

      <nav className="main-nav">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
            onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
            onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
          >
            <button className="nav-button">{item.label}</button>

            {isDropdownOpen && item.hasDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-column">
                  <h3>Categories</h3>
                  {dropdownData.categories.map((category) => (
                    <div key={category} className="dropdown-item">
                      {category}
                    </div>
                  ))}
                </div>
                <div className="dropdown-column">
                  <h3>Level</h3>
                  {dropdownData.levels.map((level) => (
                    <div key={level} className="dropdown-item">
                      {level}
                    </div>
                  ))}
                </div>
                <div className="dropdown-column">
                  <h3>Language</h3>
                  {dropdownData.languages.map((language) => (
                    <div key={language} className="dropdown-item">
                      {language}
                    </div>
                  ))}
                </div>
                <div className="filter-btn-container">
                  <button className="filter-button">Filter Now</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="right-section">
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
            {' '}
            {/* Add this wrapper div */}
            <img
              src={avatar}
              alt="avatar"
              className="avatar"
              onClick={() => setIsProfileMenuOpen((prev) => !prev)}
            />
            {isProfileMenuOpen && (
              <div className="profile-menu">
                <div className="profile-item">User name: John Doe</div>
                <div className="profile-item">
                  <Logout />{' '}
                  Logout
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
      </div>
    </header>
  );
};

export default Navbar;
