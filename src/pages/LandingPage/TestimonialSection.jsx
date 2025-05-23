import { Box, Paper, Typography } from '@mui/material';
import mainTestimonialImage from '../../assets/mainTestimonialImage.svg';
import testimonial1Image from '../../assets/testimonial1Image.svg';
import testimonial2Image from '../../assets/testimonial2Image.svg';
import testimonial3Image from '../../assets/testimonial3Image.svg';
import Button from '../../components/Button/Button';
import theme from '../../utils/theme';

const TestimonialsSection = () => {
  const mainTestimonial = {
    name: 'Sneha Patel',
    role: 'Algo Trader',
    location: 'Bangalore',
    quote:
      'The algo trading course transformed my approach to markets. I now have 3 automation strategies running that have been profitable for the last 6 months.',
    image: mainTestimonialImage,
  };

  const sideTestimonials = [
    {
      id: 1,
      name: 'Rohit Kapoor',
      role: 'Options Trader',
      location: 'Mumbai',
      quote:
        'After 3 months of trading, I was able to consistently apply the options strategies I learned. My monthly returns improved by 22%.',
      image: testimonial1Image,
    },
    {
      id: 2,
      name: 'Arjun Singh',
      role: 'Futures Trader',
      location: 'Delhi',
      quote:
        'The risk management techniques I learned helped me survive the recent market volatility.',
      image: testimonial2Image,
    },
    {
      id: 3,
      name: 'Stefan Strohm',
      role: 'Beginner Trader',
      location: 'Chennai',
      quote:
        'The beginner course gave me the confidence to start trading with real money.',
      image: testimonial3Image,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: theme.spacing(8),
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
            fontSize: theme.typography.h3.fontSize,
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
            fontSize: theme.typography.body1.fontSize,
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
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: theme.spacing(4),
          mb: theme.spacing(6),
        }}
      >
        {/* Main Testimonial */}
        <Paper
          elevation={3}
          sx={{
            flex: 2,
            width: '100%',
            maxWidth: { md: '668px' },
            display: 'flex',
            flexDirection: 'column',
            borderRadius: theme.shape.borderRadius.large,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: 350,
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
          <Box sx={{ p: theme.spacing(4) }}>
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
                fontSize: theme.typography.body1.fontSize,
                fontStyle: 'italic',
              }}
            >
              "{mainTestimonial.quote}"
            </Typography>
          </Box>
        </Paper>

        {/* Side Testimonials */}
        <Box
          sx={{
            flex: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1.25),
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
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: 70,
                  p: `${theme.spacing(3)} 0 ${theme.spacing(3)} ${theme.spacing(
                    3
                  )}`,
                  overflow: 'hidden',
                  flex: 0.2,
                }}
              >
                <Box
                  component="img"
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
              <Box
                sx={{
                  p: theme.spacing(3),
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flex: 0.8,
                }}
              >
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
                    fontStyle: 'italic',
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
            fontSize: theme.typography.body1.fontSize,
            px: theme.spacing(2),
            py: theme.spacing(1),
            '&:hover': {
              color: theme.palette.primary.dark,
              backgroundColor: 'transparent',
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
