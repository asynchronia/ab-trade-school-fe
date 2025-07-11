import { ArrowForward, Check } from '@mui/icons-material';
import {
    Box,
    Card,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import cardIcon1 from '../../assets/cardIcon1.svg';
import cardIcon2 from '../../assets/cardIcon2.svg';
import cardIcon3 from '../../assets/cardIcon3.svg';
import portfolioOverImg from '../../assets/portfolioOverImg.svg';
import Button from '../../components/Button/Button';
import theme from '../../utils/theme';

const PortfolioSection = () => {
  const navigate = useNavigate();
  const portfolioCards = [
    {
      id: '1',
      img: cardIcon1,
      title: 'Industry Certification',
      description:
        'Earn recognized certifications that validate your trading expertise. Our certifications are backed by NSE and industry partners.',
      benefits: [
        'NSE Certified Market Professional',
        'NISM Derivatives Certification',
        'Algo Trading Specialist',
      ],
      ctaText: 'Learn More',
    },
    {
      id: '2',
      img: cardIcon2,
      title: 'Simulated Portfolio',
      description:
        'Practice with our state-of-the-art trading simulator with real-time data and track your virtual portfolio without risking real money.',
      benefits: [
        '₹10,00,000 virtual capital',
        'Real-time market simulation',
        'Performance analytics dashboard',
      ],
      ctaText: 'Learn More',
    },
    {
      id: '3',
      img: cardIcon3,
      title: 'Career Opportunities',
      description:
        'Connect with trading firms and financial institutions through our placement assistance program for qualified graduates.',
      benefits: [
        'Proprietary trading firm partnerships',
        'Financial analyst positions',
        'Trading desk opportunities',
      ],
      ctaText: 'Learn More',
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        py: {
          xs: theme.spacing(6),
        },
        px: {
          lg: '100px',
          xs: theme.spacing(2),
          sm: theme.spacing(4),
        },
        my: theme.spacing(3),
        backgroundColor: '#45108A',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Gray overlay image */}
      <Box
        component="img"
        src={portfolioOverImg}
        alt="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(100%) brightness(0.9)',
          mixBlendMode: 'luminosity',
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1600px',
          color: theme.colors.text.light,
        }}
      >
        {/* Header section */}
        <Box textAlign="center" mb={theme.spacing(4)}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              mb: theme.spacing(1),
              color: 'white',
              fontSize: {
                xs: '1.6rem',
                sm: '32px',
              },
            }}
          >
            Real Results. Real Trading
          </Typography>
          <Typography
            variant="subtitle1"
            component="h3"
            sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Our programs are designed to deliver measurable outcomes for your
            trading career
          </Typography>
        </Box>

        {/* Cards grid */}
        <Box
          sx={{
            overflowX: {
              xs: 'auto',
              lg: 'visible',
            },
            width: '100%',
            pb: 2,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: theme.spacing(3),
              justifyContent: {
                xs: 'flex-start',
                sm: 'center',
              },
              px: theme.spacing(1),
              width: {
                xs: 'max-content',
                lg: '100%',
              },
              flexWrap: {
                xs: 'nowrap',
                lg: 'wrap',
              },
            }}
          >
            {portfolioCards.map((card) => (
              <Card
                key={card.id}
                sx={{
                  flexShrink: 0,
                  borderRadius: theme.shape.borderRadius.medium,
                  width: {
                    xs: 300,
                    lg: 'calc(33.333% - 16px)',
                    xl: 380,
                  },
                  maxWidth: 380,
                  boxShadow: theme.shadows[5],
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(1px)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: theme.spacing(3),
                    color: 'whitesmoke',
                  }}
                >
                  <img
                    src={card.img}
                    alt="card-img"
                    style={{ height: '48px', marginBottom: '16px' }}
                  />
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: theme.typography.fontWeightBold,
                      mb: theme.spacing(2),
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    component={'h4'}
                    sx={{
                      mb: theme.spacing(2),
                    }}
                  >
                    {card.description}
                  </Typography>

                  <Divider
                    sx={{
                      my: theme.spacing(2),
                    }}
                  />

                  <List dense disablePadding>
                    {card.benefits.map((benefit, index) => (
                      <ListItem
                        key={index}
                        disableGutters
                        sx={{
                          py: theme.spacing(0.5),
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 32,
                          }}
                        >
                          <Check
                            color="#F59E0B"
                            sx={{ color: '#F59E0B' }}
                            fontSize="small"
                          />
                        </ListItemIcon>
                        <Typography variant="body2">{benefit}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <Box
                  sx={{
                    px: theme.spacing(3),
                    pb: theme.spacing(2),
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'white',
                      color: 'black',
                      textTransform: 'capitalize',
                    }}
                    endIcon={<ArrowForward />}
                    title={card.ctaText}
                    fullWidth
                    onClick={() => navigate('/courses')}
                  />
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioSection;
