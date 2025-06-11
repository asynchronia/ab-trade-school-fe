import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Link,
    Typography,
} from '@mui/material';
import bg1 from '../../assets/bg1.webp';
import bg2 from '../../assets/bg2.webp';
import bg3 from '../../assets/bg3.webp';
import person1 from '../../assets/person1.webp';
import person2 from '../../assets/person2.webp';
import person3 from '../../assets/person3.webp';
import theme from '../../utils/theme';

const InstructorSection = () => {
  const instructors = [
    {
      name: 'Nirakar Rajeshkumar Rathod',
      role: 'Technical Analyst',
      badge: 'Fundamental Analysis',
      description:
        'Master technical indicators, sentiment, breakouts, strategies, F&O, portfolio analysis',
      rating: 4.9,
      reviews: 328,
      bgImage: bg1,
      personImage: person1,
    },
    {
      name: 'Anish Kumar',
      role: 'Technical Analyst',
      badge: 'Technical Analysis',
      description:
        'Analyze charts, track sentiment, spot breakouts, and build F&O portfolios.',
      rating: 4.8,
      reviews: 256,
      bgImage: bg2,
      personImage: person2,
    },
    {
      name: 'Rupesh Chidharala',
      role: 'Research Analyst',
      badge: 'Technical Analysis',
      description:
        'Learn fundamentals, options trading, scalping, hedging, and price action.',
      rating: 4.9,
      reviews: 412,
      bgImage: bg3,
      personImage: person3,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: theme.spacing(6),
        px: {
          xs: theme.spacing(2),
          sm: theme.spacing(4),
        },
        textAlign: 'left',
      }}
    >
      <Container
        sx={{
          mb: theme.spacing(5),
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: {
              xs: '1.6rem',
              sm: '32px',
            },
            fontWeight: theme.typography.fontWeightBold,
            mb: theme.spacing(1.25),
          }}
        >
          Learn from the Best
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.colors.gray[600],
            fontSize: {
              xs: '0.95rem',
              sm: theme.typography.h6.fontSize,
            },
          }}
        >
          Our instructors are seasoned market professionals with years of
          real-world trading experience.
        </Typography>
      </Container>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          overflowX: 'auto',
          overflowY: 'hidden',
          gap: {
            xs: theme.spacing(2.5),
            sm: theme.spacing(3.75),
          },
          pb: theme.spacing(1),
          px: {
            xs: theme.spacing(2),
            sm: theme.spacing(4),
          },
          '&': {
            '@media (min-width: 1200px)': {
              justifyContent: 'center',
            },
          },
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {instructors.map((instructor, idx) => (
          <Card
            key={idx}
            sx={{
              minWidth: {
                xs: 280,
                sm: 320,
              },
              maxWidth: 360,
              border: '#e0e0e0 1px solid',
              flexShrink: 0,
              borderRadius: theme.shape.borderRadius.large,
              boxShadow: theme.shadows[2],
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-6px)',
              },
            }}
          >
            <Box sx={{ position: 'relative', height: 220 }}>
              <CardMedia
                component="img"
                height="220"
                image={instructor.bgImage}
                alt="Background"
                sx={{ objectFit: 'cover' }}
              />
              <Box
                component="img"
                src={instructor.personImage}
                alt={instructor.name}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translate(-50%, 0%)',
                  width: '100%',
                  maxWidth: 320,
                  objectFit: 'cover',
                }}
              />
              <Chip
                label={instructor.badge}
                size="medium"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  bgcolor: theme.colors.blue.primary,
                  color: theme.colors.text.light,
                  fontSize: theme.typography.body2.fontSize,
                  borderRadius: '0 8px 0 0',
                  px: '10px',
                  py: '10px ',
                }}
              />
            </Box>
            <CardContent
              sx={{
                p: {
                  xs: theme.spacing(2),
                  sm: theme.spacing(2.5),
                },
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing(1),
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: theme.typography.fontWeightBold,
                    textAlign: 'left',
                  }}
                >
                  {instructor.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.colors.gray[500],
                    fontSize: theme.typography.body2.fontSize,
                    textAlign: 'left',
                  }}
                >
                  {instructor.role}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  fontSize: theme.typography.body2.fontSize,
                  lineHeight: theme.typography.body2.lineHeight,
                  color: theme.colors.gray[600],
                  textAlign: 'left',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  minHeight: `calc(${theme.typography.body2.lineHeight} * ${theme.typography.body2.fontSize} * 3)`,
                }}
              >
                {instructor.description}
              </Typography>

              <Box
                sx={{
                  mt: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: theme.spacing(1),
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      fontSize: '0.85rem',
                      color: theme.colors.gray[600],
                      ml: theme.spacing(0.5),
                    }}
                  >
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        style={{
                          color:
                            index < Math.floor(instructor.rating)
                              ? theme.colors.yellow.main
                              : '#ccc',
                        }}
                      >
                        ★
                      </span>
                    ))}{' '}
                    {instructor.rating} ({instructor.reviews} reviews)
                  </Typography>
                </Box>

                <Link
                  href="#"
                  sx={{
                    fontWeight: theme.typography.fontWeightMedium,
                    color: theme.colors.blue.dark,
                    mt: '20px',
                    fontSize: theme.typography.body2.fontSize,
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  View Profile & Courses
                </Link>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default InstructorSection;
