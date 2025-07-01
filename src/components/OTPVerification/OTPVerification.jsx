import { Box, Button, CircularProgress, Link, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

const OTPVerification = ({
  onVerify,
  value,
  onChange,
  onResend,
  isLoading,
}) => {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [counter]);

  const handleResend = () => {
    if (counter === 0) {
      onResend();
      setCounter(30);
    }
  };

  return (
    <Box textAlign="left">
      <Box sx={{ mt: 2 }}>Enter One-time password (OTP)</Box>
      <Box display="flex" justifyContent="left" mt={2} mx={0} px={0}>
        <OtpInput
          value={value}
          onChange={onChange}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: '3rem',
            height: '3rem',
            marginRight: '0.5rem',
            fontSize: '1.5rem',
            borderRadius: 4,
            border: '1px solid #ccc',
          }}
        />
      </Box>

      <Typography variant="body2" color="green" gutterBottom>
        Enter the OTP sent to your mobile number.
      </Typography>

      <Button
        fullWidth
        variant="contained"
        onClick={onVerify}
        disabled={isLoading}
        sx={{ mt: 1.5, py: 1.5, bgcolor: '#1a56db', borderRadius: 1 }}
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
      </Button>
      <Typography variant="body2" textAlign={'center'} mt={1}>
        {counter > 0 ? (
          <>
            Resend OTP in <strong>{counter}s</strong>
          </>
        ) : (
          <Link
            component="button"
            variant="body2"
            onClick={handleResend}
            underline="hover"
          >
            Resend OTP
          </Link>
        )}
      </Typography>
    </Box>
  );
};

export default OTPVerification;
