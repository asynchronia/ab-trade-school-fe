import {
    Box,
    Button,
    Stack,
    styled,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import React, { useState } from 'react';

const OtpInput = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    width: '100%',
    height: { xs: '45px', sm: '50px' },
    '& input': {
      textAlign: 'center',
      fontSize: { xs: '1rem', sm: '1.25rem' },
      padding: { xs: '6px', sm: '8px' },
    },
  },
}));

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    const fullOtp = otp.join('');
    setIsLoading(true);
    if (fullOtp.length === 6) {
      setMessage('Verifying OTP...');
      console.log('Verifying OTP:', fullOtp);
      setIsLoading(false);
      setMessage('OTP verified successfully!');
    } else {
      setMessage('Please enter a complete 6-digit OTP');
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
        mx: 'auto',
        mt: 6,
        gap: { xs: 2, sm: 3 },
      }}
    >
      <Stack
        direction="row"
        spacing={isMobile ? 1 : 2}
        sx={{
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        {otp.map((digit, index) => (
          <Box key={index} sx={{ width: '100%', maxWidth: '50px' }}>
            <OtpInput
              id={`otp-input-${index}`}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              variant="outlined"
              inputProps={{
                maxLength: 1,
                'aria-label': `OTP digit ${index + 1}`,
              }}
            />
          </Box>
        ))}
      </Stack>

      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        {message}
      </Typography>

      <Box
        sx={{
          width: '100%',
          mt: 1,
        }}
      >
        <Button
          variant="contained"
          onClick={handleVerify}
          //   fullWidth={isMobile}
          fullWidth
          disabled={isLoading}
          sx={{
            py: { xs: 1.25, sm: 1.5 },
            minHeight: '48px',
          }}
        >
          {isLoading ? 'Verifying OTP...' : 'Verify OTP'}
        </Button>
      </Box>
    </Box>
  );
};

export default OTPVerification;
