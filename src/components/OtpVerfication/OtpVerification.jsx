import { Box, Button, Typography } from '@mui/material';
// import { useRef, useState } from 'react';
import OtpInput from 'react-otp-input';
import theme from '../../utils/theme';

const OTPVerification = ({
  otp = '',
  onChange,
  onVerify,
  message = '',
  verifyButtonText = 'Verify OTP',
  //   resendButtonText = 'Resend OTP',
  //   onResend,
  error = '',
  disabled = false,
  inputCount = 6,
}) => {
  //   const [countdown, setCountdown] = useState(0);
  //   const [showResend, setShowResend] = useState(true);
  //   const timerRef = useRef(null);

  //   const startCountdown = () => {
  //     setShowResend(false);
  //     setCountdown(30);

  //     timerRef.current = setInterval(() => {
  //       setCountdown((prev) => {
  //         if (prev <= 1) {
  //           clearInterval(timerRef.current);
  //           setShowResend(true);
  //           return 0;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //   };

  //   const handleResendClick = () => {
  //     if (onResend) {
  //       onResend();
  //     }
  //     startCountdown();
  //   };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(3),
        width: '100%',
        maxWidth: 500,
        mx: 'auto',
        py: theme.spacing(2),
      }}
    >
      {/* OTP Input */}
      <OtpInput
        value={otp}
        onChange={onChange}
        numInputs={inputCount}
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus
        inputStyle={{
          width: '44px',
          height: '44px',
          marginRight: '8px',
          fontSize: '1.25rem',
          borderRadius: theme.shape.borderRadius.medium,
          border: `1px solid ${
            error ? theme.colors.error.main : theme.colors.gray[300]
          }`,
          color: theme.colors.gray[900],
          [theme.breakpoints.up('sm')]: {
            width: '52px',
            height: '52px',
            margin: '0 8px',
          },
        }}
        containerStyle={{
          justifyContent: 'center',
          padding: theme.spacing(1, 0),
        }}
      />

      {/* Message and Error */}
      {message && (
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{
            fontSize: theme.typography.body2.fontSize,
            lineHeight: theme.typography.body2.lineHeight,
          }}
        >
          {message}
        </Typography>
      )}
      {error && (
        <Typography
          variant="body2"
          color="error"
          textAlign="center"
          sx={{
            fontSize: theme.typography.body2.fontSize,
            lineHeight: theme.typography.body2.lineHeight,
          }}
        >
          {error}
        </Typography>
      )}

      {/* Action Buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: theme.spacing(2),
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Button
          variant="contained"
          onClick={onVerify}
          disabled={disabled || otp.length !== inputCount}
          fullWidth
          sx={{
            py: 1.5,
            backgroundColor: theme.colors.blue.main,
            '&:hover': {
              backgroundColor: theme.colors.blue.dark,
            },
            borderRadius: theme.shape.borderRadius.medium,
          }}
        >
          {verifyButtonText}
        </Button>

        {/* {!showResend ? (
          <Typography
            variant="body2"
            textAlign="center"
            sx={{ alignSelf: 'center' }}
          >
            Resend OTP in {countdown} seconds
          </Typography>
        ) : (
          <Button
            variant="outlined"
            onClick={handleResendClick}
            disabled={disabled}
            fullWidth
            sx={{
              py: 1.5,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              '&:hover': {
                borderColor: theme.palette.primary.dark,
              },
              borderRadius: theme.shape.borderRadius.medium,
            }}
          >
            {resendButtonText}
          </Button>
        )} */}
      </Box>
    </Box>
  );
};

export default OTPVerification;
