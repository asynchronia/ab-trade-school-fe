import { Add, Remove } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import VideocamIcon from '@mui/icons-material/Videocam';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
    Box,
    Collapse,
    Container,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    Tooltip,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import abLogo2 from '../../assets/ab-logo2.svg';
import appStore from '../../assets/appStore.svg';
import playStore from '../../assets/playStore.svg';

const Footer = () => {
  const theme = useTheme();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const footerLinks = [
    {
      title: 'Company',
      subLinks: [
        { text: 'About us', url: 'https://aliceblueonline.com/about-us/' },
        { text: 'AB cares', url: 'https://aliceblueonline.com/cares/' },
        { text: 'Careers', url: 'https://aliceblueonline.com/careers/' },
        {
          text: 'HRMS Login',
          url: 'https://app.factohr.com/aliceblue/Security/Login',
        },
        {
          text: 'Ekyc Guidelines',
          url: 'https://aliceblueonline.com/ekyc-guidelines/',
        },
      ],
    },
    {
      title: 'App & Products',
      subLinks: [
        {
          text: 'ANT Web',
          url: 'https://aliceblueonline.com/legal-documentation/advisory-for-investors/',
        },
        { text: 'ANT Mobi', url: 'https://aliceblueonline.com/ant-mobi/' },
        { text: 'ANT API', url: 'https://aliceblueonline.com/ant-plus/' },
        { text: 'IPO', url: 'https://rise.aliceblueonline.com/' },
        {
          text: 'Trading View',
          url: 'https://aliceblueonline.com/tradingview/',
        },
        {
          text: 'Rise (MF, G - Sec, T - bills)',
          url: 'https://rise.aliceblueonline.com/',
        },
        { text: 'Products', url: 'https://aliceblueonline.com/products/' },
        {
          text: 'Investments',
          url: 'https://aliceblueonline.com/investments/',
        },
      ],
    },
    {
      title: 'Tools & Calculators',
      subLinks: [
        {
          text: 'Brokerage Calculator',
          url: 'https://aliceblueonline.com/brokerage-calculator/',
        },
        {
          text: 'Margin Calculator',
          url: 'https://aliceblueonline.com/margin-calculator/',
        },
        {
          text: 'RMS Live Updates',
          url: 'https://aliceblueonline.com/rms-live-updates/exposures/',
        },
      ],
    },
    {
      title: 'Important Links',
      subLinks: [
        { text: 'Pricing', url: 'https://aliceblueonline.com/pricing/' },
        {
          text: 'KYC Tracker',
          url: 'https://pekycv3.aliceblueonline.com/admin/ekyctracker',
        },
        {
          text: 'Trading Holidays',
          url: 'https://aliceblueonline.com/trading-holidays-2025/',
        },
        {
          text: 'PR Coverage',
          url: 'https://aliceblueonline.com/media-coverage/',
        },
        { text: 'Trade School', url: '/' },
        {
          text: 'Employee Referral Policy',
          url: 'https://aliceblueonline.com/employee-referral-program/',
        },
        {
          text: 'Verify Client Collateral Details',
          url: 'https://www.icclindia.com/DynamicPages/UCCDetails.aspx',
        },
        { text: 'Terms and Conditions', url: '/terms-and-conditions' },
      ],
    },
  ];

  const footerContent = [
    {
      text: 'Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020. Update your mobile number & email with your stock broker/depository participant and receive OTP directly from the depository on your email and/or mobile number to create a pledge.',
    },
    {
      text: (
        <>
          <strong>20% upfront margin</strong> of the transaction value to trade
          in the cash market segment. Investors may please refer to the
          Exchanges Frequently Asked Questions (FAQs) issued vide circular
          reference NSE/INSP/45191 dated July 31, 2020, and NSE/INSP/45534 dated
          August 31, 2020, and other guidelines issued from time to time in this
          regard.
        </>
      ),
      bold: true,
    },
    {
      text: (
        <>
          <strong>Check your Securities/MF/Bonds</strong> in the consolidated
          account statement issued by NSDL/CDSL every month.
        </>
      ),
      bold: true,
    },
    {
      text: (
        <>
          <strong>Corporate Office:</strong> No. 153/2, 3rd Floor, M.B.Arcade,
          Bagalur Main Road, Dwarska Nagar, Vishhanika, Bengaluru – 560 063,
          Karnataka.
        </>
      ),
      bold: true,
    },
    {
      text: (
        <>
          <strong>Registered Office:</strong> Old No.56/2, New No.58, UC Nagar,
          Vinayagar Kovil Street, Erode -8, Tamil Nadu- 638002.
        </>
      ),
      bold: true,
    },
    {
      text: 'Alice Blue Financial Services (P) Ltd - NSE CM | NSE FO | NSE CDS-90112 SEBI REG - INZ000156038',
    },
    {
      text: 'Alice Blue Financial Services (P) Ltd - BSE CM | BSE FO | BSE CD-6670 SEBI REG - INZ000156038',
    },
    {
      text: 'Alice Blue Financial Services (P) Ltd - CDSL DP ID 12085300 DP SEBI REG - IN-DP-364-2018',
    },
    {
      text: 'Alice Blue Financial Services (P) Ltd - MCX-56770 SEBI REG - INZ000156038',
    },
    {
      text: 'We hereby declare that we are doing PRO trading.',
    },
    {
      text: (
        <>
          <strong>Procedure to file a complaint on SEBI SCORES:</strong>{' '}
          Register on{' '}
          <Link href="https://scores.sebi.gov.in/" color="primary">
            SEBI SCORES 2.0
          </Link>
          . Mandatory details for filing complaints: Name, PAN, Address, Mobile
          Number, E-mail ID. Benefits: Effective Communication. Speedy redressal
          of the grievances.
        </>
      ),
      bold: true,
    },
    {
      text: (
        <>
          Click on the provided link to learn about the process for submitting a
          complaint on the{' '}
          <Link href="https://smartodr.in/login/" color="primary">
            ODR platform
          </Link>{' '}
          for resolving investor grievances.
        </>
      ),
    },
    {
      text: 'Investment in securities markets are subject to market risks, read all the related documents carefully before investing. Brokerage will not exceed SEBI prescribed limit.',
    },
    {
      text: (
        <>
          For queries regarding account opening or activation, email to{' '}
          <Link
            href="mailto:accountactivation@aliceblueindia.com"
            color="primary"
          >
            accountactivation@aliceblueindia.com
          </Link>
        </>
      ),
    },
    {
      text: (
        <>
          and for fund updates, email to{' '}
          <Link href="mailto:funds@aliceblueindia.com" color="primary">
            funds@aliceblueindia.com
          </Link>
        </>
      ),
    },
    {
      text: (
        <>
          <strong>Disclaimer:</strong> Prevent unauthorised transactions in your
          account. Update your mobile number/email IDs with your stock brokers.
          Receive information of your transactions directly from Exchange on
          your mobile/email at the end of the day. Issued in the interest of
          investors.
        </>
      ),
      bold: true,
    },
    {
      text: (
        <>
          All clients have to update their email and mobile number with Member:
          Investor Grievance{' '}
          <Link href="mailto:grievances@aliceblueindia.com" color="primary">
            grievances@aliceblueindia.com
          </Link>
        </>
      ),
    },
    {
      text: (
        <>
          <strong>KYC is a one time exercise</strong> while dealing in
          securities markets – once KYC is done through a SEBI registered
          intermediary (broker, DP, Mutual Fund etc.), you need not undergo the
          same process again when you approach another intermediary.
        </>
      ),
      bold: true,
    },
    {
      text: (
        <>
          <strong>No need to issue cheques by investors</strong> while
          subscribing to an IPO. Just write the bank account number and sign in
          the application form to authorise your bank to make payment in case of
          allotment. No worries for refund as the money remains in the
          investor's account.
        </>
      ),
      bold: true,
    },
    {
      text: (
        <>
          Investors are requested to note that Alice Blue Financial Services
          Private Limited is permitted to receive money from investor through
          designated bank accounts only named as Upstream Client Nodal Bank
          Account (USCNBA). Alice Blue Financial Services Private Limited is
          also required to disclose these USCNB accounts to Stock Exchange.
          Hence, you are requested to use following USCNB accounts only for the
          purpose of dealings in your trading account with us. The details of
          these USCNB accounts are also displayed by Stock Exchanges on their
          website under 'Know/Locate your Stock Broker.{' '}
          <Link
            href="https://alicebluewebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/04/16043642/USNCBA.pdf"
            color="primary"
          >
            Bank Details
          </Link>
          .
        </>
      ),
    },
  ];

  const footerContentLinks = [
    {
      text: 'DND Policy',
      href: 'https://aliceblueonline.com/legal-documentation/policy-for-dnd-ndnc/',
    },
    {
      text: 'Investor Charter',
      href: 'https://aliceblueonline.com/investor-charter/',
    },
    {
      text: 'Legal Documentation',
      href: 'https://aliceblueonline.com/legal-documentation/',
    },
    {
      text: 'Privacy Policy',
      href: 'https://aliceblueonline.com/legal-documentation/privacy-policy/',
    },
    { text: 'Feedback', href: 'https://aliceblueonline.com/feedback/' },
    {
      text: 'Annual Returns',
      href: 'https://aliceblueonline.com/annual-returns/',
    },
    {
      text: 'Advisory for Investors',
      href: 'https://aliceblueonline.com/legal-documentation/advisory-for-investors/',
    },
    {
      text: 'E-voting',
      href: 'https://evoting.cdslindia.com/Evoting/EvotingLogin',
    },
    {
      text: 'Mandatory Member Details',
      href: 'https://aliceblueonline.com/mandatory-member-details/',
    },
  ];

  const socialIcons = [
    {
      icon: <WhatsAppIcon />,
      alt: 'WhatsApp',
      url: 'https://www.whatsapp.com/channel/0029VaHMVoh9mrGW4LWTl904',
      color: '#25D366',
    },
    {
      icon: <LinkedInIcon />,
      alt: 'LinkedIn',
      url: 'https://www.linkedin.com/company/alice-blue-commodities-p-ltd',
      color: '#0A66C2',
    },
    {
      icon: <XIcon />,
      alt: 'X',
      url: 'https://x.com/aliceblue_india',
      color: '#a0a0a0',
    },
    {
      icon: <FacebookIcon />,
      alt: 'Facebook',
      url: 'https://www.facebook.com/aliceblue.commodities',
      color: '#1877F2',
    },
    {
      icon: <InstagramIcon />,
      alt: 'Instagram',
      url: 'https://www.instagram.com/aliceblue_financialservices/',
      color: '#000000',
    },
    {
      icon: <TelegramIcon />,
      alt: 'Telegram',
      url: 'https://t.me/Alicebluelive',
      color: '#229ED9',
    },
    {
      icon: <YouTubeIcon />,
      alt: 'YouTube',
      url: 'https://www.youtube.com/channel/UCrAM1_NV3j5_l8VoukiXv2g',
      color: '#FF0000',
    },
    {
      image:
        'https://img.icons8.com/?size=100&id=eGZs8grn6szD&format=png&color=000000',
      alt: 'Google News',
      url: 'https://news.google.com/publications/CAAqMAgKIipDQklTR1FnTWFoVUtFMkZzYVdObFlteDFaVzl1YkdsdVpTNWpiMjBvQUFQAQ?ceid=IN:en&oc=3&hl=en-IN&gl=IN',
      color: '#eee',
    },
  ];

  const exchanges = [
    { name: 'NSE', url: 'https://www.nseindia.com/' },
    { name: 'BSE', url: 'https://www.bseindia.com/' },
    { name: 'MCX', url: 'https://www.mcxindia.com/' },
    { name: 'MCX-SX', url: 'https://www.msei.in/' },
    { name: 'CDSL', url: 'https://www.cdslindia.com/' },
    { name: 'SEBI', url: 'https://www.sebi.gov.in/' },
  ];

  const items = [
    {
      icon: DownloadIcon,
      title: 'Downloads',
      link: 'https://aliceblueonline.com/downloads/',
    },
    {
      icon: NewspaperOutlinedIcon,
      title: 'Circulars',
      link: 'https://aliceblueonline.com/circulars/',
    },
    {
      icon: SavingsRoundedIcon,
      title: 'Bank Details',
      link: 'https://aliceblueonline.com/bank-details/',
    },
    {
      icon: VideocamIcon,
      title: 'Watch & learn',
      link: 'https://aliceblueonline.com/how-to-videos/',
    },
  ];

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: { xs: 'center', md: 'space-around' },
          px: {
            xs: theme.spacing(2),
            sm: theme.spacing(4),
          },
        }}
      >
        {items.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                cursor: 'pointer',
                my: 3,
              }}
              onClick={() => window.open(item.link, '_blank')}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  border: '2px solid #1976d2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                  '&:hover': {
                    border: '2px solid rgb(28, 74, 119)',
                    '& svg': { color: 'rgb(28, 74, 119)' },
                    transform: 'scale(1.2)',
                    color: 'rgb(28, 74, 119)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <item.icon sx={{ fontSize: 30, color: '#1976d2' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1976d2',
                  '&:hover': {
                    color: 'rgb(28, 74, 119)',
                    textDecoration: 'underline',
                  },
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Footer Links Section */}
      <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          px: {
            xs: theme.spacing(2),
            sm: theme.spacing(4),
          },
        }}
      >
        {/* Logo and Links Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            flexDirection: { xs: 'column', md: 'row' },
            flex: 1,
            py: theme.spacing(4),
            gap: theme.spacing(15),
          }}
        >
          {/* Left section */}
          <Box
            sx={{
              flex: 0.3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
              }}
            >
              <img
                src={abLogo2}
                alt="Alice Blue logo"
                style={{
                  width: { xs: 200, md: '100%' },
                  // height: 'auto',
                }}
              />
            </Box>

            {/* App badges */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.ant2o.aliceblue&pli=1"
                target="_blank"
                underline="none"
              >
                <img
                  src={playStore}
                  alt="Google Play"
                  style={{ maxHeight: 50 }}
                />
              </Link>
              <Link
                href="https://apps.apple.com/us/app/alice-blue-trade-app-ant-mobi/id1627909732"
                target="_blank"
                underline="none"
              >
                <img src={appStore} alt="App Store" style={{ maxHeight: 50 }} />
              </Link>
            </Box>

            {/* Trading school */}
            <Box
              sx={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                p: 2,
                mt: 2,
                // textAlign: 'center',
                width: { xs: '200px', md: '100%' },
                // maxWidth: 180,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Trading School
              </Typography>
              <Typography variant="h6" fontWeight={500}>
                {'Good    ★★★★☆'}
              </Typography>
              <Typography variant="subtitle1">Based on 518 reviews</Typography>
            </Box>

            {/* copyright */}
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: 'text.secondary',
                fontSize: '0.875rem',
              }}
            >
              © 2025, Alice Blue Financial Services (P) Ltd, All rights
              reserved.
            </Typography>

            {/* Social icons */}
            <Box
              sx={{
                display: 'flex',
                mt: 2,
                flexDirection: 'column',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography>Connect with us :</Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                {socialIcons.map((item, index) => (
                  <Tooltip key={index} title={item.alt}>
                    <Link href={item.url} target="_blank" underline="none">
                      <IconButton
                        sx={{
                          backgroundColor: item.color,
                          color: '#fff',
                          borderRadius: '50%',
                          p: 1,
                          '&:hover': {
                            backgroundColor: item.color,
                            opacity: 0.85,
                          },
                        }}
                      >
                        {item.icon ? (
                          item.icon
                        ) : (
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.alt}
                            sx={{
                              width: 24,
                              height: 24,
                            }}
                          />
                        )}
                      </IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Right: Link Columns */}
          <Box
            sx={{
              flex: 0.7,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              flexDirection: 'column',
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              {footerLinks.map((section, index) => (
                <Box key={index} sx={{ minWidth: 120, flex: 1 }}>
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 'bold', mb: 1 }}
                    >
                      {section.title}
                    </Typography>
                    <List disablePadding>
                      {section.subLinks.map((link, linkIndex) => (
                        <ListItem
                          key={linkIndex}
                          disablePadding
                          sx={{ py: 1.5 }}
                        >
                          <Link
                            href={link.url}
                            underline="none"
                            sx={{
                              fontSize: '15px',
                              color: 'black',
                              flex: 0.8,
                            }}
                          >
                            {link.text}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        py: 1,
                      }}
                      onClick={() => toggleSection(index)}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 'bold' }}
                      >
                        {section.title}
                      </Typography>
                      <IconButton size="small" sx={{ p: 0.5 }}>
                        {expandedSections[index] ? (
                          <Remove size={16} />
                        ) : (
                          <Add size={16} />
                        )}
                      </IconButton>
                    </Box>

                    <Collapse in={expandedSections[index]}>
                      <Box sx={{ pl: 2, py: 1 }}>
                        {section.subLinks.map((link, linkIndex) => (
                          <Box key={linkIndex} sx={{ py: 0.5 }}>
                            <Link
                              href={link.url}
                              underline="none"
                              sx={{
                                fontSize: '15px',
                                color: 'black',
                                display: 'block',
                              }}
                            >
                              {link.text}
                            </Link>
                          </Box>
                        ))}
                      </Box>
                    </Collapse>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {exchanges.map((exchange) => (
                <Box key={exchange.name} width={'fit-content'}>
                  <Link href={exchange.url} target="_blank" underline="none">
                    <Box
                      sx={{
                        px: 3,
                        py: 1,
                        border: '1px solid #ddd',
                        borderRadius: 2,
                        backgroundColor: '#fff',
                        '&:hover': {
                          backgroundColor: '#e6f0fc',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#0056b3',
                          fontSize: 14,
                        }}
                      >
                        {exchange.name}
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer Notice Section */}
      <Box
        sx={{
          backgroundColor: 'white',
          pt: theme.spacing(4),
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize,
          lineHeight: theme.typography.body2.lineHeight,
        }}
      >
        <Container maxWidth="xl" sx={{ pb: theme.spacing(4) }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              mb: theme.spacing(2),
              gap: theme.spacing(5),
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                fontSize: '1.125rem',
                flexShrink: 0,
              }}
            >
              Attention Investors!
            </Typography>

            {/* Marquee container */}
            <Box
              sx={{
                flex: 1,
                padding: '8px 0',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'inline-block',
                  paddingLeft: '100%',
                  animation: 'marquee 25s linear infinite',
                  fontSize: '0.875rem',
                  fontWeight: theme.typography.fontWeightBold,
                  '@keyframes marquee': {
                    '0%': {
                      transform: 'translate3d(0, 0, 0)',
                    },
                    '100%': {
                      transform: 'translate3d(-100%, 0, 0)',
                    },
                  },
                }}
              >
                <strong>
                  Prevent unauthorised transactions in your account
                </strong>{' '}
                update your mobile number/email with your Stock Broker. Receive
                information of your transactions directly from Exchange on your
                mobile/email at the end of the day.
              </Box>
            </Box>
          </Box>

          {/* Rest of footer content */}
          {footerContent.map((content, index) => (
            <Typography
              key={index}
              sx={{
                mb: theme.spacing(2),
                fontSize: '0.875rem',
                underline: 'none',
                ...(content.bold && {
                  fontWeight: theme.typography.fontWeightBold,
                }),
              }}
            >
              {content.text}
            </Typography>
          ))}

          {/* Footer Links */}
          <Box
            sx={{
              mt: theme.spacing(4),
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
            }}
          >
            {footerContentLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  href={link.href}
                  color="primary"
                  sx={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                  }}
                >
                  {link.text}
                </Link>
                {index < footerContentLinks.length - 1 && (
                  <Typography
                    sx={{ fontSize: '0.875rem', color: 'text.secondary' }}
                  >
                    |
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
