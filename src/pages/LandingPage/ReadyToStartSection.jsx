import {
    Box,
    Container,
    Grid,
    Button as MuiButton,
    Typography,
} from '@mui/material';
import bgImage3 from '../../assets/bgImg3.svg';
import rightImg2 from '../../assets/rightImg2.svg';
import theme from '../../utils/theme';

const ReadyToStartSection = () => {
  return (
    <Box
      sx={{
        background: `url(${bgImage3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        minHeight: {
          xs: '500px',
        },
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
        }}
      >
        <Grid
          container
          //   spacing={theme.spacing(6)}
          alignItems="center"
          justifyContent={'center'}
          sx={{
            height: '100%',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Left content */}
          <Grid
            item
            xs={12}
            md={6}
            flex={0.5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              order: { xs: 1, md: 1 },
            }}
          >
            <Box
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
                maxWidth: {
                  xs: '100%',
                  md: '90%',
                },
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                fontWeight={700}
                color="common.white"
                sx={{
                  fontSize: {
                    xs: '28px',
                    sm: '30px',
                    md: '36px',
                    lg: '50px',
                  },
                  lineHeight: {
                    xs: 1.2,
                    md: 1.1,
                  },
                  mb: {
                    xs: theme.spacing(2),
                    md: theme.spacing(3),
                  },
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Ready to Trade Smarter?
              </Typography>

              <Typography
                variant="h6"
                color="common.white"
                sx={{
                  fontSize: {
                    xs: '16px',
                    lg: '20px',
                  },
                  fontWeight: 400,
                  lineHeight: 1.5,
                  mb: {
                    xs: theme.spacing(4),
                    md: theme.spacing(5),
                  },
                  maxWidth: {
                    xs: '100%',
                    md: '85%',
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
                    xs: '1rem',
                    md: '1.1rem',
                  },
                  px: {
                    xs: theme.spacing(4),
                    md: theme.spacing(5),
                  },
                  py: {
                    xs: theme.spacing(1.5),
                    md: theme.spacing(2),
                  },
                  borderRadius: theme.shape.borderRadius?.medium || 2,
                  minWidth: {
                    xs: '200px',
                    sm: '220px',
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
          </Grid>

          {/* Right image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: {
                xs: 'center',
                md: 'flex-end',
              },
              alignItems: 'center',
              flex: 0.4,
              order: { xs: 2, md: 2 },
            }}
          >
            <Box
              component="img"
              src={rightImg2}
              alt="Trading Analytics Illustration"
              sx={{
                width: '100%',
                maxWidth: {
                  xs: '350px',
                  sm: '450px',
                  md: '500px',
                  lg: '580px',
                },
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ReadyToStartSection;
