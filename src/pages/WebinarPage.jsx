import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import webinar1 from '../assets/webinar1.webp';
import webinar2 from '../assets/webinar2.webp';
import webinar3 from '../assets/webinar3.svg';
import Button from '../components/Button/Button';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/Searchbar/Searchbar';
import SidebarFilters from '../components/SidebarFilters/SidebarFilters';
import CourseTabs from '../components/Tabs/Tabs';

const dummyWebinars = [
  {
    id: 'AB-WEBINAR-292724497',
    title: 'ANT WEB Trading View',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 may 2025 05:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Trading strategies',
    image: webinar1,
  },
  {
    id: 'AB-WEBINAR-292724498',
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    scheduledOn: '24 may 2025 06:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Risk Management',
    image: webinar2,
  },
  {
    id: 'AB-WEBINAR-292724499',
    title: 'Technical Analysis Fundamentals',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 may 2025 07:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Technical Analysis',
    image: webinar3,
  },
  {
    id: 'AB-WEBINAR-292724497',
    title: 'ANT WEB Trading View',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 may 2025 05:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Trading strategies',
    image: webinar1,
  },
  {
    id: 'AB-WEBINAR-292724498',
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    scheduledOn: '24 may 2025 06:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Risk Management',
    image: webinar2,
  },
  {
    id: 'AB-WEBINAR-292724499',
    title: 'Technical Analysis Fundamentals',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 may 2025 07:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Technical Analysis',
    image: webinar3,
  },
  {
    id: 'AB-WEBINAR-292724497',
    title: 'ANT WEB Trading View',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 may 2025 05:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Trading strategies',
    image: webinar1,
  },
  {
    id: 'AB-WEBINAR-292724498',
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    scheduledOn: '24 may 2025 06:00 PM',
    duration: '2h 0s',
    language: 'English',
    category: 'Risk Management',
    image: webinar2,
  },
  {
    id: 'AB-WEBINAR-292724499',
    title: 'Technical Analysis Fundamentals',
    instructor: 'Mr. Anish Kumar',
    scheduledOn: '24 may 2025 07:00 PM',
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
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            position: 'fixed',
            top: 80,
            left: 0,
            bottom: 0,
            width: 250,
            zIndex: 1,
            bgcolor: '#fff',
            borderRight: '1px solid #e0e0e0',
          }}
        >
          <SidebarFilters sections={filters} />
        </Box>
        <Box sx={{ flexGrow: 1, pl: '250px', pr: '100px' }}>
          <Box p={2}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom>
              Webinars
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                mb: 2,
              }}
            >
              <CourseTabs tabs={tabData} />
              <SearchBar />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 5,
                justifyContent: 'flex-start',
              }}
            >
              {dummyWebinars.map((webinar, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: '1 1 300px',
                    minWidth: '300px',
                    maxWidth: '100%',
                  }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      overflow: 'hidden',
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
                      }}
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        fontWeight="semibold"
                        gutterBottom
                        sx={{ color: '#1a1a1a' }}
                      >
                        {webinar.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ mt: 1, lineHeight: 1.5 }}
                      >
                        <strong>Webinar ID:</strong> {webinar.id}
                      </Typography>

                      <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                        <strong>Scheduled on:</strong> {webinar.scheduledOn}
                      </Typography>

                      <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                        <strong>Duration:</strong> {webinar.duration}
                      </Typography>

                      <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                        <strong>Language:</strong> {webinar.language}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ mb: 1, lineHeight: 1.5 }}
                      >
                        <strong>Category:</strong> {webinar.category}
                      </Typography>
                    </CardContent>

                    <Box sx={{ p: 2, pt: 0 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="medium"
                        title={' Register Now'}
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

export default WebinarPage;
