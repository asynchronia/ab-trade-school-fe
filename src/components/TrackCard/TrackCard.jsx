import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import theme from '../../utils/theme';

const TrackCard = ({ icon, title, description, buttonText }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        p: { xs: 3, sm: 4 },
        borderRadius: '16px',
        width: '100%',
        maxWidth: { xs: '100%', sm: 260 },
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{
          height: { xs: 40, sm: 48 },
          mb: 2,
        }}
      />

      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontWeight: 600,
          fontSize: theme.typography.h6.fontSize,
          mb: 1,
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: theme.typography.body2.fontSize,
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
        fullWidth
        sx={{
          backgroundColor: '#1d4ed8',
          color: 'white',
          px: 2,
          py: 1,
          borderRadius: '8px',
          fontWeight: 500,
          textTransform: 'none',
          fontSize: { xs: '0.85rem', sm: '0.9rem' },
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
            display: 'inline-block',
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
