import { Box, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg1 from '../../assets/heroImg1.svg';
import heroImg2 from '../../assets/heroImg2.svg';
import heroImg3 from '../../assets/heroImg3.svg';
import heroImg4 from '../../assets/heroImg4.svg';
import rightCircle from '../../assets/rightCircle.svg';
import Button from '../../components/Button/Button';
import theme from '../../utils/theme';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];

  const statsItem = [
    { number: '20+', label: 'Modules' },
    { number: '1M+', label: 'Learners' },
    { number: '0', label: 'Course Fee' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

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

      {/* Main Content */}
      <Grid
        container
        maxWidth={'1300px'}
        spacing={{
          xs: theme.spacing(4),
          md: theme.spacing(6),
        }}
        sx={{
          position: 'relative',
          zIndex: 1,
          flexWrap: {
            xs: 'wrap',
            md: 'nowrap',
          },
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Grid item xs={12} md={6} sx={{ flex: { md: 0.5 } }}>
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
                xs: theme.typography.h3.fontSize,
                sm: '2.5rem',
                md: '3rem',
              },
              lineHeight: {
                xs: 1.2,
                md: 1.3,
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
            }}
          >
            Start your trading journey with{' '}
            <Box component="span" sx={{ color: theme.colors.secondary.main }}>
              20+ structured modules
            </Box>{' '}
            covering real strategies and tools. All courses are{' '}
            <Box component="span" sx={{ color: theme.colors.secondary.main }}>
              100% free
            </Box>{' '}
            and designed for both beginners and experienced traders.
          </Typography>

          <Stack
            sx={{
              display: 'flex',
              gap: theme.spacing(2),
              flexDirection: 'row',
              alignItems: 'center',
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
                color: theme.colors.secondary.main,
                borderColor: theme.colors.secondary.main,
                padding: theme.spacing(1.5),
                width: {
                  xs: '100%',
                  sm: 'auto',
                },
              }}
              title={'Saved Videos'}
              onClick={() => navigate('/signup')}
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
                      xs: '1.8rem',
                      md: '2.125rem',
                    },
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.colors.secondary.main,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'right',
            },
            position: 'relative',
            flex: { md: 0.5 },
            order: {
              xs: -1,
              md: 0,
            },
          }}
        >
          <Box className="hero-image-container">
            {heroImages.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`Hero illustration ${index + 1}`}
                className={`hero-image ${
                  index === currentImageIndex
                    ? 'active'
                    : index === (currentImageIndex + 1) % heroImages.length
                    ? 'next-up'
                    : ''
                }`}
                sx={{
                  width: '100%',
                  maxWidth: {
                    xs: 400,
                    sm: 500,
                    md: 620,
                  },
                  mb: theme.spacing(2),
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
