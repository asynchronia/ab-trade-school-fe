import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import overImg3 from '../../assets/overImg3.png'; // use your icon here

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
        p: 3,
        maxWidth: { xs: '100%', lg: 300 },
        textAlign: 'center',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Box
        component="img"
        src={overImg3}
        alt="Investment Icon"
        sx={{ width: 150, mb: 2, mx: 'auto' }}
      />

      <Typography variant="h6" lineHeight={'140%'} fontWeight="bold" sx={{ mb: 1 }}>
        Build Your Financial Knowledge Today
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Join thousands of learners accessing free courses designed to help you
        understand all about the stock market.
      </Typography>

      <Button
        fullWidth
        variant="contained"
        sx={{
          textTransform: 'none',
          fontWeight: 'bold',
          bgcolor: '#1E40AF',
          '&:hover': {
            bgcolor: '#1E40AF',
          },
        }}
        onClick={() => navigate('/signup')}
      >
        Sign Up to Learn
      </Button>
    </Box>
  );
};

export default RegisterForm;
