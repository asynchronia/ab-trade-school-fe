import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Box,
    Divider,
    Drawer,
    Fab,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Pagination,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import chapterImg from '../../assets/chapter1.png';
import copy from '../../assets/copy.png';
import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import whatsapp from '../../assets/whatsapp.png';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import theme from '../../utils/theme';
import RegisterForm from './RegistrationForm';

const chapterContent = [
  {
    heading: '1. What are Financial Securities?',
    paragraph:
      'Financial securities are financial instruments that hold some type of monetary value and can be traded in financial markets. They represent either ownership in a publicly traded corporation (e.g., shares/stocks), a creditor relationship with a government or corporation (e.g., bonds), or the right to buy or sell another security (e.g., options, futures).',
  },
  {
    heading: '2. Importance of Financial Securities',
    paragraph: [
      'Provide liquidity for investors (easy to buy/sell)',
      'Help in capital formation for companies',
      'Offer diversification for risk management',
      'Serve as a base for wealth creation',
      'Facilitate price discovery in markets',
    ],
  },
  {
    heading: '3. Types of Financial Securities',
    paragraph:
      'Financial securities are broadly classified into three main types:',
    children: [
      {
        heading: 'A. Equity Securities',
        paragraph: 'These represent ownership in a company.',
        examples: ['Common stocks (shares)', 'Preference shares'],
        keyFeatures: [
          'Gives shareholders ownership rights',
          'Investors earn through dividends and capital gains',
          'High return potential but comes with higher risk',
          'Shareholders may get voting rights',
        ],
      },
      {
        heading: 'B. Debt Securities',
        paragraph:
          'These represent a loan made by the investor to an entity like a government or company.',
        examples: [
          'Bonds',
          'Debentures',
          'Treasury bills',
          'Certificates of deposit (CDs)',
        ],
        keyFeatures: [
          'Fixed or variable interest payments (called coupons)',
          'Generally less risky than equity',
          'Investors are creditors, not owners',
          'Repaid at a maturity date',
        ],
      },
      {
        heading: 'C. Derivative Securities',
        paragraph:
          'These are financial instruments whose value is derived from other underlying assets like stocks, commodities, currencies, etc.',
        examples: [
          'Futures contracts',
          'Options (Call & Put)',
          'Swaps',
          'Forwards',
        ],
        keyFeatures: [
          'Used for hedging, speculation, and arbitrage',
          'Can offer high returns but carry high risk',
          'Require a good understanding of the underlying asset',
        ],
      },
    ],
  },
  {
    heading: '4. Investment Basics in Financial Securities',
    paragraph:
      'To begin investing in securities, one must understand the core principles and risk factors involved.',
    children: [
      {
        heading: 'A. Risk and Return',
        paragraph: [
          'High return = High risk (Equities, Derivatives).',
          ' Lower return = Low risk (Government Bonds, Fixed Deposits).',
          ' Understand your risk appetite before investing.',
        ],
      },
      {
        heading: 'B. Diversification',
        paragraph: [
          'Spread investments across multiple asset types to reduce risk.',
          ' Avoid investing all money in one type of security.',
        ],
      },
      {
        heading: 'C. Liquidity',
        paragraph: [
          'Liquidity means how quickly a security can be converted into cash.',
          ' Stocks are more liquid, while real estate or long-term bonds are less liquid.',
        ],
      },
      {
        heading: 'D. Investment Horizon',
        paragraph: [
          'Short-term: Derivatives, trading equities.',
          ' Long-term: Bonds, mutual funds, blue-chip stocks.',
        ],
      },
      {
        heading: 'E. Regulatory Framework',
        paragraph: [
          'SEBI: Protects investor interests, promotes fair trading, and ensures transparency.',
          ' RBI: Regulates money market and banking instruments.',
          ' Stock Exchanges: Provide platforms for securities trading.',
        ],
      },
    ],
  },
  {
    heading: '5. How to Invest in Financial Securities',
    questions: [
      {
        question: '1',
        answer:
          'Open a Demat and Trading Account (with brokers like Alice Blue, etc.)',
      },
      {
        question: '2',
        answer: 'Understand your investment goal (growth, income, safety)',
      },
      {
        question: '3',
        answer:
          'Research securities – use company financials, market trends, etc.',
      },
      {
        question: '4',
        answer: 'Diversify your portfolio',
      },
      {
        question: '5',
        answer: 'Monitor performance regularly',
      },
      {
        question: '6',
        answer:
          'Stay updated with market news, SEBI regulations, and economic changes',
      },
    ],
  },
  {
    heading: '6. Examples of Securities and Their Use Cases',
    table: [
      {
        securityType: 'Equity',
        example: 'Infosys Shares',
        useCase: 'Long-term wealth creation',
      },
      {
        securityType: 'Debt',
        example: 'Govt Bonds',
        useCase: 'Safe returns & capital preservation',
      },
      {
        securityType: 'Derivatives',
        example: 'Nifty Options',
        useCase: 'Hedging or high-risk speculation',
      },
    ],
  },
];

const SideSocialBar = () => {
  const iconStyles = {
    width: { xs: 36, sm: 48 },
    height: { xs: 36, sm: 48 },
    mb: 2,
    cursor: 'pointer',
    bgcolor: 'white',
  };

  return (
    <Box
      sx={{
        width: { xs: 80, sm: 100 },
        position: 'fixed',
        background:
          'linear-gradient(to bottom, #1E40AF40, #FFFFFF, #1E40AF40 )',
        py: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px',
      }}
    >
      <CalendarMonthIcon
        sx={{ fontSize: { xs: 32, sm: 40 }, color: '#2a3eb1', mb: 2 }}
      />
      <Typography
        variant="body2"
        textAlign="center"
        fontWeight="500"
        mb={3}
        sx={{ fontSize: { xs: '12px', sm: '14px' } }}
      >
        October
        <br />
        22, 2024
      </Typography>

      {/* Social icons */}
      <Box component={'img'} src={whatsapp} sx={iconStyles} />
      <Box component={'img'} src={email} sx={iconStyles} />
      <Box component={'img'} src={facebook} sx={iconStyles} />
      <Box component={'img'} src={twitter} sx={iconStyles} />
      <Box component={'img'} src={linkedin} sx={iconStyles} />
      <Box component={'img'} src={copy} sx={iconStyles} />
    </Box>
  );
};

const ChapterDataPage = () => {
  const location = useLocation();
  console.log(location);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [registerOpen, setRegisterOpen] = useState(false);
  const totalChapters = 13;
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleChapterChange = (event, value) => {
    setCurrentChapter(value);
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          px: {
            xs: theme.spacing(2),
            sm: theme.spacing(4),
            md: theme.spacing(10),
          },
          pt: theme.spacing(2),
          gap: { xs: 0, lg: 4 },
        }}
      >
        {/* Desktop Sidebar */}
        <Box
          sx={{
            width: '100px',
            flexShrink: 0,
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <SideSocialBar />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            maxWidth: '850px',
            flexGrow: 1,
            width: { xs: '100%', lg: 'auto' },
          }}
        >
          <Typography
            component="img"
            src={chapterImg}
            width="100%"
            height="auto"
            mb={4}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: { xs: 1, sm: 0 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h5"
                fontWeight="600"
                color="primary"
                mr={1}
                sx={{ fontSize: { xs: '18px', sm: '20px' } }}
              >
                1
              </Typography>
              <Divider
                sx={{
                  flexGrow: 1,
                  borderBottomWidth: 4,
                  borderColor: '#69C969',
                  width: { xs: 80, sm: 120 },
                }}
              />
            </Box>

            <Typography
              variant="body1"
              fontWeight="500"
              sx={{ fontSize: { xs: '14px', sm: '16px' } }}
            >
              Chapter 1
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'column', sm: 'row' },
              mt: 1,
              mb: 3,
              gap: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h6"
              fontWeight="700"
              sx={{ fontSize: { xs: '18px', sm: '20px', md: '24px' } }}
            >
              Introduction to Stock Markets
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Button
                variant="text"
                size={isMobile ? 'small' : 'medium'}
                startIcon={<ArrowBackIcon />}
                sx={{
                  textTransform: 'none',
                  fontSize: { xs: '12px', sm: '14px' },
                }}
                color="black"
                title={'Previous'}
              />
              <Button
                variant="text"
                size={isMobile ? 'small' : 'medium'}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: 'none',
                  color: 'primary.main',
                  fontSize: { xs: '12px', sm: '14px' },
                }}
                title={'Next'}
              />
            </Box>
          </Box>

          {/* Your content */}
          <Box sx={{ maxWidth: '850px', mx: 'auto', mt: 4 }}>
            {chapterContent.map((item, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  fontWeight="700"
                  fontSize={{ xs: '16px', sm: '18px' }}
                  gutterBottom
                >
                  {item.heading}
                </Typography>

                {typeof item.paragraph === 'string' && (
                  <Typography
                    sx={{
                      fontSize: { xs: '14px', sm: '15px' },
                      lineHeight: 1.6,
                    }}
                  >
                    {item.paragraph}
                  </Typography>
                )}

                {Array.isArray(item.paragraph) && (
                  <List dense disablePadding>
                    {item.paragraph.map((point, i) => (
                      <ListItem
                        key={i}
                        disableGutters
                        sx={{
                          pl: 2,
                          py: 0.2,
                          alignItems: 'flex-start',
                        }}
                      >
                        <Typography
                          fontSize={{ xs: '14px', sm: '15px' }}
                          lineHeight={1.5}
                        >
                          • {point}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                )}

                {item.children &&
                  item.children.map((child, i) => (
                    <Box key={i} sx={{ mt: 1.5, pl: 2 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="600"
                        gutterBottom
                        sx={{ fontSize: { xs: '15px', sm: '16px' } }}
                      >
                        {child.heading}
                      </Typography>

                      <Typography
                        sx={{
                          mb: 1,
                          fontSize: { xs: '14px', sm: '15px' },
                          lineHeight: 1.6,
                        }}
                      >
                        {child.paragraph}
                      </Typography>

                      {child.examples && (
                        <>
                          <Typography
                            fontWeight="500"
                            mt={1}
                            mb={0.5}
                            sx={{ fontSize: { xs: '14px', sm: '15px' } }}
                          >
                            Examples:
                          </Typography>
                          <List dense disablePadding>
                            {child.examples.map((ex, j) => (
                              <ListItem
                                key={j}
                                disableGutters
                                sx={{
                                  pl: 2,
                                  py: 0.2,
                                  alignItems: 'flex-start',
                                }}
                              >
                                <Typography
                                  fontSize={{ xs: '14px', sm: '15px' }}
                                  lineHeight={1.5}
                                >
                                  • {ex}
                                </Typography>
                              </ListItem>
                            ))}
                          </List>
                        </>
                      )}

                      {child.keyFeatures && (
                        <>
                          <Typography
                            fontWeight="500"
                            mt={1}
                            mb={0.5}
                            sx={{ fontSize: { xs: '14px', sm: '15px' } }}
                          >
                            Key Features:
                          </Typography>
                          <List dense disablePadding>
                            {child.keyFeatures.map((feat, k) => (
                              <ListItem
                                key={k}
                                disableGutters
                                sx={{
                                  pl: 2,
                                  py: 0.2,
                                  alignItems: 'flex-start',
                                }}
                              >
                                <Typography
                                  fontSize={{ xs: '14px', sm: '15px' }}
                                  lineHeight={1.5}
                                >
                                  • {feat}
                                </Typography>
                              </ListItem>
                            ))}
                          </List>
                        </>
                      )}
                    </Box>
                  ))}

                {item.questions && (
                  <List dense disablePadding>
                    <Typography mb={1} pl={2}>
                      Step by step guide :
                    </Typography>
                    {item.questions.map((q, i) => (
                      <ListItem
                        key={i}
                        disableGutters
                        sx={{ pl: 2, py: 0.2, alignItems: 'flex-start' }}
                      >
                        <Typography
                          fontSize={{ xs: '14px', sm: '15px' }}
                          lineHeight={1.5}
                        >
                          {q.question}. {q.answer}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                )}

                {item.table && (
                  <Box sx={{ mt: 2, overflowX: 'auto' }}>
                    <Box
                      component="table"
                      sx={{
                        width: '100%',
                        minWidth: '300px',
                        borderCollapse: 'collapse',
                        border: '1px solid #ccc',
                        fontSize: { xs: '13px', sm: '15px' },
                      }}
                    >
                      <thead>
                        <Box component="tr" sx={{ backgroundColor: '#f6f8fc' }}>
                          <Box
                            component="th"
                            sx={{
                              border: '1px solid #ccc',
                              textAlign: 'left',
                              px: { xs: 1, sm: 2 },
                              py: 1,
                              fontWeight: 600,
                            }}
                          >
                            Security Type
                          </Box>
                          <Box
                            component="th"
                            sx={{
                              border: '1px solid #ccc',
                              textAlign: 'left',
                              px: { xs: 1, sm: 2 },
                              py: 1,
                              fontWeight: 600,
                            }}
                          >
                            Example
                          </Box>
                          <Box
                            component="th"
                            sx={{
                              border: '1px solid #ccc',
                              textAlign: 'left',
                              px: { xs: 1, sm: 2 },
                              py: 1,
                              fontWeight: 600,
                            }}
                          >
                            Use Case
                          </Box>
                        </Box>
                      </thead>
                      <tbody>
                        {item.table.map((row, i) => (
                          <Box
                            component="tr"
                            key={i}
                            sx={{
                              backgroundColor: i % 2 === 1 ? '#f6f8fc' : '#fff',
                            }}
                          >
                            <Box
                              component="td"
                              sx={{
                                border: '1px solid #ccc',
                                px: { xs: 1, sm: 2 },
                                py: 1,
                              }}
                            >
                              {row.securityType}
                            </Box>
                            <Box
                              component="td"
                              sx={{
                                border: '1px solid #ccc',
                                px: { xs: 1, sm: 2 },
                                py: 1,
                              }}
                            >
                              {row.example}
                            </Box>
                            <Box
                              component="td"
                              sx={{
                                border: '1px solid #ccc',
                                px: { xs: 1, sm: 2 },
                                py: 1,
                              }}
                            >
                              {row.useCase}
                            </Box>
                          </Box>
                        ))}
                      </tbody>
                    </Box>
                  </Box>
                )}

                {index !== chapterContent.length - 1 && (
                  <Divider sx={{ mt: 3 }} />
                )}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
              my: 7,
              px: { xs: 1, sm: 0 },
            }}
          >
            <Pagination
              count={totalChapters}
              page={currentChapter}
              onChange={handleChapterChange}
              showPreviousButton
              showNextButton
              size={isMobile ? 'small' : 'medium'}
              sx={{
                '& .MuiPagination-ul': {
                  flexWrap: 'wrap',
                  gap: '1px',
                  alignItems: 'center',
                },
                '& .MuiPaginationItem-root': {
                  color: 'text.primary',
                  fontSize: { xs: '14px', sm: '16px' },
                  textTransform: 'none',
                  minWidth: { xs: '28px', sm: '32px' },
                  height: { xs: '28px', sm: '32px' },

                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    borderRadius: '50%',
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    '&:hover': {
                      backgroundColor: 'primary.main',
                    },
                    '&.Mui-focusVisible': {
                      backgroundColor: 'primary.main',
                    },
                  },

                  '&:not(.Mui-selected):hover': {
                    backgroundColor: 'transparent',
                    color: 'primary.main',
                  },

                  '&.MuiPaginationItem-previousNext': {
                    borderRadius: '4px',
                    padding: { xs: '4px', sm: '8px' },
                  },
                },
              }}
            />
          </Box>
        </Box>

        {/* Desktop Register Form */}
        <Box
          sx={{
            width: '340px',
            flexShrink: 0,
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <RegisterForm />
        </Box>
      </Box>

      {isMobile && (
        <>
          <Fab
            color="secondary"
            onClick={() => setRegisterOpen(true)}
            sx={{
              position: 'fixed',
              bottom: 16,
              right: 16,
              zIndex: 1000,
            }}
          >
            <Typography variant="caption" fontWeight="600">
              Join
            </Typography>
          </Fab>

          {/* Register Drawer */}
          <Drawer
            anchor="right"
            open={registerOpen}
            onClose={() => setRegisterOpen(false)}
            sx={{
              '& .MuiDrawer-paper': {
                width: { xs: '100%', sm: 400 },
                p: 2,
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography variant="h6">Register</Typography>
              <IconButton onClick={() => setRegisterOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <RegisterForm />
            </Box>

            <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #e0e0e0' }}>
              <Typography variant="subtitle2" mb={2} fontWeight="600">
                Share
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box
                  component={'img'}
                  src={whatsapp}
                  sx={{ width: 40, height: 40, cursor: 'pointer' }}
                />
                <Box
                  component={'img'}
                  src={email}
                  sx={{ width: 40, height: 40, cursor: 'pointer' }}
                />
                <Box
                  component={'img'}
                  src={facebook}
                  sx={{ width: 40, height: 40, cursor: 'pointer' }}
                />
                <Box
                  component={'img'}
                  src={twitter}
                  sx={{ width: 40, height: 40, cursor: 'pointer' }}
                />
                <Box
                  component={'img'}
                  src={linkedin}
                  sx={{ width: 40, height: 40, cursor: 'pointer' }}
                />
                <Box
                  component={'img'}
                  src={copy}
                  sx={{ width: 40, height: 40, cursor: 'pointer' }}
                />
              </Box>
            </Box>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default ChapterDataPage;
