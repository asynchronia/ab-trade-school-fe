import { Close as CloseIcon, Search as SearchIcon } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';

const SearchBar = ({
  placeholder = 'Search...',
  onSearch,
  onClear,
  fullWidth = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
    if (onClear) onClear();
  };

  return (
    <TextField
      size="medium"
      value={searchQuery}
      onChange={handleSearch}
      placeholder={placeholder}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ marginRight: '4px' }}>
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
        endAdornment: searchQuery && (
          <InputAdornment position="end" sx={{ marginLeft: '4px' }}>
            <IconButton
              onClick={handleClear}
              edge="end"
              size="small"
              sx={{ padding: '4px' }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          paddingTop: '4px',
          paddingBottom: '4px',
          height: '36px',
        },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
          paddingLeft: '8px',
        },
      }}
    />
  );
};

export default SearchBar;
