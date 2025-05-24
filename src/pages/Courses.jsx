import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material';
import Button from '../components/Button/Button';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/Searchbar/Searchbar';
import SidebarFilters from '../components/SidebarFilters/SidebarFilters';
import CourseTabs from '../components/Tabs/Tabs';

const dummyCourses = [
  {
    title: '1ly options Hedging Tool Overview In Tamil',
    instructor: 'Mr. Anish Kumar',
    duration: '4 Hours',
    modules: 4,
    image: '/sample1.png',
  },
  {
    title: 'Navigating Option Hedging',
    instructor: 'Mr. Rupesh',
    duration: '4 Hours',
    modules: 4,
    image: '/sample2.png',
  },
  {
    title: 'ANT web trading view',
    instructor: 'Mr. Anish Kumar',
    duration: '4 Hours',
    modules: 4,
    image: '/sample3.png',
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
              Courses
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
                gap: 2, 
                justifyContent: 'flex-start',
              }}
            >
              {dummyCourses.map((course, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: '1 1 250px',
                    minWidth: '250px',
                    maxWidth: '100%',
                  }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={course.image}
                      alt={course.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" gutterBottom noWrap>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {course.instructor}
                      </Typography>
                      <Typography variant="body2" sx={{ my: 1 }} noWrap>
                        {course.duration} • {course.modules} Modules
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, pt: 0 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="small"
                        title={'Learn more'}
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
