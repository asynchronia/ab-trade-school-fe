import { CallReceived } from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    Typography,
} from '@mui/material';
import theme from '../../utils/theme';

const FAQSection = () => {
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
      question:
        'Do you provide stock tips or investment advice in the courses?',
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

  return (
    <Container
      maxWidth="md"
      sx={{
        py: theme.spacing(5),
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        fontWeight={theme.typography.fontWeightBold}
        align="center"
        fontSize={{
          xs: '1.6rem',
          sm: '32px',
        }}
        gutterBottom
      >
        Frequently Asked Questions (FAQs)
      </Typography>
      <Typography
        variant="body1"
        component="h3"
        align="center"
        color="text.secondary"
        mb={theme.spacing(4)}
      >
        Got questions? We've answered the most common ones to help you get
        started quickly and confidently
      </Typography>

      {faqData.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            mb: theme.spacing(2),
            p: theme.spacing(2),
            borderRadius: theme.shape.borderRadius.medium,
            bgcolor: '#fff',
            '&:before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              bgcolor: '#3372BE1A',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<CallReceived color={theme.colors.blue.secondary} />}
            sx={{
              '& .MuiAccordionSummary-content': {
                alignItems: 'center',
              },
              '& .MuiAccordionSummary-expandIconWrapper': {
                color: theme.colors.blue.secondary,
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: {
                  xs: theme.typography.body2.fontSize,
                  sm: theme.typography.h6.fontSize,
                },
                mr: theme.spacing(1),
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: {
                  xs: theme.typography.body2.fontSize,
                  sm: theme.typography.h6.fontSize,
                },
              }}
            >
              {item.answer || 'Answer goes here...'}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQSection;
