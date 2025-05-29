import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useRef, useState } from 'react';
import './CustomDropdown.scss';

const CustomDropdown = ({ title, options }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`dropdown ${open ? 'active' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{title}</span>
        {open ? (
          <ExpandLessIcon fontSize="small" />
        ) : (
          <ExpandMoreIcon fontSize="small" />
        )}
      </div>
      {open && (
        <div className="dropdown-list">
          {options.map((option, idx) => (
            <div className="dropdown-item" key={idx}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
