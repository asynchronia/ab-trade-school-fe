import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Pagination,
    Typography,
} from '@mui/material';
import { useState } from 'react';
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
          'High return = High risk (Equities, Derivatives)',
          'Lower return = Low risk (Government Bonds, Fixed Deposits)',
          'Understand your risk appetite before investing',
        ],
      },
      {
        heading: 'B. Diversification',
        paragraph: [
          'Spread investments across multiple asset types to reduce risk',
          'Avoid investing all money in one type of security',
        ],
      },
      {
        heading: 'C. Liquidity',
        paragraph: [
          'Liquidity means how quickly a security can be converted into cash',
          'Stocks are more liquid, while real estate or long-term bonds are less liquid',
        ],
      },
      {
        heading: 'D. Investment Horizon',
        paragraph: [
          'Short-term: Derivatives, trading equities',
          'Long-term: Bonds, mutual funds, blue-chip stocks',
        ],
      },
      {
        heading: 'E. Regulatory Framework',
        paragraph: [
          'SEBI: Protects investor interests, promotes fair trading, and ensures transparency.',
          'RBI: Regulates money market and banking instruments.',
          'Stock Exchanges: Provide platforms for securities trading.',
        ],
      },
    ],
  },
  {
    heading: '5. How to Invest in Financial Securities',
    questions: [
      {
        question: 'Step 1',
        answer:
          'Open a Demat and Trading Account (with brokers like Alice Blue, etc.)',
      },
      {
        question: 'Step 2',
        answer: 'Understand your investment goal (growth, income, safety)',
      },
      {
        question: 'Step 3',
        answer:
          'Research securities – use company financials, market trends, etc.',
      },
      {
        question: 'Step 4',
        answer: 'Diversify your portfolio',
      },
      {
        question: 'Step 5',
        answer: 'Monitor performance regularly',
      },
      {
        question: 'Step 6',
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
    width: 48,
    height: 48,
    mb: 2,
    cursor: 'pointer',
    bgcolor: 'white',
  };

  return (
    <Box
      sx={{
        width: 100,
        position: 'fixed',
        background:
          'linear-gradient(to bottom, #1E40AF40, #FFFFFF, #1E40AF40 )',
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px',
      }}
    >
      <CalendarMonthIcon sx={{ fontSize: 40, color: '#2a3eb1', mb: 2 }} />
      <Typography variant="body2" textAlign="center" fontWeight="500" mb={3}>
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
  const [currentChapter, setCurrentChapter] = useState(1);
  const totalChapters = 13;

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
          gap: 4,
        }}
      >
        <Box sx={{ width: '100px', flexShrink: 0 }}>
          <SideSocialBar />
        </Box>

        {/* Main Content */}
        <Box sx={{ maxWidth: '850px', flexGrow: 1 }}>
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
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5" fontWeight="600" color="primary" mr={1}>
                1
              </Typography>
              <Divider
                sx={{
                  flexGrow: 1,
                  borderBottomWidth: 4,
                  borderColor: '#69C969',
                  width: 120,
                }}
              />
            </Box>

            <Typography variant="body1" fontWeight="500">
              Chapter 1
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 1,
              mb: 3,
            }}
          >
            <Typography variant="h6" fontWeight="700">
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
                size="medium"
                startIcon={<ArrowBackIcon />}
                sx={{ textTransform: 'none' }}
                color="black"
                title={'Previous'}
              />
              <Button
                variant="text"
                size="medium"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: 'none',
                  color: 'primary.main',
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
                  fontSize="18px"
                  gutterBottom
                >
                  {item.heading}
                </Typography>

                {typeof item.paragraph === 'string' && (
                  <Typography sx={{ fontSize: '15px', lineHeight: 1.6 }}>
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
                        <Typography fontSize="15px" lineHeight={1.5}>
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
                      >
                        {child.heading}
                      </Typography>

                      <Typography
                        sx={{ mb: 1, fontSize: '15px', lineHeight: 1.6 }}
                      >
                        {child.paragraph}
                      </Typography>

                      {child.examples && (
                        <>
                          <Typography fontWeight="500" mt={1} mb={0.5}>
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
                                <Typography fontSize="15px" lineHeight={1.5}>
                                  • {ex}
                                </Typography>
                              </ListItem>
                            ))}
                          </List>
                        </>
                      )}

                      {child.keyFeatures && (
                        <>
                          <Typography fontWeight="500" mt={1} mb={0.5}>
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
                                <Typography fontSize="15px" lineHeight={1.5}>
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
                    {item.questions.map((q, i) => (
                      <ListItem
                        key={i}
                        disableGutters
                        sx={{ pl: 2, py: 0.2, alignItems: 'flex-start' }}
                      >
                        <Typography fontSize="15px" lineHeight={1.5}>
                          <strong>{q.question}:</strong> {q.answer}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                )}

                {item.table && (
                  <Box
                    component="table"
                    sx={{
                      mt: 2,
                      width: '100%',
                      borderCollapse: 'collapse',
                      border: '1px solid #ccc',
                      fontSize: '15px',
                    }}
                  >
                    <thead>
                      <Box component="tr" sx={{ backgroundColor: '#f6f8fc' }}>
                        <Box
                          component="th"
                          sx={{
                            border: '1px solid #ccc',
                            textAlign: 'left',
                            px: 2,
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
                            px: 2,
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
                            px: 2,
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
                            sx={{ border: '1px solid #ccc', px: 2, py: 1 }}
                          >
                            {row.securityType}
                          </Box>
                          <Box
                            component="td"
                            sx={{ border: '1px solid #ccc', px: 2, py: 1 }}
                          >
                            {row.example}
                          </Box>
                          <Box
                            component="td"
                            sx={{ border: '1px solid #ccc', px: 2, py: 1 }}
                          >
                            {row.useCase}
                          </Box>
                        </Box>
                      ))}
                    </tbody>
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
              //   py: 1,
            }}
          >
            <Pagination
              count={totalChapters}
              page={currentChapter}
              onChange={handleChapterChange}
              showPreviousButton
              showNextButton
              siblingCount={totalChapters}
              boundaryCount={totalChapters}
              sx={{
                '& .MuiPagination-ul': {
                  flexWrap: 'wrap',
                  gap: '1px',
                  alignItems: 'center',
                },
                '& .MuiPaginationItem-root': {
                  color: 'text.primary',
                  fontSize: '16px',
                  textTransform: 'none',

                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
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
                    padding: '8px',
                  },
                },
              }}
            />
          </Box>
        </Box>

        {/* Right Register Form */}
        <Box sx={{ width: '340px', flexShrink: 0 }}>
          <RegisterForm />
        </Box>
      </Box>
    </Box>
  );
};

export default ChapterDataPage;
