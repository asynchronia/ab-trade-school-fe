import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
    Box,
    Container,
    Grid,
    IconButton,
    Link,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import webinar2 from '../assets/webinar2.webp';
import CourseCard from '../components/CourseCard/CourseCard';
import Navbar from '../components/Navbar/Navbar';
import theme from '../utils/theme';

const ViewCoursePage = () => {
  const [playing, setPlaying] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const playerRef = useRef(null);
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
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: isSmallScreen ? 200 : 550,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <ReactPlayer
              ref={playerRef}
              url="https://www.w3schools.com/html/mov_bbb.mp4"
              playing={playing}
              light={webinar2}
              onClickPreview={() => {
                setPlaying(true);
                setVideoStarted(true);
              }}
              width="100%"
              height="100%"
              style={{ objectFit: 'contain' }}
            />

            {videoStarted && (
              <IconButton
                onClick={() => setPlaying(!playing)}
                sx={{
                  position: 'absolute',
                  bottom: '50%',
                  left: '50%',
                  transform: 'translate(-50%, 50%)',
                  bgcolor: 'rgba(0,0,0,0.1)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.8)',
                  },
                }}
              >
                {playing ? <PauseIcon /> : <PlayArrowIcon />}
              </IconButton>
            )}
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
    </>
  );
};

export default ViewCoursePage;
