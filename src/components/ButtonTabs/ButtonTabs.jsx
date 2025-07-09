import { Box, Button } from '@mui/material';
import React from 'react';

const ButtonTabs = ({ tabs = [], selectedTab, onSelect }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {tabs.map((tab) => (
        <Button
          key={tab}
          onClick={() => onSelect(tab)}
          variant={selectedTab === tab ? 'contained' : 'outlined'}
          sx={{
            textTransform: 'none',
            borderRadius: '12px',
            px: '14px',
            py: '10px',
            backgroundColor: selectedTab === tab ? '#1E40AF' : 'transparent',
            color: selectedTab === tab ? '#fff' : '#1E40AF',
            borderColor: '#d1d5db',
            fontSize: '14px',
            '&:hover': {
              backgroundColor: selectedTab === tab ? '#1E40AF' : '#f3f4f6',
              borderColor: '#1E40AF',
            },
            minWidth: 120,
            flexShrink: 0,
          }}
        >
          {tab}
        </Button>
      ))}
    </Box>
  );
};

export default ButtonTabs;
