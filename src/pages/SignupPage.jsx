import { Visibility, VisibilityOff } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    Paper,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appStore from '../assets/appStore.svg';
import com1 from '../assets/com-1.svg';
import com2 from '../assets/com-2.svg';
import com3 from '../assets/com-3.svg';
import com4 from '../assets/com-4.svg';
import playStore from '../assets/playStore.svg';
import qrCode from '../assets/qrCode.svg';
import signupImg from '../assets/signupImg.svg';
import signupImgWebP from '../assets/signupImg.webp';
import OTPVerification from '../components/OTPVerification/OTPVerification';
import { sendOtpReq, signupReq, verifyOtpReq } from '../service/auth.service';
import {
    stage1Schema,
    stage2Schema,
    stage3Schema,
} from '../validations/SignupValidation';

const SignupPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [stage, setStage] = useState(1);
  const [mobile, setMobile] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentSchema, setCurrentSchema] = useState(stage1Schema);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: mobile,
    password: '',
    confirmPassword: '',
    otp: '',
  };

  useEffect(() => {
    if (stage === 1) setCurrentSchema(stage1Schema);
    else if (stage === 2) setCurrentSchema(stage2Schema);
    else if (stage === 3) setCurrentSchema(stage3Schema);
  }, [stage]);

  const sendOtpToMobile = async () => {
    setIsLoading(true);
    try {
      await stage1Schema.validate({ phone: mobile });

      const response = await sendOtpReq({ phone: mobile });
      if (response?.success) {
        enqueueSnackbar(response?.message || 'OTP sent successfully', {
          variant: 'success',
        });
        setStage(2);
      } else {
        enqueueSnackbar(response?.message || 'Failed to send OTP', {
          variant: 'error',
        });
      }
    } catch (error) {
      if (error.name !== 'ValidationError') {
        enqueueSnackbar(error.message || 'Something went wrong', {
          variant: 'error',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (values) => {
    setIsLoading(true);
    try {
      await stage2Schema.validate({ otp: values.otp });

      const response = await verifyOtpReq({
        phone: mobile,
        otp: values.otp,
      });

      if (response?.success) {
        enqueueSnackbar(response?.message || 'OTP verified successfully', {
          variant: 'success',
        });
        setStage(3);
        localStorage.setItem('registerToken', response?.payload?.token || '');
      } else {
        enqueueSnackbar(response?.message || 'OTP verification failed', {
          variant: 'error',
        });
      }
    } catch (error) {
      if (error.name !== 'ValidationError') {
        enqueueSnackbar(error.message || 'Invalid OTP', {
          variant: 'error',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (values) => {
    setIsLoading(true);
    try {
      const response = await signupReq({
        email: values?.email,
        password: values?.password,
        name: values?.name,
        phone: values?.phone,
        token: localStorage.getItem('registerToken'),
      });

      if (response?.success && response?.payload?.data) {
        enqueueSnackbar(response?.message || 'User Created successfully', {
          variant: 'success',
        });
        navigate('/login');
        localStorage.removeItem('registerToken');
      } else {
        enqueueSnackbar(response?.message || 'Signup failed', {
          variant: 'error',
        });
      }
    } catch (error) {
      if (error.name !== 'ValidationError') {
        enqueueSnackbar(error?.message || 'Something went wrong', {
          variant: 'error',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (values) => {
    if (stage === 1) {
      await sendOtpToMobile();
    } else if (stage === 2) {
      await handleOtpSubmit(values);
    } else if (stage === 3) {
      await handleSignup(values);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Main content */}
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={currentSchema}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Left Side - Image and Info */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', md: '50%' },
                    bgcolor: '#f0f4ff',
                    p: 4,
                    flex: 0.5,
                    minHeight: isMobile ? '60vh' : 'auto',
                  }}
                >
                  <Box sx={{ maxWidth: '100%', textAlign: 'center', mb: 4 }}>
                    <picture>
                      <source srcSet={signupImgWebP} type="image/webp" />
                      <img
                        src={signupImg}
                        alt="Financial analytics illustration"
                        width={400}
                        height={300}
                        loading="eager"
                        style={{
                          width: '100%',
                          maxWidth: '400px',
                          height: 'auto',
                          display: 'block',
                        }}
                        fetchpriority="high"
                      />
                    </picture>
                  </Box>

                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: '450px',
                      background: 'white',
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Start Learning. Keep Exploring. Grow Smarter.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Unlock free access to expert-led webinars, trading videos,
                      and market insights. No fees. Just knowledge.
                    </Typography>
                  </Paper>
                </Box>

                {/* Right Side - Form */}
                <Box
                  sx={{
                    p: 4,
                    borderLeft: isMobile ? 'none' : '1px dashed #ccc',
                    display: 'flex',
                    flexDirection: 'column',
                    width: { xs: '100%', md: '50%' },
                    flex: 0.5,
                    minHeight: isMobile ? '40vh' : 'auto',
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '500px',
                      width: '100%',
                      mx: { xs: 'auto', md: 0 },
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      Register your profile
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      or{' '}
                      <Link href="/login" underline="hover">
                        Go back to login
                      </Link>
                    </Typography>

                    {stage === 1 && (
                      <>
                        <TextField
                          fullWidth
                          label="Mobile Number"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          onBlur={handleBlur}
                          name="phone"
                          placeholder="Enter 10-digit mobile"
                          margin="normal"
                          error={touched.phone && Boolean(errors.phone)}
                          helperText={touched.phone && errors.phone}
                        />
                        <Typography variant="subtitle2" gutterBottom>
                          We will send a verification code to your mobile number{' '}
                        </Typography>
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{ mt: 2, py: 1.5, bgcolor: '#1a56db' }}
                          onClick={sendOtpToMobile}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <CircularProgress size={24} color="inherit" />
                          ) : (
                            'Send OTP'
                          )}
                        </Button>
                      </>
                    )}

                    {stage === 2 && (
                      <>
                        <Box display="flex" justifyContent="left" mt={2}>
                          <OTPVerification
                            value={values.otp}
                            onChange={(val) => {
                              handleChange({
                                target: { name: 'otp', value: val },
                              });
                            }}
                            onVerify={() => handleOtpSubmit(values)}
                            onResend={sendOtpToMobile}
                            error={touched.otp && errors.otp}
                            isLoading={isLoading}
                          />
                        </Box>
                      </>
                    )}

                    {stage === 3 && (
                      <Box sx={{ mt: 3 }}>
                        {/* Name Field */}
                        <TextField
                          fullWidth
                          margin="normal"
                          label="Full Name"
                          placeholder="Enter your name"
                          variant="outlined"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                        />

                        {/* Email Field */}
                        <TextField
                          fullWidth
                          margin="normal"
                          label="Email"
                          placeholder="Enter your email"
                          variant="outlined"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />

                        {/* Phone Field */}
                        <TextField
                          fullWidth
                          margin="normal"
                          label="Phone Number"
                          placeholder="1234567890"
                          variant="outlined"
                          name="phone"
                          value={values.phone}
                          disabled
                          onBlur={handleBlur}
                          InputProps={{
                            endAdornment: (
                              <Typography
                                color="success"
                                sx={{
                                  fontSize: theme.typography.subtitle1.fontSize,
                                }}
                              >
                                verified
                              </Typography>
                            ),
                          }}
                        />

                        {/* Password Field */}
                        <TextField
                          fullWidth
                          margin="normal"
                          label="Password"
                          placeholder="New password"
                          variant="outlined"
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => setShowPassword(!showPassword)}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />

                        {/* Confirm Password Field */}
                        <TextField
                          fullWidth
                          margin="normal"
                          label="Confirm Password"
                          placeholder="Confirm password"
                          variant="outlined"
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.confirmPassword &&
                            Boolean(errors.confirmPassword)
                          }
                          helperText={
                            touched.confirmPassword && errors.confirmPassword
                          }
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle confirm password visibility"
                                  onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                  }
                                  edge="end"
                                >
                                  {showConfirmPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />

                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          size="large"
                          type="submit"
                          sx={{
                            mt: 3,
                            py: 1.5,
                            borderRadius: 1,
                            bgcolor: '#1a56db',
                            '&:hover': { bgcolor: '#104bb9' },
                          }}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <CircularProgress size={24} color="inherit" />
                          ) : (
                            'Submit'
                          )}
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Box>

      {/* Footer section */}
      <Box
        sx={{
          borderTop: '1px solid #e0e0e0',
          bgcolor: '#fff',
          py: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          {/* Legal info */}
          <Typography
            variant="subtitle2"
            color="text.secondary"
            align="center"
            display="block"
            sx={{ mb: 2 }}
          >
            Alice Blue Financial Services (P) Ltd (SEBI Reg No:INZ000156038) |
            NSE-MEMBER ID:90112, BSE-MEMBER ID:6670, MCX-MEMBER ID: 56710 | CDSL
            DP ID 12085300, DP SEBI Reg No:IN-DP-364-2018 | ANT WEB Version 2.1
          </Typography>

          {/* Disclaimer */}
          <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
              Disclaimer:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Investments in securities market are subject to market risk, read
              all the related documents carefully before investing. Trade School
              is an educational platform. Alice Blue has created short courses
              to cover theoretical concepts on investing and trading. These are
              by no means indicative of or attempt to predict price movement in
              markets. All students should therefore consider the course
              material only for educational purposes and any examples,
              calculations or real-world entities mentioned should NOT be
              considered to be indicative of or representing Alice blue's
              research views or investment opinions. Trade School is exclusively
              for educational purposes and does not provide any advice on
              investment or recommend buying and selling of any stock. Trade
              School is not exchange traded products and any dispute related to
              this will not be dealt on exchange platform. We collect, retain,
              and use your contact information for legitimate business purposes
              only, to contact you and to provide you information & latest
              updates regarding our products & services. We do not sell or rent
              your contact information to third parties. Please note that by
              submitting the above mentioned details, you are authorizing us to
              Call/SMS you even though you may be registered under DND. We shall
              Call/SMS you for a period of 12 months. Alice Blue (formerly known
              as Alice Blue Private Limited),Corporate Office: No. 153/2, 3rd
              Floor, M.R.B.Arcade, Bagalur Main Road, Dwaraka Nagar, Yelahanka,
              Bengaluru – 560 063, Karnataka.
            </Typography>

            <Typography
              variant="subtitle2"
              display="block"
              sx={{ mt: 2, color: 'text.secondary' }}
            >
              Registered Office: Old No.56/2, New No.58, LIC Nagar, Vinayagar
              Kovil Street, Erode -8,Tamil Nadu– 638002.
              <br />
              Alice Blue Financial Services (P) Ltd : NSE EQ | NSE FO | NSE
              CDS-90112 SEBI REG : INZ000156038
              <br />
              Alice Blue Financial Services (P) Ltd : BSE EQ | BSE FO | BSE
              CD-6670 SEBI REG : INZ000156038
              <br />
              Alice Blue Financial Services (P) Ltd : CDSL DP ID 12085300 DP
              SEBI REG : IN-DP-364-2018
              <br />
              Alice Blue Financial Services (P) Ltd : MCX-56710 SEBI REG :
              INZ000156038
            </Typography>
          </Paper>

          <Divider sx={{ mb: 5 }} />

          {/* Social and download */}
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: 'space-between',
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: { xs: 'center', lg: 'flex-start' },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : 'flex-start',
              }}
            >
              <Typography variant="body1" fontWeight="medium" gutterBottom>
                Follow Our Official Pages
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  my: 2,
                  flexWrap: 'wrap',
                }}
              >
                {[
                  {
                    icon: <WhatsAppIcon />,
                    color: '#25D366',
                    label: 'WhatsApp',
                  },
                  {
                    icon: <LinkedInIcon />,
                    color: '#0077B5',
                    label: 'LinkedIn',
                  },
                  { icon: <TwitterIcon />, color: '#1DA1F2', label: 'Twitter' },
                  {
                    icon: <FacebookIcon />,
                    color: '#4267B2',
                    label: 'Facebook',
                  },
                  {
                    icon: <InstagramIcon />,
                    color: '#E1306C',
                    label: 'Instagram',
                  },
                  {
                    icon: <TelegramIcon />,
                    color: '#0088cc',
                    label: 'Telegram',
                  },
                  { icon: <YouTubeIcon />, color: '#FF0000', label: 'YouTube' },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    size="medium"
                    aria-label={social.label}
                    sx={{ color: social.color, bgcolor: '#f0f0f0' }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>

              <Typography
                variant="body1"
                fontWeight="medium"
                gutterBottom
                my={2}
              >
                Our products
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                }}
              >
                {[com1, com2, com3, com4].map((product, index) => (
                  <img
                    key={index}
                    src={product}
                    width={80}
                    height="auto"
                    alt="Product"
                    style={{
                      width: '80px',
                      objectFit: 'contain',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                ))}
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                mt: isMobile ? 4 : 0,
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: { xs: 'center', md: 'start' },
                justifyContent: 'center',
                gap: isMobile ? 5 : 10,
              }}
            >
              <Box>
                <Typography variant="body1" fontWeight="medium" gutterBottom>
                  Scan & Download
                </Typography>
                <img
                  src={qrCode}
                  alt="QR Code"
                  width={150}
                  height={150}
                  style={{ width: '150px', height: '150px' }}
                />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : 'flex-end',
                }}
              >
                <Typography variant="body1" fontWeight="medium" gutterBottom>
                  Download our app
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <img
                    src={playStore}
                    alt="Google Play"
                    width={135}
                    height={'auto'}
                    style={{ width: '135px' }}
                  />
                  <img
                    src={appStore}
                    alt="App Store"
                    width={135}
                    height={'auto'}
                    style={{ width: '135px' }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SignupPage;
