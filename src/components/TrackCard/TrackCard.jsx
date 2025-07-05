import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../../utils/theme';

const TrackCard = ({ icon, title, description, buttonText }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        p: { xs: 3, sm: 4 },
        borderRadius: '16px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flexShrink: {
          xs: 0,
          lg: 'unset',
        },
        minWidth: {
          xs: '280px',
          sm: '320px',
          lg: 'unset',
        },
        width: {
          xs: '280px',
          sm: '320px',
          lg: '100%',
        },
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
        // variant="h6"
        component="h3"
        sx={{
          fontWeight: theme.typography.h6.fontWeight,
          fontSize: theme.typography.h6.fontSize,
          mb: 1,
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: theme.typography.body2.fontSize,
          color: '#4b5563',
          mb: 3,
          textAlign: 'center',
          flexGrow: 1,
        }}
      >
        {description}
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: theme.colors.blue.main,
          color: 'white',
          px: 2,
          py: 1,
          borderRadius: '8px',
          fontWeight: 400,
          textTransform: 'none',
          fontSize: theme.typography.body2.fontSize,
          '&:hover': {
            backgroundColor: theme.colors.blue.dark,
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
          onClick={() => navigate('/courses')}
        >
          →
        </Box>
      </Button>
    </Box>
  );
};

export default TrackCard;
