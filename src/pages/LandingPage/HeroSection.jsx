import { PlayCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg1 from '../../assets/heroImg1.svg';
import heroImg2 from '../../assets/heroImg2.svg';
import heroImg3 from '../../assets/heroImg3.svg';
import heroImg4 from '../../assets/heroImg4.svg';
import rightCircle from '../../assets/rightCircle.svg';
import Button from '../../components/Button/Button';
import HeroImageSlider from '../../components/HeroImageSlider/HeroImageSlider';
import theme from '../../utils/theme';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];

  const statsItem = [
    { number: '20+', label: 'Modules' },
    { number: '1M+', label: 'Learners' },
    { number: '₹0', span: '(Free)', label: 'Course Fee' },
  ];

  const descriptions = [
    {
      text: 'Join',
      highlight1: '1M+ learners',
      middleText:
        'who trust us for practical, flexible and certified trading education.',
      highlight2: 'Learn live,',
      endText: 'on-demand or in person, all without spending a rupee.',
    },
    {
      text: 'Attend',
      highlight1: 'expert-led webinars',
      middleText: 'Both live online and at select venues.',
      highlight2:
        'Stay connected with market insights, strategies, and real-time Q&A sessions',
      endText: 'from industry experts.',
    },
    {
      text: 'Get access to',
      highlight1: 'high-quality recorded videos',
      middleText:
        'tailored for each course. Learn anytime, anywhere and earn a',
      highlight2: 'free certificate',
      endText: 'after every course completion.',
    },
    {
      text: 'Start your trading journey with',
      highlight1: '20+ structured modules',
      middleText: 'covering real strategies and tools. All courses are',
      highlight2: '100% free',
      endText: 'and designed for both beginners and experienced traders.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % descriptions.length);
        setIsVisible(true);
      }, 1000);
    }, 3900);

    return () => clearInterval(interval);
  }, [descriptions.length]);

  const currentDescription = descriptions[currentIndex];

  return (
    <Box
      sx={{
        position: 'relative',
        px: {
          xs: theme.spacing(2),
          sm: theme.spacing(4),
          md: theme.spacing(12),
        },
        pt: {
          xs: theme.spacing(6),
          md: theme.spacing(10),
        },
        pb: {
          xs: theme.spacing(4),
          md: theme.spacing(6),
        },
        minHeight: {
          xs: 500,
          sm: 550,
          md: 600,
        },
        background: theme.colors.gradient.main,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        color: theme.colors.text.light,
        zIndex: 1,
      }}
    >
      {/* Right Circle */}
      <Box
        component="img"
        src={rightCircle}
        alt="Decorative circle"
        sx={{
          position: 'absolute',
          right: {
            xs: -200,
            md: -250,
          },
          bottom: '15%',
          width: {
            xs: 300,
            sm: 400,
            md: 490,
          },
          height: {
            xs: 300,
            sm: 400,
            md: 490,
          },
          zIndex: 0,
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      />

      {/* Main Content Container */}
      <Box
        sx={{
          maxWidth: '1300px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: {
            xs: theme.spacing(4),
            md: theme.spacing(6),
          },
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: {
              xs: 'none',
              md: '0 0 50%',
            },
            width: {
              xs: '100%',
              md: '50%',
            },
            order: {
              xs: 2,
              md: 1,
            },
          }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
            sx={{
              background: theme.colors.gradient.goldGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: theme.typography.h3.fontWeight,
              fontSize: {
                xs: theme.typography.h2.fontSize,
                sm: '2.5rem',
                md: '3rem',
              },
              lineHeight: {
                xs: 1.2,
                md: 1.1,
              },
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            Learn the Markets.
            <br />
            Master the Moves.
            <br />
            <Box
              component="span"
              sx={{
                background: theme.colors.gradient.grayGradient,
                backgroundClip: 'text',
              }}
            >
              Trade Like You Mean It.
            </Box>
          </Typography>

          <Box
            sx={{ display: { xs: 'block', md: 'none' }, my: theme.spacing(2) }}
          >
            <HeroImageSlider
              images={heroImages}
              transitionType="vertical-scroll"
            />
          </Box>

          <Typography
            variant="subtitle1"
            sx={{
              mb: theme.spacing(4),
              color: theme.colors.gray[200],
              fontSize: {
                xs: theme.typography.body1.fontSize,
                md: '1.2rem',
              },
              textAlign: {
                xs: 'center',
                md: 'left',
              },
              lineHeight: 1.6,
            //   height: '120px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            {currentDescription.text}{' '}
            <Box component="span" sx={{ color: theme.colors.secondary.main }}>
              {currentDescription.highlight1}
            </Box>{' '}
            {currentDescription.middleText}{' '}
            <Box component="span" sx={{ color: theme.colors.secondary.main }}>
              {currentDescription.highlight2}
            </Box>{' '}
            {currentDescription.endText}
          </Typography>

          <Stack
            sx={{
              display: 'flex',
              gap: theme.spacing(2),
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
              mb: theme.spacing(4),
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.colors.success.main,
                fontSize: {
                  xs: theme.typography.caption.fontSize,
                  sm: theme.typography.body2.fontSize,
                },
                padding: theme.spacing(1.5),
                width: {
                  xs: '100%',
                  sm: 'auto',
                },
              }}
              onClick={() => navigate('/signup')}
              title={'Start Learning Now'}
            />
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                fontSize: {
                  xs: theme.typography.caption.fontSize,
                  sm: theme.typography.body2.fontSize,
                },
                padding: theme.spacing(1.5),
                width: {
                  xs: '100%',
                  sm: 'auto',
                },
              }}
              title={'Saved Videos'}
              onClick={() => navigate('/signup')}
              startIcon={<PlayCircle />}
            />
          </Stack>

          <Stack
            direction={'row'}
            spacing={{
              xs: theme.spacing(4),
              sm: theme.spacing(6),
            }}
            sx={{
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            {statsItem.map((stat, index) => (
              <Box key={index}>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    fontSize: {
                      xs: theme.typography.h3.fontSize,
                      md: theme.typography.h2.fontSize,
                    },
                  }}
                >
                  {stat.number}
                  <span style={{ fontSize: '18px', marginLeft: '5px' }}>
                    {stat.span && stat.span}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.colors.secondary.main,
                    fontSize: {
                      xs: theme.typography.body2.fontSize,
                      md: theme.typography.body1.fontSize,
                    },
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Right Content - Image Slider */}
        <Box
          sx={{
            flex: {
              xs: 'none',
              md: '0 0 50%',
            },
            width: {
              xs: '100%',
              md: '50%',
            },
            textAlign: {
              xs: 'center',
              md: 'right',
            },
            position: 'relative',
            order: {
              xs: 1,
              md: 2,
            },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <HeroImageSlider images={heroImages} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
