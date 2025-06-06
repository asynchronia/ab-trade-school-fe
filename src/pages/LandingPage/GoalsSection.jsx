import { Box, Container, Paper, Typography } from '@mui/material';
import cardImage1 from '../../assets/cardImg1.svg';
import cardImage2 from '../../assets/cardImg2.svg';
import cardImage3 from '../../assets/cardImg3.svg';
import cardImage4 from '../../assets/cardImg4.svg';
import cardImage5 from '../../assets/cardImg5.svg';
import TrackCard from '../../components/TrackCard/TrackCard';
import theme from '../../utils/theme';

const GoalsSection = () => {
  const features = [
    { label: 'NISM-Backed', dotClass: 'blue' },
    { label: 'NSE Partnership', dotClass: 'blue' },
    { label: '#1 on TradingView', dotClass: 'blue' },
    { label: 'SEBI Compliant', dotClass: 'blue' },
    { label: '4.9/5 Rating', dotClass: 'yellow' },
  ];

  const trackData = [
    {
      title: 'Beginner',
      description:
        'Master the fundamentals of trading and markets. Perfect for newcomers. ',
      buttonText: 'Explore Track',
      icon: cardImage1,
    },
    {
      title: 'Options',
      description:
        'Learn strategies for options trading, from basics to advanced techniques.',
      buttonText: 'Explore Track',
      icon: cardImage2,
    },
    {
      title: 'Futures',
      description:
        'Master futures trading with risk management and strategic execution.',
      buttonText: 'Explore Track',
      icon: cardImage3,
    },
    {
      title: 'Algo Trading',
      description:
        'Build automated trading systems with code and quantitative strategies.',
      buttonText: 'Explore Track',
      icon: cardImage4,
    },
    {
      title: 'Strategy Builder',
      description:
        'Create custom trading strategies and learn portfolio management.',
      buttonText: 'Explore Track',
      icon: cardImage5,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: theme.spacing(6),
          sm: theme.spacing(8),
        },
        px: {
          xs: theme.spacing(2),
          sm: theme.spacing(4),
        },
        backgroundColor: '#F9FAFB',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: 'center',
          mb: {
            xs: theme.spacing(4),
            md: theme.spacing(6),
          },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: theme.typography.h3.fontWeight,
            mb: theme.spacing(2),
            color: theme.colors.text.primary,
            fontSize: {
              xs: theme.typography.h4.fontSize,
              sm: '32px'
            },
          }}
        >
          Your Goals. Your Track.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.colors.text.secondary,
            lineHeight: theme.typography.body1.lineHeight,
            fontSize: {
              xs: theme.typography.body2.fontSize,
              sm: theme.typography.h6.fontSize,
            },
          }}
        >
          Get on the fast track to smarter trading with learning paths built
          around your needs. Practical, structured, and guided by real-market
          expertise.
        </Typography>
      </Container>

      {/* Features */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: {
            xs: theme.spacing(1.5),
            sm: theme.spacing(2),
          },
          mb: {
            xs: theme.spacing(4),
            md: theme.spacing(6),
          },
        }}
      >
        {features.map((feature, idx) => (
          <Paper
            key={idx}
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: theme.colors.background.paper,
              px: theme.spacing(2),
              py: theme.spacing(1),
              borderRadius: theme.shape.borderRadius.xlarge,
              fontSize: theme.typography.body2.fontSize,
              fontWeight: theme.typography.fontWeightMedium,
              color: theme.colors.gray[700],
              //   boxShadow: theme.shadows[1],
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                mr: theme.spacing(1),
                backgroundColor:
                  feature.dotClass === 'blue'
                    ? theme.colors.blue.main
                    : theme.colors.yellow.main,
              }}
            />
            {feature.label}
          </Paper>
        ))}
      </Box>

      {/* Track Cards */}
      <Box
        sx={{
          maxWidth: '1300px',
          mx: 'auto',
          px: {
            xs: theme.spacing(2),
            sm: theme.spacing(4),
          },
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
          gap: {
            xs: theme.spacing(2),
            sm: theme.spacing(3),
          },
          justifyItems: 'center',
        }}
      >
        {trackData.map((item, index) => (
          <TrackCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default GoalsSection;
