import {
    Box,
    Card,
    CardMedia,
    Container,
    Grid,
    Link,
    Typography,
    useMediaQuery,
} from '@mui/material';
import webinar2 from '../assets/webinar2.svg';
import CourseCard from '../components/CourseCard/CourseCard';
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

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box mb={4}>
          <Card
            sx={{
              borderRadius: theme.shape.borderRadius.large,
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="video"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              poster={webinar2}
              sx={{
                height: isSmallScreen ? 200 : 600,
                width: '100%',
                objectFit: 'fill',
              }}
            />
          </Card>
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
    </>
  );
};

export default ViewCoursePage;
