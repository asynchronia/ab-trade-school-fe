import { BookmarkBorder } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography,
} from '@mui/material';
import cardBg1 from '../../assets/cardBg1.jpg';
import cardBg2 from '../../assets/cardBg2.jpg';
import cardBg3 from '../../assets/cardBg3.jpg';
import cardBg4 from '../../assets/cardBg4.jpg';
import cardBg5 from '../../assets/cardBg5.jpg';
import cardBg6 from '../../assets/cardBg6.jpg';
import overImg1 from '../../assets/overImg1.webp';
import overImg2 from '../../assets/overImg2.webp';
import overImg3 from '../../assets/overImg3.webp';
import overImg4 from '../../assets/overImg4.jpg';
import overImg5 from '../../assets/overImg5.jpg';
import overImg6 from '../../assets/overImg6.jpg';
import Navbar from '../../components/Navbar/Navbar';
import theme from '../../utils/theme';

const ModulesPage = () => {
  const modules = [
    {
      id: 1,
      topLineColor: '#4caf50',
      topic: 'Introduction to Stock Markets',
      chapters: 15,
      bgImg: cardBg1,
      overImg: overImg1,
    },
    {
      id: 2,
      topLineColor: '#2196f3',
      topic: 'Technical Analysis Mastery',
      chapters: 22,
      bgImg: cardBg2,
      overImg: overImg2,
    },
    {
      id: 3,
      topLineColor: '#ffc107',
      topic: 'Fundamental Analysis Framework',
      chapters: 18,
      bgImg: cardBg3,
      overImg: overImg3,
    },
    {
      id: 4,
      topLineColor: '#4caf50',
      topic: 'Futures Trading Strategies',
      chapters: 13,
      bgImg: cardBg4,
      overImg: overImg4,
    },
    {
      id: 5,
      topLineColor: '#2196f3',
      topic: 'Options Theory for Professionals',
      chapters: 25,
      bgImg: cardBg5,
      overImg: overImg5,
    },
    {
      id: 6,
      topLineColor: '#ffc107',
      topic: 'Advanced Option Strategies',
      chapters: 14,
      bgImg: cardBg6,
      overImg: overImg6,
    },
    {
      id: 7,
      topLineColor: '#4caf50',
      topic: 'Market Taxation Optimization',
      chapters: 8,
      bgImg: cardBg1,
      overImg: overImg1,
    },
    {
      id: 8,
      topLineColor: '#2196f3',
      topic: 'Alternative Markets Trading',
      chapters: 19,
      bgImg: cardBg2,
      overImg: overImg2,
    },
    {
      id: 9,
      topLineColor: '#ffc107',
      topic: 'Risk Management & Psychology',
      chapters: 16,
      bgImg: cardBg3,
      overImg: overImg3,
    },
    {
      id: 10,
      topLineColor: '#4caf50',
      topic: 'Algorithmic Trading Systems',
      chapters: 16,
      bgImg: cardBg4,
      overImg: overImg4,
    },
    {
      id: 11,
      topLineColor: '#2196f3',
      topic: 'Mutual Fund Investment Mastery',
      chapters: 32,
      bgImg: cardBg5,
      overImg: overImg5,
    },
    {
      id: 12,
      topLineColor: '#ffc107',
      topic: 'Trading Psychology Mastery',
      chapters: 603,
      bgImg: cardBg6,
      overImg: overImg6,
    },
    {
      id: 13,
      topLineColor: '#4caf50',
      topic: 'Financial Modeling Excellence',
      chapters: 18,
      bgImg: cardBg1,
      overImg: overImg1,
    },
    {
      id: 14,
      topLineColor: '#2196f3',
      topic: 'Insurance & Risk Planning',
      chapters: 9,
      bgImg: cardBg2,
      overImg: overImg2,
    },
    {
      id: 15,
      topLineColor: '#ffc107',
      topic: 'Sector-Specific Analysis',
      chapters: 15,
      bgImg: cardBg3,
      overImg: overImg3,
    },
    {
      id: 16,
      topLineColor: '#4caf50',
      topic: 'Social Stock Exchange Trading',
      chapters: 4,
      bgImg: cardBg4,
      overImg: overImg4,
    },
    {
      id: 17,
      topLineColor: '#2196f3',
      topic: 'National Pension Scheme Planning',
      chapters: 8,
      bgImg: cardBg5,
      overImg: overImg5,
    },
  ];

  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          px: {
            xs: theme.spacing(2),
            sm: theme.spacing(4),
            md: theme.spacing(12),
          },
          pt: {
            xs: theme.spacing(2),
            md: theme.spacing(4),
          },
          pb: {
            xs: theme.spacing(4),
            md: theme.spacing(6),
          },
          width: { xs: '100%', xl: '1440px' },
          mx: 'auto',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}
        >
          Modules
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'left',
            gap: '50px 50px',
          }}
        >
          {modules.map((module) => (
            <Box key={module.id}>
              <Card
                sx={{
                  height: '100%',
                  width: { xs: '100%', md: '380px' },
                  display: 'flex',
                  flexDirection: 'column',
                  border: 'none',
                  boxShadow: 'none',
                  borderRadius: 2,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: 'bold', color: 'text.primary' }}
                  >
                    {module.id}
                  </Typography>
                  <Box
                    sx={{
                      height: 4,
                      width: '100%',
                      bgcolor: module.topLineColor,
                      //   borderRadius: '8px 8px 0 0',
                    }}
                  />
                </Box>

                <CardContent sx={{ py: 1, px: 0 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 500,
                      mb: 1,
                      lineHeight: '24px',
                      fontSize: '20px',
                    }}
                  >
                    {module.topic}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: '24px', fontWeight: 500 }}
                  >
                    {module.chapters} Chapters
                  </Typography>

                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={module.bgImg}
                      alt="Background"
                      sx={{ width: '100%', display: 'block' }}
                    />

                    <Box
                      component="img"
                      src={module.overImg}
                      alt="Overlay"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1,
                        objectFit: 'contain',
                      }}
                    />

                    {/* Bookmark Icon */}
                    <IconButton
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 2,
                        color: 'white',
                      }}
                    >
                      <BookmarkBorder />
                    </IconButton>
                  </Box>
                </CardContent>

                <CardActions>
                  <Button
                    color="primary"
                    size="small"
                    sx={{
                      fontWeight: 500,
                      display: 'flex',
                      justifyContent: 'left',
                    }}
                    fullWidth
                  >
                    View module
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ModulesPage;
