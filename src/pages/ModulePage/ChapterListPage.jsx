import { BookmarkBorder } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    IconButton,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../assets/cardBg3.jpg';
import chapterMainImg from '../../assets/chapterMainImg.svg';
import overImg from '../../assets/overImg1.png';
import Navbar from '../../components/Navbar/Navbar';
import theme from '../../utils/theme';

const chapters = [
  {
    id: 1,
    title: 'Financial Securities: Definition, Types & Investment Basics',
  },
  {
    id: 2,
    title: 'How to Invest in the Stock Market: A Beginner’s Guide',
  },
  {
    id: 3,
    title: 'Indian Financial Markets: Structure, Meaning, and Types',
  },
  {
    id: 4,
    title: 'SEBI and Market Regulations',
  },
  {
    id: 5,
    title: 'Role of Market Intermediaries',
  },
  {
    id: 6,
    title: 'The IPO Process',
  },
  {
    id: 7,
    title: 'Evaluating an IPO',
  },
  {
    id: 8,
    title: 'Introduction to Stock Indices',
  },
  {
    id: 9,
    title: 'Understanding Benchmarks',
  },
  {
    id: 10,
    title: 'How the Stock Market Works',
  },
  {
    id: 11,
    title: 'Types of Market Orders',
  },
  {
    id: 12,
    title: 'Trading vs Investing',
  },
  {
    id: 13,
    title: 'Introduction to Fundamental Analysis',
  },
];

const ChapterListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <Box
        sx={{
          position: 'relative',
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4" fontWeight={600}>
            1
          </Typography>
          <Divider
            sx={{
              width: '170px',
              borderBottom: '4px solid rgba(105, 201, 105, 1)',
            }}
          />
        </Box>

        <Box
          component={'img'}
          src={chapterMainImg}
          alt=""
          width={210}
          height={140}
          sx={{
            position: 'absolute',
            right: 72,
            top: 0,
            display: { xs: 'none', md: 'flex' },
          }}
        />

        <Typography variant="h5" fontWeight={600} my={3} fontSize={32}>
          Introduction to Stock Markets
        </Typography>

        {chapters.map((chapter) => (
          <Card
            key={chapter.id}
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              mb: { xs: 3, md: 6 },
              borderRadius: 2,
              boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 290,
                minWidth: 160,
                height: 180,
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRight: '1px solid #eee',
              }}
            >
              <Box
                component="img"
                src={overImg}
                alt="Overlay"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '180px',
                  objectFit: 'contain',
                  zIndex: 1,
                }}
              />

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

            <CardContent
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'start',
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {chapter.id}. {chapter.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={'16px'}
              >
                Stock markets are platforms where buyers and sellers trade
                shares of publicly listed companies. They help companies raise
                capital and allow investors to earn returns through price
                appreciation and dividends.
              </Typography>
              <Button
                size="small"
                sx={{
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  color: 'rgba(22, 105, 201, 1)',
                  fontSize: '14px',
                }}
                onClick={() => navigate('/chapter/1')}
              >
                View module
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ChapterListPage;
