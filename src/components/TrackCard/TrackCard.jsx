import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const TrackCard = ({ icon, title, description, buttonText }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        p: 4,
        borderRadius: '16px',
        width: '100%',
        maxWidth: 240,
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{
          height: 48,
          mb: 2,
        }}
      />

      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontWeight: 600,
          fontSize: '1.25rem',
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: '0.95rem',
          maxWidth: 250,
          color: '#4b5563',
          mb: 3,
          textAlign: 'center',
          flex: 1,
        }}
      >
        {description}
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#1d4ed8',
          color: 'white',
          px: 2,
          py: 1,
          borderRadius: '8px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: '#1e40af',
          },
        }}
      >
        {buttonText}
        <Box
          component="span"
          sx={{
            ml: 0.5,
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateX(2px)',
            },
          }}
        >
          →
        </Box>
      </Button>
    </Box>
  );
};

export default TrackCard;
