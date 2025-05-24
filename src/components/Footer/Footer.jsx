import {
    Box,
    Container,
    Grid,
    Link,
    List,
    ListItem,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import abLogo2 from '../../assets/ab-logo2.svg';

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
      italic: true,
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

  return (
    <>
      {/* Footer Links Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.grey[900],
          color: theme.palette.common.white,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1300px',
            flexWrap: 'wrap',
            gap: theme.spacing(2),
            py: theme.spacing(4),
            px: {
              xs: theme.spacing(2),
              sm: theme.spacing(4),
              md: theme.spacing(10),
            },
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            alignItems: {
              xs: 'center',
              md: 'flex-start',
            },
          }}
        >
          {/* Logo and Copyright */}
          <Box
            sx={{
              textAlign: {
                xs: 'center',
                md: 'left',
              },
              mb: {
                xs: theme.spacing(3),
                md: 0,
              },
            }}
          >
            <img
              src={abLogo2}
              alt="Alice Blue logo"
              style={{
                maxWidth: 150,
                height: 'auto',
                filter: 'brightness(0) invert(1)',
              }}
            />
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: theme.spacing(2),
                fontSize: '0.75rem',
              }}
            >
              © 2025, Alice Blue Financial Services
            </Typography>
          </Box>

          {/* Footer Links */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: theme.spacing(3),
              justifyContent: { xs: 'center', md: 'space-between' },
              flex: 1,
              ml: { md: theme.spacing(4) },
            }}
          >
            {footerLinks.map((section, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: 150,
                  maxWidth: 200,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: theme.typography.fontWeightBold,
                    mb: theme.spacing(1),
                    color: theme.palette.common.white,
                  }}
                >
                  {section.title}
                </Typography>
                <List dense disablePadding>
                  {section.subLinks.map((link, linkIndex) => (
                    <ListItem
                      key={linkIndex}
                      disablePadding
                      sx={{
                        py: theme.spacing(0.5),
                      }}
                    >
                      <Link
                        href={link.url}
                        color="inherit"
                        underline="hover"
                        sx={{
                          fontSize: '0.875rem',
                          color: theme.palette.grey[400],
                          '&:hover': {
                            color: theme.palette.common.white,
                          },
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
        </Box>
      </Box>

      {/* Footer Notice Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.grey[900],
          pt: theme.spacing(4),
          px: {
            lg: theme.spacing(12.5),  
            xs: theme.spacing(2),
            sm: theme.spacing(4),
            md: theme.spacing(10),
          },
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize,
          lineHeight: theme.typography.body2.lineHeight,
          color: theme.palette.grey[300],
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
              color: theme.palette.common.white,
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
                  color: theme.palette.common.white,
                }),
                ...(content.italic && { fontStyle: 'italic' }),
              }}
            >
              {content.text}
            </Typography>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Footer;
