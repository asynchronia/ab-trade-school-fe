import { Box, Typography } from '@mui/material';
import baseImg1 from '../../assets/baseImg1.webp';
import baseImg2 from '../../assets/baseImg2.webp';
import baseImg3 from '../../assets/baseImg3.webp';
import overImg1 from '../../assets/overImg1.svg';
import overImg2 from '../../assets/overImg2.svg';
import overImg3 from '../../assets/overImg3.svg';
import CardCarousel from '../../components/CardCorousel/CardCarousel';
import theme from '../../utils/theme';

const FreeCoursesSection = () => {
  const freeCourses = [
    {
      id: 1,
      baseImage: baseImg1,
      overlayImage: overImg1,
      title: 'Learn to Analyze Market Trends Like Pros',
      desc: 'Discover how to interpret charts, spot price action patterns, and make informed trading decisions with confidence using technical tools',
      time: '1 hr',
    },
    {
      id: 2,
      baseImage: baseImg2,
      overlayImage: overImg2,
      title: 'Master Financial Charts and Trading Strategies Easily',
      desc: 'Understand candlestick formations, trend-lines, and reversal setups to apply the right strategies across market cycles and instruments',
      time: '1 hr',
    },
    {
      id: 3,
      baseImage: baseImg3,
      overlayImage: overImg3,
      title: 'Boost Your Trading Skills with Practical Knowledge',
      desc: 'Join expert-led webinars to explore futures, options, and real market examples that sharpen your decision-making and portfolio-building skills',
      time: '1 hr',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: theme.spacing(4),
        px: theme.spacing(2),
        maxWidth: 1200,
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          mb: theme.spacing(4),
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: theme.typography.h3.fontSize,
            color: '',
            mb: theme.spacing(1),
          }}
        >
          Get Started with{' '}
          <Box
            component="span"
            sx={{
              color: '',
              //   fontWeight: theme.typography.fontWeightBold,
            }}
          >
            Free Expert Courses
          </Box>
        </Typography>
        <Typography
          sx={{
            maxWidth: 600,
            mx: 'auto',
            fontSize: theme.typography.h6.fontSize,
            color: theme.palette.text.secondary,
          }}
        >
          Explore easy-to-follow courses designed to get you started right.
        </Typography>
      </Box>

      <CardCarousel cards={freeCourses} />
    </Box>
  );
};

export default FreeCoursesSection;
