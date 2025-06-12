import { Box, Button, Typography } from '@mui/material';
import OtpInput from 'react-otp-input';

const OTPVerification = ({ onVerify, value, onChange }) => {
  return (
    <Box textAlign="left">
      <Box display="flex" justifyContent="left" mt={2}>
        <OtpInput
          value={value}
          onChange={onChange}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: '3rem',
            height: '3rem',
            margin: '0 0.5rem',
            fontSize: '1.5rem',
            borderRadius: 4,
            border: '1px solid #ccc',
          }}
        />
      </Box>
      <Typography variant="body2" ml={1} color="green" gutterBottom>
        Enter the OTP sent to your mobile
      </Typography>

      <Button
        fullWidth
        variant="contained"
        onClick={onVerify}
        sx={{ mt: 3, py: 1.5, bgcolor: '#1a56db', borderRadius: 1 }}
      >
        Verify OTP
      </Button>
    </Box>
  );
};

export default OTPVerification;
