import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import marketImg1 from '../../assets/marketImg1.jpg';
import marketImg2 from '../../assets/marketImg2.jpg';
import marketImg3 from '../../assets/marketImg3.jpg';
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
    {
      id: 3,
      image: marketImg3,
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
      py={theme.spacing(1)}
    >
      {/* Heading */}
      <Box textAlign="center" mb={theme.spacing(4)}>
        <Typography
          variant="h4"
          fontWeight={theme.typography.fontWeightBold}
          gutterBottom
          sx={{
            fontSize: {
              xs: '26px',
              sm: '32px',
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={theme.spacing(2)}
        mx="auto"
        maxWidth="1300px"
        sx={{
          flexDirection: { xs: 'row', md: 'row' },
          flexWrap: 'wrap',
          gap: theme.spacing(2),
          alignItems: 'flex-start',
        }}
      >
        <Stack
          direction={'row'}
          spacing={theme.spacing(2)}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          alignItems="stretch"
          gap={theme.spacing(2)}
          flexWrap="wrap"
          sx={{
            width: { xs: '100%', md: 'auto' },
            mb: { xs: theme.spacing(2), md: theme.spacing(4) },
            flexGrow: 1,
            flexBasis: '60%',
            minWidth: { xs: 'calc(100% - 100px)', sm: 'auto' },
          }}
        >
          <CustomDropdown
            title="Categories"
            options={categories}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <CustomDropdown
            title="Level"
            options={levels}
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          />
          <CustomDropdown
            title="Language"
            options={languages}
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={theme.spacing(2)}
          alignItems="center"
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
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

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="small"
              aria-label="Previous"
              sx={{
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid black',
                borderRadius: '50%',
                p: 0,
                '& svg': {
                  fontSize: '16px',
                },
                '&:hover': {
                  bgcolor: '#f3f4f6',
                },
              }}
            >
              <ArrowBackIos fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              aria-label="Next"
              sx={{
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid black',
                borderRadius: '50%',
                p: 0,
                '& svg': {
                  fontSize: '16px',
                },
                '&:hover': {
                  bgcolor: '#f3f4f6',
                },
              }}
            >
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      <Box
        sx={{
          maxWidth: '1300px',
          mx: 'auto',
        }}
      >
        {/* Section Header */}
        <Box
          mb={theme.spacing(1)}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'row', sm: 'row' },
            flexWrap: 'wrap',
            gap: theme.spacing(2),
          }}
        >
          <Typography
            variant="h6"
            fontWeight={theme.typography.h6.fontWeight}
            sx={{
              fontSize: {
                xs: theme.typography.body2.fontSize,
                sm: theme.typography.body1.fontSize,
              },
              flexGrow: 0.5,
            }}
            component="h2"
          >
            Basic Knowledge{' '}
            <Box
              component="h3"
              sx={{
                display: { xs: 'none', sm: 'inline' },
                fontSize: 'inherit',
              }}
            >
              - Beginner - English
            </Box>
          </Typography>

          <Stack
            display={{ xs: 'flex', md: 'none' }}
            direction="row"
            spacing={theme.spacing(2)}
            alignItems="center"
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              //   gap: theme.spacing(0.5),
            }}
          >
            <Link
              href="#"
              underline="always"
              fontWeight={theme.typography.h6.fontWeight}
              color={theme.colors.gray[500]}
              sx={{
                fontSize: theme.typography.caption.fontSize,
              }}
            >
              See All
            </Link>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                size="small"
                aria-label="Previous"
                sx={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid black',
                  borderRadius: '50%',
                  p: 0,
                  '& svg': {
                    fontSize: '16px',
                  },
                  '&:hover': {
                    bgcolor: '#f3f4f6',
                  },
                }}
              >
                <ArrowBackIos fontSize="small" />
              </IconButton>

              <IconButton
                size="small"
                aria-label="Next"
                sx={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid black',
                  borderRadius: '50%',
                  p: 0,
                  '& svg': {
                    fontSize: '16px',
                  },
                  '&:hover': {
                    bgcolor: '#f3f4f6',
                  },
                }}
              >
                <ArrowForwardIos fontSize="small" />
              </IconButton>
            </Box>
          </Stack>
        </Box>

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
