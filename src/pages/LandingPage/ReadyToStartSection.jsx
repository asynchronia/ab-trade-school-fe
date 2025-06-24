import { Box, Container, Button as MuiButton, Typography } from '@mui/material';
import bgImage3 from '../../assets/bgImg3.svg';
import rightImg2 from '../../assets/rightImg2.svg';
import theme from '../../utils/theme';

const ReadyToStartSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#022353',
      }}
    >
      <Box
        sx={{
          background: `url(${bgImage3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          py: {
            xs: theme.spacing(4),
            md: theme.spacing(6),
          },
          px: {
            xs: theme.spacing(2),
            lg: theme.spacing(4),
          },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            display="flex"
            container
            gap={4}
            direction={'row'}
            alignItems="center"
            justifyContent="center"
            sx={{
              height: '100%',
            }}
          >
            {/* Left content */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: { xs: '0 0 60%', sm: '0 0 60%', md: '0 0 60%' },
                minWidth: 0,
                maxWidth: { xs: '60%', sm: '60%', md: '60%' },
              }}
            >
              <Box
                sx={{
                  textAlign: 'left',
                  maxWidth: '100%',
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight={700}
                  color="common.white"
                  sx={{
                    fontSize: {
                      xs: '20px',
                      sm: '28px',
                      md: '36px',
                      lg: '44px',
                    },
                    lineHeight: {
                      xs: 1.2,
                      md: 1.1,
                    },
                    mb: {
                      xs: theme.spacing(1.5),
                      md: theme.spacing(2),
                    },
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Ready to Trade Smarter?
                </Typography>

                <Typography
                  variant="h6"
                  component={'h2'}
                  color="common.white"
                  sx={{
                    fontSize: {
                      xs: '12px',
                      sm: '14px',
                      lg: '16px',
                    },
                    fontWeight: 400,
                    lineHeight: 1.4,
                    mb: {
                      xs: theme.spacing(2.5),
                      md: theme.spacing(3),
                    },
                    opacity: 0.95,
                  }}
                >
                  Watch free videos, join expert webinars, and explore trading
                  insights all in one place.
                </Typography>

                <MuiButton
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#ffffff',
                    color: '#1e40af',
                    fontWeight: 600,
                    fontSize: {
                      xs: '12px',
                      md: '14px',
                    },
                    px: {
                      xs: theme.spacing(2),
                      md: theme.spacing(4),
                    },
                    py: {
                      xs: theme.spacing(1),
                      md: theme.spacing(1.5),
                    },
                    borderRadius: theme.shape.borderRadius?.medium || 2,
                    minWidth: {
                      xs: '140px',
                      sm: '160px',
                    },
                    textTransform: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    '&:hover': {
                      backgroundColor: '#f8fafc',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Start Learning Now
                </MuiButton>
              </Box>
            </Box>

            {/* Right image */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  md: 'center',
                },
                alignItems: 'center',
                flex: { xs: '0 0 40%', sm: '0 0 40%', md: '0 0 40%' },
                minWidth: 0,
                maxWidth: { xs: '40%', sm: '40%', md: '40%' },
              }}
            >
              <Box
                component="img"
                src={rightImg2}
                alt="Trading Analytics Illustration"
                sx={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))',
                  animation: 'float 3s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': {
                      transform: 'translateY(0px)',
                    },
                    '50%': {
                      transform: 'translateY(-15px)',
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ReadyToStartSection;
