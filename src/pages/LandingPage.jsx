import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Divider,
    Grid,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Link,
    List,
    ListItem,
    ListItemIcon,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import abLogo2 from '../assets/ab-logo2.svg';
import baseImg1 from '../assets/baseImg1.svg';
import baseImg2 from '../assets/baseImg2.svg';
import baseImg3 from '../assets/baseImg3.svg';
import bg1 from '../assets/bg1.svg';
import bg2 from '../assets/bg2.svg';
import bg3 from '../assets/bg3.svg';
import bgImage3 from '../assets/bgImg3.svg';
import cardIcon1 from '../assets/cardIcon1.svg';
import cardIcon2 from '../assets/cardIcon2.svg';
import cardIcon3 from '../assets/cardIcon3.svg';
import cardImage1 from '../assets/cardImg1.svg';
import cardImage2 from '../assets/cardImg2.svg';
import cardImage3 from '../assets/cardImg3.svg';
import cardImage4 from '../assets/cardImg4.svg';
import cardImage5 from '../assets/cardImg5.svg';
import galleryImage1 from '../assets/galleryImage1.svg';
import galleryImage2 from '../assets/galleryImage2.svg';
import galleryImage3 from '../assets/galleryImage3.svg';
import galleryImage4 from '../assets/galleryImage4.svg';
import galleryImage5 from '../assets/galleryImage5.svg';
import heroSectionImg from '../assets/heroSectionImg.svg';
import mainTestimonialImage from '../assets/mainTestimonialImage.svg';
import marketImg1 from '../assets/marketImg1.svg';
import marketImg2 from '../assets/marketImg2.svg';
import overImg1 from '../assets/overImg1.svg';
import overImg2 from '../assets/overImg2.svg';
import overImg3 from '../assets/overImg3.svg';
import person1 from '../assets/person1.svg';
import person2 from '../assets/person2.svg';
import person3 from '../assets/person3.svg';
import portfolioOverImg from '../assets/portfolioOverImg.svg';
import rightCircle from '../assets/rightCircle.svg';
import rightImg2 from '../assets/rightImg2.svg';
import testimonial1Image from '../assets/testimonial1Image.svg';
import testimonial2Image from '../assets/testimonial2Image.svg';
import testimonial3Image from '../assets/testimonial3Image.svg';
import webinar1 from '../assets/webinar1.svg';
import webinar2 from '../assets/webinar2.svg';
import webinar3 from '../assets/webinar3.svg';
import Button from '../components/Button/Button';
import CardCarousel from '../components/CardCorousel/CardCarousel';
import CustomDropdown from '../components/Customdropdown/Customdropdown';
import Navbar from '../components/Navbar/Navbar';
import TrackCard from '../components/TrackCard/TrackCard';
import WebinarCard from '../components/WebinarCard/WebinarCard';

const statsItem = [
  { number: '20+', label: 'Modules' },
  { number: '1M+', label: 'Learners' },
  { number: '0', label: 'Course Fee' },
];

const features = [
  { label: 'NISM-Backed', dotClass: 'blue' },
  { label: 'NSE Partnership', dotClass: 'blue' },
  { label: '#1 on TradingView', dotClass: 'blue' },
  { label: 'SEBI Compliant', dotClass: 'blue' },
  { label: '4.9/5 Rating', dotClass: 'yellow' },
];

const trackData = [
  {
    title: 'Beginner',
    description:
      'Master the fundamentals of trading and markets. Perfect for newcomers.',
    buttonText: 'Explore Track',
    icon: cardImage1,
  },
  {
    title: 'Options',
    description:
      'Learn strategies for options trading, from basics to advanced techniques.',
    buttonText: 'Explore Track',
    icon: cardImage2,
  },
  {
    title: 'Futures',
    description:
      'Master futures trading with risk management and strategic execution.',
    buttonText: 'Explore Track',
    icon: cardImage3,
  },
  {
    title: 'Algo Trading',
    description:
      'Build automated trading systems with code and quantitative strategies.',
    buttonText: 'Explore Track',
    icon: cardImage4,
  },
  {
    title: 'Strategy Builder',
    description:
      'Create custom trading strategies and learn portfolio management.',
    buttonText: 'Explore Track',
    icon: cardImage5,
  },
];

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

export const categories = [
  'Basic Knowledge',
  'Fundamental analysis',
  'Intraday trading strategies',
  'Investments',
  'Technical analysis',
  'Technical charts',
  'Technical strategies',
];

export const levels = ['Beginner', 'Intermediate', 'Advanced'];

export const languages = [
  'Hindi',
  'English',
  'Bengali',
  'Kannada',
  'Malayalam',
  'Tamil',
  'Telugu',
  'Marathi',
];

const paidCourses = [
  {
    id: 1,
    image: marketImg1,
  },
  {
    id: 2,
    image: marketImg2,
  },
];

const webinarData = [
  {
    id: 1,
    title: 'Untold equity wealth secrets',
    image: webinar3,
    time: '11:00 AM - 12:00 PM',
    date: 'May 3rd 2025',
    language: 'English',
    location: 'Bangalore',
  },
  {
    id: 2,
    title: '1ly options Hedging tool',
    image: webinar2,
    time: '11:00 AM - 12:00 PM',
    date: 'May 3rd 2025',
    language: 'Tamil',
    location: 'Online',
  },
  {
    id: 3,
    title: 'Advanced Market Selection',
    image: webinar1,
    time: '11:00 AM - 12:00 PM',
    date: 'May 3rd 2025',
    language: 'Tamil',
    location: 'Online',
  },
];

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

const freeCourses = [
  {
    id: 1,
    baseImage: baseImg1,
    overlayImage: overImg1,
    title: 'Learn to Analyze Market Trends Like Pros',
    desc: 'Discover how to interpret charts, spot price action patterns, and make informed trading decisions with confidence using technical tools',
    time: '1 hr',
  },
  {
    id: 2,
    baseImage: baseImg2,
    overlayImage: overImg2,
    title: 'Master Financial Charts and Trading Strategies Easily',
    desc: 'Understand candlestick formations, trend-lines, and reversal setups to apply the right strategies across market cycles and instruments',
    time: '1 hr',
  },
  {
    id: 3,
    baseImage: baseImg3,
    overlayImage: overImg3,
    title: 'Boost Your Trading Skills with Practical Knowledge',
    desc: 'Join expert-led webinars to explore futures, options, and real market examples that sharpen your decision-making and portfolio-building skills',
    time: '1 hr',
  },
];

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

const eventData = [
  {
    img: galleryImage1,
    title: 'GEN-AI MEET UP',
    location: 'MUMBAI',
    rows: 2,
    cols: 1,
  },
  {
    img: galleryImage2,
    title: 'MEET & GREET',
    location: 'HYDERABAD',
    rows: 1,
    cols: 1,
  },
  {
    img: galleryImage3,
    title: 'OFFLINE MEETUP',
    location: 'BENGALURU',
    rows: 2,
    cols: 2,
  },
  {
    img: galleryImage4,
    title: 'MEET & GREET',
    location: 'BENGALURU',
    rows: 2,
    cols: 1,
  },
  {
    type: 'text-card',
    rows: 2,
    cols: 1,
  },
  {
    img: galleryImage5,
    title: "CREATOR'S MEET UP",
    location: 'BENGALURU',
    rows: 1,
    cols: 2,
  },
];

const faqData = [
  {
    question: 'What is AliceBlue Trade School?',
    answer:
      'AliceBlue Trade School is an online learning platform offering structured trading and investing courses. Learn from market experts through free and paid modules, designed for both beginners and active traders.',
  },
  {
    question: 'Do I need an AliceBlue trading account to access the courses?',
    answer:
      'No, you don’t need a trading account to explore our courses. Anyone can sign up and start learning. However, having an AliceBlue account allows you to apply what you learn more seamlessly.',
  },
  {
    question: 'Do you provide stock tips or investment advice in the courses?',
    answer:
      'No. Our courses are for educational purposes only. We focus on teaching you how to analyze and make informed decisions — not giving buy/sell recommendations.',
  },
  {
    question: 'Will I get recordings of live webinars or sessions?',
    answer:
      'Yes. If you register for a live webinar, you’ll receive the session recording via email or inside your dashboard for later viewing.',
  },
  {
    question: 'I’m new to trading. Are these courses suitable for beginners?',
    answer:
      'Absolutely! Many of our courses are designed for beginners and explain concepts from the ground up — no prior knowledge required',
  },
  {
    question: 'How long do I have access to the courses?',
    answer:
      'Once you enroll, you typically have lifetime access to the course materials, so you can learn at your own pace without any rush.',
  },
  {
    question: 'What if I need help or have questions during the course?',
    answer:
      'You can reach out to our support team via chat or email anytime. We also have a dedicated forum where you can ask questions and connect with instructors and fellow learners.',
  },
];

const footerLinks = [
  {
    title: 'Company',
    subLinks: [
      { text: 'About us', url: '#' },
      { text: 'AB cares', url: '#' },
      { text: 'Careers', url: '#' },
      { text: 'HRMS Login', url: '#' },
      { text: 'Ekye Guidelines', url: '#' },
    ],
  },
  {
    title: 'App & Products',
    subLinks: [
      { text: 'ANT Web', url: '#' },
      { text: 'ANT Mobi', url: '#' },
      { text: 'ANT API', url: '#' },
      { text: 'IPO', url: '#' },
      { text: 'Ekye Guidelines', url: '#' },
    ],
  },
  {
    title: 'Tools & Calculators',
    subLinks: [
      { text: 'Brokerage Calculator', url: '#' },
      { text: 'Margin Calculator', url: '#' },
      { text: 'RMS Live Updates', url: '#' },
    ],
  },
  {
    title: 'Important Links',
    subLinks: [
      { text: 'Pricing', url: '#' },
      { text: 'KYC Tracker', url: '#' },
      { text: 'Trading Holidays', url: '#' },
      { text: 'PR Coverage', url: '#' },
      { text: 'Trade School', url: '#' },
      { text: 'Employee Referral Policy', url: '#' },
    ],
  },
  {
    title: 'Policy',
    subLinks: [
      { text: 'DND Policy', url: '#' },
      { text: 'Investor Charter', url: '#' },
      { text: 'Legal Documentation', url: '#' },
      { text: 'Privacy Policy', url: '#' },
      { text: 'Feedback', url: '#' },
      { text: 'Annual Returns', url: '#' },
      { text: 'E - Voting', url: '#' },
      { text: 'Mandatory Member Details', url: '#' },
    ],
  },
];

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Basic Knowledge');
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <div>
      <Navbar user={false} />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          px: { xs: 4, md: 12 },
          pt: 10,
          minHeight: 600,
          background: 'linear-gradient(135deg, #45108A, #3D065F, #200554)',
          overflow: 'hidden',
          color: 'white',
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
            right: -250,
            bottom: '15%',
            width: 490,
            height: 490,
            zIndex: 0,
          }}
        />

        {/* Main Content */}
        <Grid
          container
          spacing={6}
          sx={{
            position: 'relative',
            zIndex: 1,
            flexWrap: 'nowrap',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Grid item xs={12} md={6} flex={0.5}>
            <Typography
              variant="h3"
              fontWeight={700}
              gutterBottom
              sx={{
                background:
                  'linear-gradient(to right, #C3922E, #FFFBCC, #FAF1BA, #EFD98E, #EED688, #EB9D29, #C3922E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: '3rem',
              }}
            >
              Learn the Markets.
              <br />
              Master the Moves.
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #FFFFFF, #f0f0f0, #C9CACB, #B6B7B9, #d0d1d2, #FBFBFB)',
                  backgroundClip: 'text',
                }}
              >
                Trade Like You Mean It.
              </span>
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ mb: 4, color: '#e0e0e0', fontSize: '1.2rem' }}
            >
              Start your trading journey with{' '}
              <span style={{ color: '#EB9D29' }}>20+ structured modules</span>{' '}
              covering real strategies and tools. All courses are{' '}
              <span style={{ color: '#EB9D29' }}>100% free</span> and designed
              for both beginners and experienced traders.{' '}
            </Typography>

            <Stack sx={{ display: 'flex', gap: 2, flexDirection: 'row' }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#4AAF39',
                  padding: 12,
                  marginBottom: '20px',
                }}
                title={' Start Learning Now'}
              />
              <Button
                variant="outlined"
                style={{
                  color: '#EB9D29',
                  borderColor: '#EB9D29',
                  padding: 12,
                  marginBottom: '20px',
                }}
                title={' Start Learning Now'}
              />
            </Stack>

            <Stack direction="row" spacing={6}>
              {statsItem.map((stat, index) => (
                <Box key={index}>
                  <Typography variant="h4" fontWeight={700}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#EB9D29' }}>
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
            sx={{ textAlign: 'right', position: 'relative', flex: 0.5 }}
          >
            <Box
              component="img"
              src={heroSectionImg}
              alt="Hero illustration"
              sx={{
                width: '100%',
                maxWidth: 620,
                mb: 2,
              }}
            />

            {/* <Box
              sx={{
                position: 'absolute',
                bottom: '30%',
                right: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                px: 2,
                py: 1,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ color: '#d8b4fe' }}>
                Trading market insights
              </Typography>
              <Typography fontWeight={600} sx={{ color: '#facc15' }}>
                live on 20/06/2025 | 12:00PM
              </Typography>
            </Box> */}
          </Grid>
        </Grid>
      </Box>

      {/* Cards section */}
      <Box
        component="section"
        sx={{
          py: 8,
          px: 4,
          backgroundColor: '#f9fafb',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#111827',
              fontSize: '2.25rem',
            }}
          >
            Your Goals. Your Track.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#6b7280',
              lineHeight: 1.6,
            }}
          >
            Get on the fast track to smarter trading with learning paths built
            around your needs. Practical, structured, and guided by real-market
            expertise.
          </Typography>
        </Container>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            mb: 6,
          }}
        >
          {features.map((feature, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                px: 2,
                py: 1,
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#1f2937',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  mr: 1,
                  backgroundColor:
                    feature.dotClass === 'blue' ? '#3b82f6' : '#facc15',
                }}
              />
              {feature.label}
            </Paper>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {trackData.map((item, index) => (
            <TrackCard key={index} {...item} />
          ))}
        </Box>
      </Box>

      {/* Instructor section */}
      <Box
        component="section"
        sx={{
          py: 7.5,
          px: 2.5,
          textAlign: 'left',
        }}
      >
        <Container sx={{ mb: 5, textAlign: 'center' }}>
          {' '}
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: '2rem',
              fontWeight: 'bold',
              mb: 1.25,
            }}
          >
            Learn from the Best
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: '1rem',
            }}
          >
            Our instructors are seasoned market professionals with years of
            real-world trading experience.
          </Typography>
        </Container>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3.75,
          }}
        >
          {instructors.map((instructor, idx) => (
            <Card
              key={idx}
              sx={{
                width: 320,
                borderRadius: 3, // 12px
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
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
                    width: 320,
                    objectFit: 'cover',
                  }}
                />
                <Chip
                  label={instructor.badge}
                  size="small"
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    bgcolor: '#2563eb',
                    color: 'white',
                    fontSize: '0.75rem',
                    borderRadius: 1.5, // 6px
                  }}
                />
              </Box>

              <CardContent sx={{ p: 2 }}>
                {' '}
                {/* 16px */}
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    mb: 0.5, // 4px
                  }}
                >
                  {instructor.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontSize: '0.875rem',
                    mb: 1.25, // 10px
                  }}
                >
                  {instructor.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.875rem', // 14px
                    lineHeight: 1.5,
                    color: '#444',
                    mb: 1.5, // 12px
                  }}
                >
                  {instructor.description}
                </Typography>
                <Box sx={{ mb: 1.25 }}>
                  {' '}
                  {/* 10px */}
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      fontSize: '0.85rem',
                      color: '#facc15',
                    }}
                  >
                    {'★'.repeat(Math.floor(instructor.rating))}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      fontSize: '0.85rem',
                      color: '#555',
                      ml: 0.5,
                    }}
                  >
                    {instructor.rating} ({instructor.reviews} reviews)
                  </Typography>
                </Box>
                <Link
                  href="#"
                  sx={{
                    fontWeight: 500,
                    color: '#2563eb',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  View Profile & Courses
                </Link>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Courses section */}
      <Box px={'100px'} py={6}>
        <Box textAlign={'center'} mb={4}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Master the Markets
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mb={4}>
            Unlock your trading potential with trade school
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} mb={4} flexWrap="wrap">
          <CustomDropdown
            label="Categories"
            options={categories}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <CustomDropdown
            label="Level"
            options={levels}
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          />
          <CustomDropdown
            label="Language"
            options={languages}
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          />
        </Stack>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold">
            Basic Knowledge - Beginner - English
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Link
              href="#"
              underline="hover"
              fontWeight="500"
              color="text.primary"
            >
              See All
            </Link>
            <IconButton size="small">
              <ArrowBackIos fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        <Box
          display="flex"
          justifyContent={'space-between'}
          gap={2}
          sx={{ paddingBottom: 2 }}
        >
          {paidCourses.map((course) => (
            <Box
              key={course.id}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                width: 530,
                height: 310,
                flexGrow: 1,
                // flexShrink: 0,
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

      {/* Webinar section */}
      <Box sx={{ py: 8, px: '100px' }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent={'center'}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  textAlign: 'center',
                  //   px: 2,
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    fontSize: '26px',
                  }}
                >
                  Webinar Programs - Online and Offline{' '}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: '700px',
                    mx: 'auto',
                    lineHeight: 1.6,
                    fontSize: '18px',
                  }}
                >
                  Learn trading through live simulations, workshops, and expert
                  mentorship perfect for both beginners and experienced traders
                  seeking real-time education.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <WebinarCard webinars={webinarData} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Portfolio section */}
      <Box
        sx={{
          py: 8,
          px: '100px',
          my: '70px',
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
            px: 2,
            color: 'white',
          }}
        >
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
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
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            {portfolioCards.map((card) => (
              <Card
                key={card.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  maxWidth: '360px',

                  boxShadow: 3,
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <img src={card.img} alt="" />
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: 'primary.dark',
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {card.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <List dense disablePadding>
                    {card.benefits.map((benefit, index) => (
                      <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="body2">{benefit}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <Box sx={{ px: 3, pb: 2 }}>
                  <Button variant="contained" title={card.ctaText} />
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Free courses section */}
      <Box
        component="section"
        sx={{
          py: 4,
          px: 2,
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: '2rem',
              color: '#1a365d',
              mb: 1,
            }}
          >
            Get Started with{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Free Expert Courses
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4a5568',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Explore easy-to-follow courses designed to get you started right.
          </Typography>
        </Box>

        <CardCarousel cards={freeCourses} interval={2000} />
      </Box>

      {/* Testimonial section */}
      <Box
        component="section"
        sx={{
          py: 8,
          px: 4,
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: '2rem',
              color: '#1e293b',
              mb: 2,
              fontWeight: 700,
            }}
          >
            Trusted By Traders
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: '#475569',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Hear from our community of traders who have transformed their
            trading journey with our courses.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 4, mb: 6 }}>
          {/* Main Testimonial */}
          <Paper
            elevation={3}
            sx={{
              flex: 2,
              maxWidth: 668,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '8px',
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
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </Box>
            <Box sx={{ p: 4 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  mb: 1,
                  color: '#1e293b',
                  fontSize: '1.5rem',
                }}
              >
                {mainTestimonial.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#64748b',
                  mb: 2,
                  fontSize: '0.875rem',
                }}
              >
                {mainTestimonial.role}, {mainTestimonial.location}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  lineHeight: 1.6,
                  fontSize: '1.125rem',
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
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {sideTestimonials.map((testimonial) => (
              <Paper
                key={testimonial.id}
                elevation={3}
                sx={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  display: 'flex',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    p: '24px 0 24px 24px',
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
                      objectFit: 'fill',
                      objectPosition: 'center',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    p: 3,
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
                      mb: 1,
                      color: '#1e293b',
                      fontSize: '1.1rem',
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      mb: 1,
                      fontSize: '0.75rem',
                    }}
                  >
                    {testimonial.role}, {testimonial.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#475569',
                      lineHeight: 1.5,
                      fontSize: '0.875rem',
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
            variant="text"
            sx={{
              color: '#3b82f6',
              fontWeight: 600,
              fontSize: '1rem',
              px: 2,
              py: 1,
              '&:hover': {
                color: '#2563eb',
                backgroundColor: 'transparent',
              },
            }}
          >
            Read More Success Stories →
          </Button>
        </Box>
      </Box>

      {/* Gallery section */}
      <Box sx={{ maxWidth: 1100, mx: 'auto', textAlign: 'center', mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Dive Into Our Community
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Learn Online, Connect Offline. Engage with other learners, alumni, and
          mentors and attend community sessions to learn from each other in our
          curated community.
        </Typography>

        <ImageList
          variant="quilted"
          cols={4}
          rows={3}
          rowHeight={160}
          sx={{ width: '100%', margin: '0 auto' }}
        >
          {eventData.map((item, index) =>
            item.type === 'text-card' ? (
              <Box
                key={index}
                sx={{
                  gridColumnEnd: `span ${item.cols}`,
                  gridRowEnd: `span ${item.rows}`,
                  bgcolor: '#4B0082',
                  color: 'white',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  p: 2,
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  58+
                </Typography>
                <Typography variant="subtitle1">
                  MEET UPS IN 8 CITIES
                </Typography>
              </Box>
            ) : (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                sx={{ borderRadius: 2, overflow: 'hidden' }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={`📍 ${item.location}`}
                  position="bottom"
                  sx={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))',
                    color: 'white',
                    '& .MuiImageListItemBar-title': {
                      fontWeight: 500,
                    },
                  }}
                />
              </ImageListItem>
            )
          )}
        </ImageList>
      </Box>

      {/* FAQs section */}
      <Container maxWidth="md" sx={{ mt: 15, mb: 8 }}>
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
          Frequently Asked Questions (FAQs)
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          mb={4}
        >
          Got questions? We’ve answered the most common ones to help you get
          started quickly and confidently
        </Typography>

        {faqData.map((item, index) => (
          <Accordion key={index} sx={{ mb: 2, padding: 1, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<CallMadeIcon />}>
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                {item.answer || 'Answer goes here...'}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* Ready to start section */}
      <Box
        sx={{
          backgroundImage: `url(${bgImage3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 6, md: 10 },
          px: 0,
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent={'center'}
          >
            {/* Left content */}
            <Grid item xs={12} md={6} sx={{ flexGrow: 0 }}>
              <Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight="bold"
                  color="white"
                  sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
                  gutterBottom
                >
                  Ready to Trade Smarter?
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  mb={4}
                  sx={{ fontSize: { xs: '16px', md: '20px' } }}
                >
                  Watch free videos, join expert webinars, and explore trading
                  insights all in one place.
                </Typography>
                <Button variant="contained" title="Start Learning Now" />
              </Box>
            </Grid>

            {/* Right image */}
            <Grid item xs={12} md={6} sx={{ flexGrow: 0 }}>
              <Box
                component="img"
                src={rightImg2}
                alt="Trading Illustration"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  mx: 'auto',
                  display: 'block',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer section */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          p: 4,
          backgroundColor: '#111827',
          color: '#FDF4EC',
          paddingLeft: '100px',
          paddingRight: '100px',
        }}
      >
        <Box sx={{}}>
          <img src={abLogo2} alt="logo" />
          <Typography variant="h6" sx={{ fontSize: '12px', mt: 2 }}>
            © 2025, Alice Blue Financial Services{' '}
          </Typography>
        </Box>

        {footerLinks.map((section, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '150px',
              display: 'flex',
              justifyContent: 'space-between',
              flex: 1,
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 'bold', mb: 1 }}
              >
                {section.title}
              </Typography>
              <List dense disablePadding>
                {section.subLinks.map((link, linkIndex) => (
                  <ListItem key={linkIndex} disablePadding sx={{ py: 0.5 }}>
                    <Link href={link.url} color="inherit" underline="hover">
                      {link.text}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Footer notice section */}
      <Box
        sx={{
          backgroundColor: '#111827',
          pl: '100px',
          pr: '100px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          lineHeight: '1.5',
        }}
      >
        <Container maxWidth="xl" sx={{ color: '#FDF4EC' }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: '18px',
            }}
          >
            Attention Investors
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>Prevent unauthorised transactions in your account</strong>{' '}
            update your mobile number/email with your Stock Broker. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Stock Brokers can accept securities as margin from clients only by
            way of pledge in the depository system w.e.f. September 1, 2020.
            Update your mobile number & email with your stock broker/depository
            participant and receive OTP directly from the depository on your
            email and/or mobile number to create a pledge.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>20% upfront margin</strong> of the transaction value to
            trade in the cash market segment. Investors may please refer to the
            Exchanges Frequently Asked Questions (FAQs) issued vide circular
            reference NSE/INSP/45191 dated July 31, 2020, and NSE/INSP/45534
            dated August 31, 2020, and other guidelines issued from time to time
            in this regard.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>Check your Securities/MF/Bonds</strong> in the consolidated
            account statement issued by NSDL/CDSL every month.
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              Corporate Office:
            </Typography>
            <Typography>
              No. 153/2, 3rd Floor, M.B.Arcade, Bagalur Main Road, Dwarska
              Nagar, Vishhanika, Bengaluru – 560 063, Karnataka.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', mt: 1 }}>
              Registered Office:
            </Typography>
            <Typography>
              Old No.56/2, New No.58, UC Nagar, Vinayagar Kovil Street, Erode
              -8, Tamil Nadu- 638002.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ mb: 1 }}>
              Alice Blue Financial Services (P) Ltd - NSE CM | NSE FO | NSE
              CDS-90112 SEBI REG - INZ000156038
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Alice Blue Financial Services (P) Ltd - BSE CM | BSE FO | BSE
              CD-6670 SEBI REG - INZ000156038
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Alice Blue Financial Services (P) Ltd - CDSL DP ID 12085300 DP
              SEBI REG - IN-DP-364-2018
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Alice Blue Financial Services (P) Ltd - MCX-56770 SEBI REG -
              INZ000156038
            </Typography>
          </Box>

          <Typography sx={{ mb: 2 }}>
            We hereby declare that we are doing PRO trading.
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              Procedure to file a complaint on SEBI SCORES:
            </Typography>
            <Typography>
              Register on SCORES portal. Mandatory details for filing
              complaints: Name, PAN, Address, Mobile Number, E-mail ID.
            </Typography>
            <Typography>
              Benefits: Effective Communication. Speedy redressal of the
              grievances.
            </Typography>
          </Box>

          <Typography sx={{ mb: 2, fontStyle: 'italic' }}>
            Investment in securities markets are subject to market risks, read
            all the related documents carefully before investing. Brokerage will
            not exceed SEBI prescribed limit.
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography>
              For queries regarding account opening or activation, email to
              accountactivation@aliceblueindia.com
            </Typography>
            <Typography>
              For fund updates, email to funds@aliceblueindia.com
            </Typography>
          </Box>

          <Typography sx={{ mb: 2, fontWeight: 'bold' }}>
            Disclaimer: Prevent unauthorised transactions in your account.
            Update your mobile number/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            All clients have to update their email and mobile number with
            Member: Investor Grievance grievances@aliceblueindia.com
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              KYC is a one time exercise
            </Typography>
            <Typography>
              while dealing in securities markets – once KYC is done through a
              SEBI registered intermediary (broker, DP, Mutual Fund etc.), you
              need not undergo the same process again when you approach another
              intermediary.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              No need to issue cheques by investors
            </Typography>
            <Typography>
              while subscribing to an IPO. Just write the bank account number
              and sign in the application form to authorise your bank to make
              payment in case of allotment. No worries for refund as the money
              remains in the investor's account.
            </Typography>
          </Box>

          <Typography sx={{ pb: 2 }}>
            Investors are requested to note that Alice Blue Financial Services
            Private Limited is permitted to receive money from investor through
            designated bank accounts only named as Upstream Client Nodal Bank
            Account (USCNBA). Alice Blue Financial Services Private Limited is
            also required to disclose these USCNB accounts to Stock Exchange.
            Hence, you are requested to use following USCNB accounts only for
            the purpose of dealings in your trading account with us. The details
            of these USCNB accounts are also displayed by Stock Exchanges on
            their website under "Know/Locate your Stock Broker Bank Details.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default LandingPage;
