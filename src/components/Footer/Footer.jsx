import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
    Box,
    Container,
    IconButton,
    Link,
    List,
    ListItem,
    Tooltip,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import abLogo2 from '../../assets/ab-logo2.svg';
import appStore from '../../assets/appStore.svg';
import playStore from '../../assets/playStore.svg';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = [
    {
      title: 'Company',
      subLinks: [
        { text: 'About us', url: '#' },
        { text: 'AB cares', url: '#' },
        { text: 'Careers', url: '#' },
        { text: 'HRMS Login', url: '#' },
        { text: 'Ekyc Guidelines', url: '#' },
      ],
    },
    {
      title: 'App & Products',
      subLinks: [
        { text: 'ANT Web', url: '#' },
        { text: 'ANT Mobi', url: '#' },
        { text: 'ANT API', url: '#' },
        { text: 'IPO', url: '#' },
        { text: 'Trading View', url: '#' },
        { text: 'Rise (MF, G - Sec, T - bills)', url: '#' },
        { text: 'Products', url: '#' },
        { text: 'Investments', url: '#' },
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
        { text: 'Trade School', url: '/' },
        { text: 'Employee Referral Policy', url: '#' },
        { text: 'Verify Client Collateral Details', url: '#' },
        { text: 'Terms and Conditions', url: '/terms-and-conditions' },
      ],
    },
  ];

  const footerContent = [
    {
      text: (
        <>
          <strong>Prevent unauthorised transactions in your account</strong>{' '}
          update your mobile number/email with your Stock Broker. Receive
          information of your transactions directly from Exchange on your
          mobile/email at the end of the day.
        </>
      ),
      bold: true,
    },
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
          Register on SCORES portal. Mandatory details for filing complaints:
          Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
          Communication. Speedy redressal of the grievances.
        </>
      ),
      bold: true,
    },
    {
      text: 'Investment in securities markets are subject to market risks, read all the related documents carefully before investing. Brokerage will not exceed SEBI prescribed limit.',
    },
    {
      text: 'For queries regarding account opening or activation, email to accountactivation@aliceblueindia.com',
    },
    {
      text: 'For fund updates, email to funds@aliceblueindia.com',
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
      text: 'All clients have to update their email and mobile number with Member: Investor Grievance grievances@aliceblueindia.com',
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
      text: "Investors are requested to note that Alice Blue Financial Services Private Limited is permitted to receive money from investor through designated bank accounts only named as Upstream Client Nodal Bank Account (USCNBA). Alice Blue Financial Services Private Limited is also required to disclose these USCNB accounts to Stock Exchange. Hence, you are requested to use following USCNB accounts only for the purpose of dealings in your trading account with us. The details of these USCNB accounts are also displayed by Stock Exchanges on their website under 'Know/Locate your Stock Broker Bank Details.'",
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
  ];

  const exchanges = [
    { name: 'NSE', url: 'https://www.nseindia.com/' },
    { name: 'BSE', url: 'https://www.bseindia.com/' },
    { name: 'MCX', url: 'https://www.mcxindia.com/' },
    { name: 'MCX-SX', url: 'https://www.msei.in/' },
    { name: 'CDSL', url: 'https://www.cdslindia.com/' },
    { name: 'SEBI', url: 'https://www.sebi.gov.in/' },
  ];

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
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
                alignItems:'center'
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
              <Box sx={{ display: 'flex', gap: 1, mt:1 }}>
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
                        {item.icon}
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
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {footerLinks.map((section, index) => (
                <Box key={index} sx={{ minWidth: 120, flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    {section.title}
                  </Typography>
                  <List disablePadding>
                    {section.subLinks.map((link, linkIndex) => (
                      <ListItem key={linkIndex} disablePadding sx={{ py: 1.5 }}>
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
          //   px: {
          //     lg: theme.spacing(12.5),
          //     xs: theme.spacing(2),
          //     sm: theme.spacing(4),
          //   },
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize,
          lineHeight: theme.typography.body2.lineHeight,
        }}
      >
        <Container maxWidth="xl" sx={{ pb: theme.spacing(4) }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              mb: theme.spacing(2),
              fontSize: '1.125rem',
            }}
          >
            Attention Investors
          </Typography>

          {footerContent.map((content, index) => (
            <Typography
              key={index}
              sx={{
                mb: theme.spacing(2),
                fontSize: '0.875rem',
                ...(content.bold && {
                  fontWeight: theme.typography.fontWeightBold,
                }),
              }}
            >
              {content.text}
            </Typography>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
