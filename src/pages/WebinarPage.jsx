import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useState } from 'react';
import webinar1 from '../assets/webinar1.webp';
import webinar2 from '../assets/webinar2.webp';
import webinar3 from '../assets/webinar3.svg';
import Button from '../components/Button/Button';
import ButtonTabs from '../components/ButtonTabs/ButtonTabs';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/Searchbar/Searchbar';
import SidebarFilters from '../components/SidebarFilters/SidebarFilters';
import CourseTabs from '../components/Tabs/Tabs';
import theme from '../utils/theme';

const dummyWebinars = [
  {
    id: 'AB-WEBINAR-292724497',
    title: 'ANT WEB Trading View',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 May 2025 05:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Trading strategies',
    image: webinar1,
  },
  {
    id: 'AB-WEBINAR-292724498',
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    scheduledOn: '24 May 2025 06:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Risk Management',
    image: webinar2,
  },
  {
    id: 'AB-WEBINAR-292724499',
    title: 'Technical Analysis Fundamentals',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 May 2025 07:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Technical Analysis',
    image: webinar3,
  },
  {
    id: 'AB-WEBINAR-292724497',
    title: 'ANT WEB Trading View',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 May 2025 05:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Trading strategies',
    image: webinar1,
  },
  {
    id: 'AB-WEBINAR-292724498',
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    scheduledOn: '24 May 2025 06:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Risk Management',
    image: webinar2,
  },
  {
    id: 'AB-WEBINAR-292724499',
    title: 'Technical Analysis Fundamentals',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 May 2025 07:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Technical Analysis',
    image: webinar3,
  },
  {
    id: 'AB-WEBINAR-292724497',
    title: 'ANT WEB Trading View',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 May 2025 05:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Trading strategies',
    image: webinar1,
  },
  {
    id: 'AB-WEBINAR-292724498',
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    scheduledOn: '24 May 2025 06:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Risk Management',
    image: webinar2,
  },
  {
    id: 'AB-WEBINAR-292724499',
    title: 'Technical Analysis Fundamentals',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 May 2025 07:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Technical Analysis',
    image: webinar3,
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

const WebinarPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabData[0]);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

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
            pl: { xs: 2, md: 0 },
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
              Webinars
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
                gap: { xs: 2, sm: 1 },
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
              {dummyWebinars.map((webinar, index) => (
                <Box key={index}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: { xs: 1, sm: 2 },
                      overflow: 'hidden',
                      maxWidth: { xs: '100%', sm: 'none' },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={webinar.image}
                      alt={webinar.title}
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
                        variant="h6"
                        fontWeight="semibold"
                        gutterBottom
                        sx={{
                          color: '#1a1a1a',
                          fontSize: { xs: '1rem', sm: '1.25rem' },
                          lineHeight: { xs: 1.3, sm: 1.4 },
                          mb: 1,
                          minHeight: { xs: '48px', sm: '56px' },
                        }}
                      >
                        {webinar.title}
                      </Typography>

                      <Box sx={{ mt: 1.5 }}>
                        {[
                          ['Webinar ID :', webinar.id],
                          ['Scheduled on :', webinar.scheduledOn],
                          ['Duration :', webinar.duration],
                          ['Language :', webinar.language],
                          ['Category :', webinar.category],
                        ].map(([label, value]) => (
                          <Box
                            key={label}
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              mb: 0.8,
                            }}
                          >
                            <Typography
                              sx={{ fontWeight: 500, color: '#1a1a1a' }}
                              fontSize={14}
                            >
                              {label}
                            </Typography>

                            <Typography fontSize={14} sx={{ color: '#1a1a1a' }}>
                              {value}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
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
                        title="Register Now"
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

export default WebinarPage;
