import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    Paper,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import appStore from '../assets//appStore.svg';
import com1 from '../assets//com1.svg';
import com2 from '../assets//com2.svg';
import com3 from '../assets//com3.svg';
import com4 from '../assets//com4.svg';
import playStore from '../assets//playStore.svg';
import qrCode from '../assets//qrCode.svg';
import signupImg from '../assets//signupImg.svg';

// Social media icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

const LoginPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        py: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Main content */}
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flex: 0.5,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#f0f4ff',
              p: 4,
              position: 'relative',
            }}
          >
            <Box
              sx={{
                maxWidth: '100%',
                textAlign: 'center',

                mb: 4,
              }}
            >
              <img
                src={signupImg}
                alt="Financial analytics illustration"
                style={{ width: '100%', maxWidth: '400px' }}
              />
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
                Unlock free access to expert-led webinars, trading videos, and
                market insights. No fees. Just knowledge.
              </Typography>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            sx={{
              p: 4,
              borderLeft: isMobile ? 'none' : '1px dashed #ccc',
              display: 'flex',
              flex: 0.5,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ maxWidth: '500px', width: '100%', mx: 'auto' }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Sign in to your profile
              </Typography>

              <Typography variant="body2" color="text.secondary" gutterBottom>
                or{' '}
                <Link href="/signup" underline="hover">
                  Create your free account
                </Link>
              </Typography>

              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Enter your phone number"
                  variant="outlined"
                />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    mt: 3,
                    py: 1.5,
                    borderRadius: 1,
                    bgcolor: '#1a56db',
                    '&:hover': {
                      bgcolor: '#104bb9',
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer section - Same as signup page */}
      <Box
        sx={{
          borderTop: '1px solid #e0e0e0',
          bgcolor: '#fff',
          py: 2,
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
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body1"
                fontWeight="medium"
                gutterBottom
                align={isMobile ? 'center' : 'left'}
              >
                Follow Our Official Pages
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  my: 2,
                }}
              >
                <IconButton
                  size="medium"
                  sx={{ color: '#25D366', bgcolor: '#f0f0f0' }}
                >
                  <WhatsAppIcon fontSize="medium" />
                </IconButton>
                <IconButton
                  size="medium"
                  sx={{ color: '#0077B5', bgcolor: '#f0f0f0' }}
                >
                  <LinkedInIcon fontSize="medium" />
                </IconButton>
                <IconButton
                  size="medium"
                  sx={{ color: '#1DA1F2', bgcolor: '#f0f0f0' }}
                >
                  <TwitterIcon fontSize="medium" />
                </IconButton>
                <IconButton
                  size="medium"
                  sx={{ color: '#4267B2', bgcolor: '#f0f0f0' }}
                >
                  <FacebookIcon fontSize="medium" />
                </IconButton>
                <IconButton
                  size="medium"
                  sx={{ color: '#E1306C', bgcolor: '#f0f0f0' }}
                >
                  <InstagramIcon fontSize="medium" />
                </IconButton>
                <IconButton
                  size="medium"
                  sx={{ color: '#0088cc', bgcolor: '#f0f0f0' }}
                >
                  <TelegramIcon fontSize="medium" />
                </IconButton>
                <IconButton
                  size="medium"
                  sx={{ color: '#FF0000', bgcolor: '#f0f0f0' }}
                >
                  <YouTubeIcon fontSize="medium" />
                </IconButton>
              </Box>

              <Typography
                variant="body1"
                fontWeight="medium"
                gutterBottom
                align={isMobile ? 'center' : 'left'}
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
                {[com1, com2, com3, com4].map((product) => (
                  <img
                    key={product}
                    src={product}
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
                textAlign: 'center',
                mt: isMobile ? 4 : 0,
                display: 'flex',
                flex: 1,
                alignItems: isMobile ? 'center' : 'start',
                flexDirection: isMobile ? 'column' : 'row',
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
                    style={{ width: '135px' }}
                  />
                  <img
                    src={appStore}
                    alt="App Store"
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

export default LoginPage;
