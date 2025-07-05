import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Fab,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import marketImg1 from '../assets/marketImg1.jpg';
import marketImg2 from '../assets/marketImg2.jpg';
import marketImg3 from '../assets/marketImg3.jpg';
import Button from '../components/Button/Button';
import ButtonTabs from '../components/ButtonTabs/ButtonTabs';
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
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabData[0]);
  const navigate = useNavigate();

  const handleToggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const getCardColumns = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen && !isLargeScreen) return 2;
    return 3;
  };

  const getCardMaxWidth = () => {
    const columns = getCardColumns();
    if (columns === 1) return '100%';
    if (columns === 2) return 'calc(50% - 20px)';
    return 'calc(33.333% - 27px)';
  };

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
      <Box sx={{ display: 'flex', position: 'relative' }}>
        {/* Desktop Sidebar */}
        {isLargeScreen && (
          <Box
            sx={{
              position: 'fixed',
              top: { xs: 60, sm: 70, lg: 80 },
              left: 0,
              bottom: 0,
              width: { lg: 250, xl: 280 },
              zIndex: 1,
              bgcolor: '#fff',
              borderRight: '1px solid #e0e0e0',
              overflowY: 'auto',
            }}
          >
            <SidebarFilters sections={filters} />
          </Box>
        )}

        {/* Mobile Sidebar */}
        {!isLargeScreen && showMobileSidebar && (
          <Box
            sx={{
              position: 'fixed',
              top: { xs: 0 },
              left: 0,
              bottom: 0,
              width: { xs: 280, sm: 320 },
              zIndex: 1000,
              bgcolor: '#fff',
              borderRight: '1px solid #e0e0e0',
              overflowY: 'auto',
              boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
            }}
          >
            <SidebarFilters sections={filters} />
          </Box>
        )}

        {/* Backdrop for mobile sidebar */}
        {!isLargeScreen && showMobileSidebar && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
            onClick={handleToggleMobileSidebar}
          />
        )}

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            pl: { xs: 0, lg: '250px', xl: '280px' },
            pr: { xs: 0, md: 2, lg: 4, xl: 6 },
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              p: { xs: 1, sm: 2, lg: 3 },
              pt: { xs: 2, sm: 3, lg: 2 },
            }}
          >
            {/* Header */}
            <Box sx={{ mb: { xs: 2, sm: 3 } }}>
              <Typography
                variant={isSmallScreen ? 'h5' : 'h4'}
                fontWeight="semibold"
                gutterBottom
                sx={{
                  fontSize: { xs: '20px', sm: '24px', lg: '28px' },
                  mb: { xs: 1, sm: 2 },
                }}
              >
                Courses
              </Typography>

              {/* Mobile Filter Button */}
              {!isLargeScreen && (
                <Fab
                  size="small"
                  color="primary"
                  onClick={handleToggleMobileSidebar}
                  sx={{
                    position: 'fixed',
                    bottom: { xs: 20, sm: 30 },
                    right: { xs: 20, sm: 30 },
                    zIndex: 1000,
                    display: { lg: 'none' },
                  }}
                >
                  <FilterListIcon />
                </Fab>
              )}
            </Box>

            {/* Tabs and Search */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'stretch', md: 'flex-start' },
                gap: { xs: 2, md: 0 },
                mb: { xs: 2, sm: 3 },
              }}
            >
              <Box sx={{ order: { xs: 1, md: 1 } }}>
                <ButtonTabs
                  tabs={tabData}
                  selectedTab={selectedTab}
                  onSelect={setSelectedTab}
                />
              </Box>
              <Box
                sx={{
                  order: { xs: 2, md: 2 },
                  width: { xs: '100%', md: 'auto' },
                  maxWidth: { md: '300px', lg: '350px' },
                }}
              >
                <SearchBar />
              </Box>
            </Box>

            {/* Course Grid */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 2, sm: 3, lg: 4 },
                justifyContent: 'start',
                alignItems: 'stretch',
              }}
            >
              {dummyCourses.map((course, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: `1 1 ${getCardMaxWidth()}`,
                    maxWidth: getCardMaxWidth(),
                    minWidth: { xs: '280px', sm: '300px', lg: '320px' },
                    width: '100%',
                  }}
                >
                  <Card
                    elevation={2}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        elevation: 4,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height={isSmallScreen ? '140' : '160'}
                      image={course.image}
                      alt={course.title}
                      sx={{ objectFit: 'fill' }}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: { xs: 1.5, sm: 2 },
                        '&:last-child': { pb: { xs: 1.5, sm: 2 } },
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
                        size={isSmallScreen ? 'small' : 'medium'}
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
    </>
  );
};

export default CoursesPage;
