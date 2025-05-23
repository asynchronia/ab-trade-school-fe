import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const CustomDropdown = ({ label, options, value, onChange, sx = {} }) => {
  return (
    <FormControl
      size="small"
      fullWidth
      sx={{
        maxWidth: { xs: '100%', sm: 160 },
        flexGrow: 1,
        ...sx, 
      }}
    >
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
