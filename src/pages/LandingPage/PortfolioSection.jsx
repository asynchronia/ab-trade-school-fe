import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
import cardIcon1 from '../../assets/cardIcon1.svg';
import cardIcon2 from '../../assets/cardIcon2.svg';
import cardIcon3 from '../../assets/cardIcon3.svg';
import portfolioOverImg from '../../assets/portfolioOverImg.svg';
import Button from '../../components/Button/Button';
import theme from '../../utils/theme';

const PortfolioSection = () => {
  const portfolioCards = [
    {
      id: '1',
      img: cardIcon1,
      title: 'Industry Certification',
      description:
        'Earn recognized certifications that validate your trading expertise. Our certifications are backed by NSE and industry partners.',
      benefits: [
        'NSE Certified Market Professional',
        'NSM Department Certification',
        'Algo Trading Specialist',
      ],
      ctaText: 'Learn More',
    },
    {
      id: '2',
      img: cardIcon2,
      title: 'Simulated Portfolio',
      description:
        'Practice with our state-of-the-art trading simulator with real-time data and track your virtual portfolio without real money.',
      benefits: [
        '$10,000.000 virtual capital',
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
        py: theme.spacing(8),
        px: {
          lg: '100px',
          xs: theme.spacing(2),
          sm: theme.spacing(4),
        },
        my: theme.spacing(8.75),
        backgroundImage: `url(${portfolioOverImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          px: theme.spacing(2),
          color: theme.colors.text.light,
        }}
      >
        <Box textAlign="center" mb={theme.spacing(4)}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              mb: theme.spacing(2),
            }}
          >
            Real Results. Real Trading
          </Typography>
          <Typography variant="subtitle1">
            Our programs are designed to deliver measurable outcomes for your
            trading career
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            px: {
              xs: theme.spacing(2),
              sm: theme.spacing(4),
            },
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: theme.spacing(3),
            placeItems: 'center',
          }}
        >
          {portfolioCards.map((card) => (
            <Card
              key={card.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: theme.shape.borderRadius.medium,
                width: '100%',
                maxWidth: 360,
                boxShadow: theme.shadows[3],
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  p: theme.spacing(3),
                }}
              >
                <img src={card.img} alt="" />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: theme.typography.fontWeightBold,
                    mb: theme.spacing(2),
                    color: 'primary.dark',
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  variant="body2"
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
                        <CheckCircleIcon color="primary" fontSize="small" />
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
                <Button variant="contained" title={card.ctaText} />
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default PortfolioSection;
