import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/blog-icon.png';

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: { xs: '100%', lg: 300 },
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Box
        component="img"
        src={icon}
        alt="Investment Icon"
        sx={{ width: 180, mb: 2, mx: 'auto' }}
      />

      <Typography
        variant="h5"
        lineHeight={'140%'}
        color="#42217F"
        fontWeight="bold"
        sx={{ mb: 1 }}
      >
        Stock Market Made Simple
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Start building your financial skills with easy-to-understand, expert-led
        courses.
      </Typography>

      <Button
        fullWidth
        variant="contained"
        sx={{
          textTransform: 'none',
          fontWeight: 'bold',
          bgcolor: '#42217F',
        }}
        onClick={() => navigate('/signup')}
      >
        Explore Free Courses
      </Button>
    </Box>
  );
};

export default RegisterForm;
