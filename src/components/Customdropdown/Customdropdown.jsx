import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const CustomDropdown = ({ label, options, value, onChange }) => {
  return (
 <FormControl size="small" sx={{ minWidth: 160 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;
