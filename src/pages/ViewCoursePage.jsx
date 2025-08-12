import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
    Box,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useEffect } from 'react';
import webinar2 from '../assets/webinar2.webp';
import CourseCard from '../components/CourseCard/CourseCard';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import theme from '../utils/theme';

const ViewCoursePage = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const modules = [
    {
      title: '1ly options Hedging Tool Overview In Tamil',
      instructor: 'Mr. Anish Kumar',
      duration: '1 Hour',
      modules: '2 Modules',
      image: webinar2,
    },
    {
      title: '1ly options Hedging Tool Overview In Tamil',
      instructor: 'Mr. Anish Kumar',
      duration: '1 Hour',
      modules: '3 Modules',
      image: webinar2,
    },
    {
      title: '1ly options Hedging Tool Overview In Tamil',
      instructor: 'Mr. Anish Kumar',
      duration: '1 Hour',
      modules: '4 Modules',
      image: webinar2,
    },
  ];

  const recommended = [
    {
      title: '1ly options Hedging Tool Overview',
      instructor: 'Mr. Anish Kumar',
      role: 'Technical Analyst',
      duration: '4 Hours',
      modules: '4 Modules',
      image: webinar2,
    },
    {
      title: '1ly options Hedging Tool Overview',
      instructor: 'Mr. Anish Kumar',
      role: 'Technical Analyst',
      duration: '4 Hours',
      modules: '4 Modules',
      image: webinar2,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box mb={4}>
          <Box
            sx={{
              backgroundColor: '#ccc',
              width: '100%',
              height: isSmallScreen ? 300 : 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.8)',
                },
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 48 }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: isSmallScreen ? 'flex-start' : 'center',
              justifyContent: 'space-between',
              flexDirection: isSmallScreen ? 'column' : 'row',
              gap: 2,
              mt: 2,
            }}
          >
            <Typography
              variant="h6"
              color={theme.colors.text.primary}
              fontWeight={600}
            >
              1ly Options Hedging Tool Overview
            </Typography>
            <Link href="#" color="primary" sx={{ textDecoration: 'none' }}>
              Details
            </Link>
          </Box>
        </Box>

        {/* Modules Section */}
        <Typography variant="h6" gutterBottom color={theme.colors.text.accent}>
          Modules
        </Typography>
        <Grid container spacing={3} mb={5} mt={2}>
          {modules.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CourseCard data={item} />
            </Grid>
          ))}
        </Grid>

        {/* Recommended Topics Section */}
        <Typography
          variant="h6"
          mb={2}
          gutterBottom
          color={theme.colors.text.accent}
        >
          Recommended Topics
        </Typography>
        <Grid container spacing={3}>
          {recommended.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CourseCard data={item} showButton />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          mt: 4,
        }}
      >
        <Divider
          sx={{
            mx: {
              xs: theme.spacing(4),
              md: theme.spacing(5),
              lg: theme.spacing(10),
            },
          }}
        />
        <Footer />
      </Box>
    </>
  );
};

export default ViewCoursePage;
