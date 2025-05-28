import { Box, Container, Grid, Typography } from '@mui/material';
import bgImage3 from '../../assets/bgImg3.svg';
import rightImg2 from '../../assets/rightImg2.svg';
import Button from '../../components/Button/Button';
import theme from '../../utils/theme';

const ReadyToStartSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: {
          xs: theme.spacing(6),
          md: theme.spacing(10),
        },
        px: {
          xs: theme.spacing(2),
          lg: '30px',
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={theme.spacing(4)}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left content */}
          <Grid item xs={12} md={6} sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                maxWidth: '100%',
                overflow: 'hidden',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                fontWeight={theme.typography.fontWeightBold}
                color="common.white"
                sx={{
                  fontSize: {
                    xs: '1.8rem',
                    md: '3rem',
                  },
                }}
                gutterBottom
              >
                Ready to Trade Smarter?
              </Typography>
              <Typography
                // variant="body1"
                color="common.white"
                mb={theme.spacing(4)}
                sx={{
                  fontSize: {
                    xs: theme.typography.caption.fontSize,
                    md: theme.typography.body1.fontSize,
                  },
                  width: {
                    xs: '100%',
                    sm: '80%',
                    md: '70%',
                  },
                }}
              >
                Watch free videos, join expert webinars, and explore trading
                insights all in one place.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  minWidth: {
                    xs: '100%',
                    sm: 'auto',
                  },
                  px: theme.spacing(4),
                  py: theme.spacing(2),
                }}
                title={'Start Learning Now'}
              />
            </Box>
          </Grid>

          {/* Right image */}
          <Grid item xs={12} md={6} sx={{ flexGrow: 0 }}>
            <Box
              component="img"
              src={rightImg2}
              alt="Trading Illustration"
              sx={{
                width: '100%',
                maxWidth: 500,
                // mx: 'auto',
                display: 'block',
                mb: {
                  xs: theme.spacing(4),
                  md: 0,
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
