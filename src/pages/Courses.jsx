import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Fab,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import marketImg1 from '../assets/marketImg1.jpg';
import marketImg2 from '../assets/marketImg2.jpg';
import marketImg3 from '../assets/marketImg3.jpg';
import Button from '../components/Button/Button';
import ButtonTabs from '../components/ButtonTabs/ButtonTabs';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/Searchbar/Searchbar';
import SidebarFilters from '../components/SidebarFilters/SidebarFilters';
import theme from '../utils/theme';

const dummyCourses = [
  {
    title: '1ly options Hedging Tool Overview In Tamil',
    instructor: 'Mr. Anish Kumar',
    duration: '4 Hours',
    modules: 4,
    image: marketImg1,
  },
  {
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    duration: '4 Hours',
    modules: 4,
    image: marketImg2,
  },
  {
    title: 'ANT web trading view',
    instructor: 'Mr. Anish Kumar',
    duration: '4 Hours',
    modules: 4,
    image: marketImg3,
  },
  {
    title: '1ly options Hedging Tool Overview In Tamil',
    instructor: 'Mr. Anish Kumar',
    duration: '4 Hours',
    modules: 4,
    image: marketImg1,
  },
  {
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    duration: '4 Hours',
    modules: 4,
    image: marketImg2,
  },
  {
    title: 'ANT web trading view',
    instructor: 'Mr. Anish Kumar',
    duration: '4 Hours',
    modules: 4,
    image: marketImg3,
  },
  {
    title: '1ly options Hedging Tool Overview In Tamil',
    instructor: 'Mr. Anish Kumar',
    duration: '4 Hours',
    modules: 4,
    image: marketImg1,
  },
  {
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    duration: '4 Hours',
    modules: 4,
    image: marketImg2,
  },
  {
    title: 'ANT web trading view',
    instructor: 'Mr. Anish Kumar',
    duration: '4 Hours',
    modules: 4,
    image: marketImg3,
  },
];

const tabData = ['All Courses', 'Ongoing', 'Completed', 'Certificates'];

const filters = [
  {
    label: 'Categories',
    options: [
      'Basic knowledge',
      'Fundamental analysis',
      'Intraday trading strategies',
      'Investments',
      'Technical analysis',
      'Technical charts',
      'Trading strategies',
    ],
  },
  {
    label: 'Level',
    options: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    label: 'Language',
    options: [
      'Bengali',
      'English',
      'Hindi',
      'Kannada',
      'Malayalam',
      'Marathi',
      'Tamil',
      'Telugu',
    ],
  },
];

const CoursesPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabData[0]);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const user = localStorage.getItem('user');
    if (!user) {
      enqueueSnackbar('Please login to learn more about this course.', {
        variant: 'warning',
      });
      navigate('/login');
    }

    navigate('/courses/1ly-options-hedging-tool-overview-in-tamil');
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          overflowX: 'hidden',
          maxWidth: { xs: '100%', lg: '1300px' },
          mx: 'auto',
        }}
      >
        <SidebarFilters sections={filters} />
        <Box
          sx={{
            flexGrow: 1,
            overflowX: 'auto',
            px: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              p: { xs: 1, sm: 2 },
            }}
          >
            <Typography
              variant="h4"
              fontWeight="semibold"
              gutterBottom
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
                mb: { xs: 2, sm: 3 },
              }}
            >
              Courses
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                },
                gap: { xs: 2, sm: 5 },
                mb: { xs: 2, sm: 3 },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  overflowX: 'auto',
                  whiteSpace: 'nowrap',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                <ButtonTabs
                  tabs={tabData}
                  selectedTab={selectedTab}
                  onSelect={setSelectedTab}
                />
              </Box>
              <Box sx={{ width: { xs: '100%', sm: 'auto', md: '300px' } }}>
                <SearchBar />
              </Box>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)',
                },
                gap: { xs: 2, sm: 3 },
                justifyContent: 'center',
              }}
            >
              {dummyCourses.map((course, index) => (
                <Box key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: { xs: 1, sm: 2 },
                      overflow: 'hidden',
                      maxWidth: { xs: '100%', sm: 'none' },
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        elevation: 4,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={course.image}
                      alt={course.title}
                      sx={{
                        objectFit: 'fill',
                        borderBottom: '#d2d2d2 solid 1px',
                        height: { xs: '140px', sm: '160px' },
                      }}
                    />

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: { xs: 1.5, sm: 2 },
                      }}
                    >
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          fontSize: { xs: '14px', sm: '16px' },
                          fontWeight: 500,
                          lineHeight: 1.4,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          minHeight: { xs: '36px', sm: '44px' },
                          color: '#1a1a1a',
                          mb: 1,
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: '12px', sm: '14px' },
                          mb: 1,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {course.instructor}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: '12px', sm: '14px' },
                          color: 'text.secondary',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {course.duration} • {course.modules} Modules
                      </Typography>
                    </CardContent>

                    <Box
                      sx={{
                        p: { xs: 1.5, sm: 2 },
                        pt: 0,
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size={isMobile ? 'small' : 'medium'}
                        title={'Learn more'}
                        sx={{
                          fontSize: { xs: '12px', sm: '14px' },
                          py: { xs: 0.5, sm: 1 },
                        }}
                        onClick={handleLearnMore}
                      />
                    </Box>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: { xs: 3, sm: 4 },
        }}
      >
        <Divider
          sx={{
            mx: {
              xs: theme.spacing(2),
              sm: theme.spacing(4),
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

export default CoursesPage;
