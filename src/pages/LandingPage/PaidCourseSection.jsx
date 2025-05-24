import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import marketImg1 from '../../assets/marketImg1.svg';
import marketImg2 from '../../assets/marketImg2.svg';
import CustomDropdown from '../../components/Customdropdown/Customdropdown';
import theme from '../../utils/theme';

const PaidCourseSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Basic Knowledge');
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const paidCourses = [
    {
      id: 1,
      image: marketImg1,
    },
    {
      id: 2,
      image: marketImg2,
    },
  ];

  const categories = [
    'Basic Knowledge',
    'Fundamental analysis',
    'Intraday trading strategies',
    'Investments',
    'Technical analysis',
    'Technical charts',
    'Technical strategies',
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const languages = [
    'Hindi',
    'English',
    'Bengali',
    'Kannada',
    'Malayalam',
    'Tamil',
    'Telugu',
    'Marathi',
  ];

  return (
    <Box
      px={{
        xs: theme.spacing(2),
        sm: theme.spacing(3),
        md: theme.spacing(8),
        lg: '100px',
      }}
      py={{
        xs: theme.spacing(4),
        sm: theme.spacing(6),
      }}
    >
      {/* Heading */}
      <Box textAlign="center" mb={theme.spacing(4)}>
        <Typography
          variant="h4"
          fontWeight={theme.typography.fontWeightBold}
          gutterBottom
          sx={{
            fontSize: {
              xs: '1.7rem',
              sm: theme.typography.h4.fontSize,
              md: '2.25rem',
            },
          }}
        >
          Master the Markets
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          mb={theme.spacing(4)}
          sx={{
            fontSize: {
              xs: '0.9rem',
              sm: theme.typography.body1.fontSize,
              md: '1.1rem',
            },
          }}
        >
          Unlock your trading potential with trade school
        </Typography>
      </Box>

      {/* Filters */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={theme.spacing(2)}
        mb={theme.spacing(4)}
        justifyContent="center"
        alignItems="stretch"
        flexWrap="wrap"
      >
        <CustomDropdown
          label="Categories"
          options={categories}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          sx={{
            minWidth: '150px',
            flexGrow: 1,
          }}
        />
        <CustomDropdown
          label="Level"
          options={levels}
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          sx={{
            minWidth: '150px',
            flexGrow: 1,
          }}
        />
        <CustomDropdown
          label="Language"
          options={languages}
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          sx={{
            minWidth: '150px',
            flexGrow: 1,
          }}
        />
      </Stack>

      <Box
        sx={{
          maxWidth: '1300px',
          mx: 'auto',
          px: theme.spacing(2),
        }}
      >
        {/* Section Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={theme.spacing(2)}
          flexWrap="wrap"
          gap={theme.spacing(2)}
        >
          <Typography
            variant="h6"
            fontWeight={theme.typography.fontWeightBold}
            sx={{
              fontSize: {
                xs: theme.typography.body1.fontSize,
                sm: '1.1rem',
              },
              flexGrow: 1,
            }}
          >
            Basic Knowledge - Beginner - English
          </Typography>
          <Stack direction="row" spacing={theme.spacing(1)} alignItems="center">
            <Link
              href="#"
              underline="hover"
              fontWeight={theme.typography.fontWeightMedium}
              color="text.primary"
              sx={{
                fontSize: {
                  xs: theme.typography.caption.fontSize,
                  sm: theme.typography.body1.fontSize,
                },
              }}
            >
              See All
            </Link>
            <IconButton size="small">
              <ArrowBackIos fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        {/* Course Cards (Horizontal Scroll) */}
        <Box
          display="flex"
          gap={theme.spacing(2)}
          sx={{
            pb: theme.spacing(2),
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
          }}
        >
          {paidCourses.map((course) => (
            <Box
              key={course.id}
              sx={{
                borderRadius: theme.shape.borderRadius.medium,
                overflow: 'hidden',
                flexShrink: 0,
                scrollSnapAlign: 'start',
                width: {
                  xs: `calc(100vw - ${theme.spacing(5)})`,
                  sm: `calc(100vw - ${theme.spacing(7.5)})`,
                  md: 530,
                },
                minWidth: {
                  xs: `calc(100vw - ${theme.spacing(5)})`,
                  sm: `calc(100vw - ${theme.spacing(7.5)})`,
                  md: 400,
                },
                height: {
                  xs: 250,
                  sm: 280,
                  md: 310,
                },
              }}
            >
              <img
                src={course.image}
                alt={`Course ${course.id}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PaidCourseSection;
