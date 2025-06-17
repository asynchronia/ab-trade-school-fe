import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {
    Avatar,
    Box,
    Card,
    IconButton,
    Paper,
    Rating,
    Stack,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import allTestimonialImg1 from '../../assets/allTestimonialImg1.png';
import allTestimonialImg2 from '../../assets/allTestimonialImg2.png';
import allTestimonialImg3 from '../../assets/allTestimonialImg3.png';
import allTestimonialImg4 from '../../assets/allTestimonialImg4.png';
import mainTestimonialImage from '../../assets/mainTestimonialImage.webp';
import mainTestimonialImg2 from '../../assets/mainTestimonialImg2.svg';
import testimonial1Image from '../../assets/testimonial1Image.svg';
import testimonial2Image from '../../assets/testimonial2Image.svg';
import testimonial3Image from '../../assets/testimonial3Image.svg';
import TestimonialBgImg from '../../assets/testimonialBgImg.jpg';
import Button from '../../components/Button/Button';
import theme from '../../utils/theme';

const TestimonialsSection = () => {
  const allTestimonials = [
    {
      name: 'Sneha Patel',
      role: 'Algo Trader',
      location: 'Bangalore',
      quote:
        'The algo trading course transformed my approach to markets. I now have 3 automated strategies running that have been profitable for the last 6 months.',
      image: allTestimonialImg1,
      rating: '5',
    },
    {
      id: 2,
      name: 'Rohit Kapoor',
      role: 'Options Trader',
      location: 'Mumbai',
      quote:
        'After 3 months of training, I was able to consistently apply the options strategies I learned. My monthly returns improved by 22% and I finally have a structured approach to my trading.',
      image: allTestimonialImg2,
      rating: '5',
    },
    {
      id: 3,
      name: 'Arjun Singh',
      role: 'Futures Trader',
      location: 'Delhi',
      quote:
        'The risk management techniques I learned helped me survive the recent market volatility. My drawdowns are now limited to 5% while my profitable trades increased.',
      image: allTestimonialImg3,
      rating: '4',
    },
    {
      id: 4,
      name: 'Stefan Strohm',
      role: 'Beginner Trader',
      location: 'Chennai',
      quote:
        'As someone completely new to trading, the beginner course gave me the confidence to start. The simulator helped me practice without losing real money.',
      image: allTestimonialImg4,
      rating: '5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allTestimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = allTestimonials[currentIndex];

  const mainTestimonial = {
    name: 'Sneha Patel',
    role: 'Algo Trader',
    location: 'Bangalore',
    quote:
      'The algo trading course transformed my approach to markets. I now have 3 automated strategies running that have been profitable for the last 6 months.',
    image: mainTestimonialImage,
    profileImg: mainTestimonialImg2,
    rating: '5',
  };

  const sideTestimonials = [
    {
      id: 1,
      name: 'Rohit Kapoor',
      role: 'Options Trader',
      location: 'Mumbai',
      quote:
        'After 3 months of training, I was able to consistently apply the options strategies I learned. My monthly returns improved by 22% and I finally have a structured approach to my trading.',
      image: testimonial1Image,
      rating: '5',
    },
    {
      id: 2,
      name: 'Arjun Singh',
      role: 'Futures Trader',
      location: 'Delhi',
      quote:
        'The risk management techniques I learned helped me survive the recent market volatility. My drawdowns are now limited to 5% while my profitable trades increased.',
      image: testimonial2Image,
      rating: '4',
    },
    {
      id: 3,
      name: 'Stefan Strohm',
      role: 'Beginner Trader',
      location: 'Chennai',
      quote:
        'As someone completely new to trading, the beginner course gave me the confidence to start. The simulator helped me practice without losing real money.',
      image: testimonial3Image,
      rating: '5',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: theme.spacing(2),
        px: theme.spacing(4),
        maxWidth: 1200,
        mx: 'auto',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: theme.spacing(6) }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: {
              xs: '1.6rem',
              sm: '32px',
            },
            color: theme.palette.grey[800],
            mb: theme.spacing(2),
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          Trusted By Traders
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: theme.typography.h6.fontSize,
            color: theme.palette.grey[600],
            maxWidth: 600,
            mx: 'auto',
            lineHeight: theme.typography.body1.lineHeight,
          }}
        >
          Hear from our community of traders who have transformed their trading
          journey with our courses.
        </Typography>
      </Box>

      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          mb: theme.spacing(6),
        }}
      >
        <Card
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: 320,
            borderRadius: 3,
            overflow: 'hidden',
            backgroundImage: `url(${TestimonialBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'all 0.3s ease-in-out',
            boxShadow: 3,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 10,
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Stack
              direction="row"
              alignItems={'center'}
              justifyContent={'space-between'}
              spacing={2}
              sx={{ mb: 3 }}
            >
              <Box>
                <Avatar
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  sx={{
                    width: '170px',
                    height: '140px',
                    borderRadius: 1.5,
                  }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Rating
                  value={currentTestimonial.rating}
                  readOnly
                  size="small"
                  sx={{
                    fontSize: '12px' ,
                    mb: 1,
                    '& .MuiRating-iconFilled': {
                      color: '#ffc107',
                    },
                    '& .MuiRating-iconEmpty': {
                      color: 'rgba(255, 255, 255, 0.3)',
                    },
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: '1.1rem',
                  }}
                >
                  {currentTestimonial.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(173, 216, 230, 0.9)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {currentTestimonial.location}
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  lineHeight: 1.6,
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                }}
              >
                "{currentTestimonial.quote}"
              </Typography>
            </Box>
          </Box>
        </Card>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton
            onClick={prevTestimonial}
            sx={{
              width: 48,
              height: 48,
              border: '2px solid',
              borderColor: 'grey.300',
              '&:hover': {
                bgcolor: 'grey.100',
                borderColor: 'grey.400',
              },
              transition: 'all 0.2s',
            }}
            aria-label="Previous testimonial"
          >
            <ArrowBackIos sx={{ fontSize: 20, color: 'grey.600' }} />
          </IconButton>

          <IconButton
            onClick={nextTestimonial}
            sx={{
              width: 48,
              height: 48,
              border: '2px solid',
              borderColor: 'grey.300',
              '&:hover': {
                bgcolor: 'grey.100',
                borderColor: 'grey.400',
              },
              transition: 'all 0.2s',
            }}
            aria-label="Next testimonial"
          >
            <ArrowForwardIos sx={{ fontSize: 20, color: 'grey.600' }} />
          </IconButton>
        </Stack>
      </Box>

      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: { xs: 'column', md: 'row' },
          gap: theme.spacing(4),
          mb: theme.spacing(6),
        }}
      >
        {/* Main Testimonial */}
        <Paper
          elevation={2}
          sx={{
            flex: 2,
            width: '100%',
            // maxWidth: { md: '600px' },
            flexGrow: 0.5,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: theme.shape.borderRadius.large,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              width: '100%',
              //   height: { xs: 250, sm: 350 },
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={mainTestimonial.image}
              alt={mainTestimonial.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'fill',
                objectPosition: 'center',
              }}
            />
          </Box>
          <Box
            sx={{
              p: theme.spacing(4),
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
            }}
          >
            <Box
              component={'img'}
              src={mainTestimonialImg2}
              sx={{
                borderRadius: '50%',
                width: 70,
                height: 'auto',
              }}
            />
            <Box>
              <Typography
                variant="body2"
                component="span"
                sx={{
                  fontSize: '0.85rem',
                  color: theme.colors.yellow.main,
                }}
              >
                {'★'.repeat(Math.floor(mainTestimonial.rating))}
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  mb: theme.spacing(1),
                  color: theme.palette.grey[800],
                  fontSize: theme.typography.h5.fontSize,
                }}
              >
                {mainTestimonial.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[500],
                  mb: theme.spacing(2),
                  fontSize: theme.typography.body2.fontSize,
                }}
              >
                {mainTestimonial.role}, {mainTestimonial.location}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[600],
                  lineHeight: theme.typography.body1.lineHeight,
                  fontSize: theme.typography.h6.fontSize,
                  fontWeight: '400',
                }}
              >
                "{mainTestimonial.quote}"
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Side Testimonials */}
        <Box
          sx={{
            flex: 0.5,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2),
          }}
        >
          {sideTestimonials.map((testimonial) => (
            <Paper
              key={testimonial.id}
              elevation={3}
              sx={{
                borderRadius: theme.shape.borderRadius.large,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: { md: 70 },
                  height: { xs: 120, md: 'auto' },
                  p: { xs: 2, md: 1 },
                  flexShrink: 0,
                  overflow: 'hidden',
                  aspectRatio: '1 / 1',
                }}
              >
                <Box
                  component="img"
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                    objectPosition: 'center',
                  }}
                />
              </Box>

              {/* Content Box - will appear below image in mobile, right in desktop */}
              <Box
                sx={{
                  p: theme.spacing(1),
                  px: theme.spacing(2),
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flex: 1,
                }}
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ fontSize: '0.85rem' }}
                >
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      style={{
                        color:
                          index < Math.floor(testimonial.rating)
                            ? theme.colors.yellow.main
                            : '#ccc',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </Typography>

                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    mb: theme.spacing(1),
                    color: theme.palette.grey[800],
                    fontSize: theme.typography.h6.fontSize,
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.grey[500],
                    mb: theme.spacing(1),
                    fontSize: theme.typography.caption.fontSize,
                  }}
                >
                  {testimonial.role}, {testimonial.location}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.grey[600],
                    lineHeight: theme.typography.body2.lineHeight,
                    fontSize: theme.typography.body2.fontSize,
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="outlined"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.body2.fontSize,
            px: theme.spacing(2),
            py: theme.spacing(1),
            '&:hover': {
              color: 'white',
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.dark,
            },
          }}
          title={'Read More Success Stories'}
        />
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
