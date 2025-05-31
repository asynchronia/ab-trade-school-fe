import { Box, Container, Grid, Typography } from '@mui/material';
import webinar1 from '../../assets/webinar1.webp';
import webinar2 from '../../assets/webinar2.webp';
import webinar3 from '../../assets/webinar3.svg';
import WebinarCard from '../../components/WebinarCard/WebinarCard';
import theme from '../../utils/theme';

const WebinarSection = () => {
  const webinarData = [
    {
      id: 1,
      title: 'Untold equity wealth secrets',
      image: webinar3,
      time: '11:00 AM - 12:00 PM',
      date: 'May 3rd 2025',
      language: 'English',
      location: 'Bangalore',
    },
    {
      id: 2,
      title: '1ly options Hedging tool',
      image: webinar2,
      time: '11:00 AM - 12:00 PM',
      date: 'May 3rd 2025',
      language: 'Tamil',
      location: 'Online',
    },
    {
      id: 3,
      title: 'Advanced Market Selection',
      image: webinar1,
      time: '11:00 AM - 12:00 PM',
      date: 'May 3rd 2025',
      language: 'Tamil',
      location: 'Online',
    },
  ];

  return (
    <Box
      sx={{
        py: {
          xs: theme.spacing(4),
          sm: theme.spacing(6),
          md: theme.spacing(8),
        },
        px: {
          xs: theme.spacing(2),
          sm: theme.spacing(4),
          md: theme.spacing(6),
          lg: theme.spacing(12),
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{
            xs: theme.spacing(3),
            sm: theme.spacing(4),
            md: theme.spacing(6),
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: theme.typography.fontWeightBold,
                  mb: {
                    xs: theme.spacing(2),
                    sm: theme.spacing(3),
                  },
                  fontSize: theme.typography.h3.fontSize,
                  lineHeight: {
                    xs: 1.2,
                    sm: 1.1,
                  },
                }}
              >
                Webinar Programs - Online and Offline
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  maxWidth: {
                    xs: '100%',
                    sm: '600px',
                    md: '700px',
                  },
                  mx: 'auto',
                  lineHeight: {
                    xs: theme.typography.body1.lineHeight,
                    sm: 1.6,
                  },
                  fontSize: theme.typography.h6.fontSize,
                  px: {
                    xs: theme.spacing(2),
                    sm: 0,
                  },
                }}
              >
                Learn trading through live simulations, workshops, and expert
                mentorship perfect for both beginners and experienced traders
                seeking real-time education.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={10} md={8} lg={10}>
            <WebinarCard webinars={webinarData} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WebinarSection;
