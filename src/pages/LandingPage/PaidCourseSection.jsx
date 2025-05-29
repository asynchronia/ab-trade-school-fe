import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';
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
          color="text.secondary"
          mb={theme.spacing(4)}
          sx={{
            fontSize: theme.typography.h6.fontSize,
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
          title="Categories"
          options={categories}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          sx={{
            minWidth: '150px',
            flexGrow: 1,
          }}
        />
        <CustomDropdown
          title="Level"
          options={levels}
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          sx={{
            minWidth: '150px',
            flexGrow: 1,
          }}
        />
        <CustomDropdown
          title="Language"
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
            fontWeight={theme.typography.h6.fontWeight}
            sx={{
              fontSize: {
                xs: theme.typography.body2.fontSize,
                sm: theme.typography.body1.fontSize,
              },
              flexGrow: 1,
            }}
          >
            Basic Knowledge - Beginner - English
          </Typography>
          <Stack direction="row" spacing={theme.spacing(2)} alignItems="center">
            <Link
              href="#"
              underline="always"
              fontWeight={theme.typography.h6.fontWeight}
              color={theme.colors.gray[500]}
              sx={{
                fontSize: {
                  xs: theme.typography.caption.fontSize,
                  sm: theme.typography.subtitle1.fontSize,
                },
              }}
            >
              See All
            </Link>

            <Box sx={{display: 'flex', gap: 1}}>
              <IconButton
                size="small"
                sx={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'black 1px solid',
                  borderRadius: '50%',
                  '& svg': {
                    fontSize: '16px',
                  },
                  '&:hover': {
                    bgcolor: '#f3f4f6',
                  },
                }}
              >
                <ArrowBackIos />
              </IconButton>

              <IconButton
                size="small"
                sx={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'black 1px solid',
                  borderRadius: '50%',
                  '& svg': {
                    fontSize: '16px',
                  },
                  '&:hover': {
                    bgcolor: '#f3f4f6',
                  },
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </Box>
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
                  objectFit: 'fill',
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
