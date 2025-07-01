import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Divider,
  Drawer,
  Fab,
  IconButton,
  Pagination,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import chapterImg from '../../assets/chapter1.png';
import copy from '../../assets/copy.png';
import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import whatsapp from '../../assets/whatsapp.png';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import { getModuleChapterDataReq } from '../../service/modules.service';
import theme from '../../utils/theme';
import RegisterForm from './RegistrationForm';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const moduleOrder = searchParams.get('module_order');
  const chapterOrder = searchParams.get('chapter_order');
  const [currentChapter, setCurrentChapter] = useState(1);
  const [registerOpen, setRegisterOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [moduleData, setModuleData] = useState();
  const [chapterData, setChapterData] = useState();
  const [nextData, setNextData] = useState(null);
  const [previousData, setPreviousData] = useState(null);
  const [content, setContent] = useState();

  const handleChapterChange = (e, value) => {
    setSearchParams({
      module_order: moduleOrder || 1,
      chapter_order: value,
    });
  };

  const fetchChapterData = async () => {
    try {
      const response = await getModuleChapterDataReq({
        module_order: moduleOrder,
        chapter_order: chapterOrder,
      });
      setContent(response?.current?.content);
      setChapterData(response?.current);
      setModuleData(response?.module);
      setNextData(response?.next);
      setPreviousData(response?.previous);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChapterData();
    setCurrentChapter(Number(chapterOrder) || 1);
  }, [moduleOrder, chapterOrder]);

  const handleNext = () => {
    if (nextData) {
      setSearchParams({
        module_order: nextData.module_order,
        chapter_order: nextData.chapter_order,
      });
    }
  };

  const handlePrevious = () => {
    if (previousData) {
      setSearchParams({
        module_order: previousData.module_order,
        chapter_order: previousData.chapter_order,
      });
    }
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
        <Box
          sx={{
            width: '100px',
            flexShrink: 0,
            display: { xs: 'none', lg: 'block' },
            position: 'sticky',
            top: '85px',
            alignSelf: 'flex-start',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <SideSocialBar />
        </Box>

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
                mr={1}
                sx={{ fontSize: { xs: '18px', sm: '20px' } }}
              >
                {moduleData?.module_order}
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
              Chapter {chapterData?.chapter_order}
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
              {chapterData?.title}
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
                  color: 'primary.main',
                }}
                title={'Previous'}
                onClick={handlePrevious}
                disabled={!previousData}
              >
                Previous
              </Button>

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
                onClick={handleNext}
                disabled={!nextData}
              >
                Next
              </Button>
            </Box>
          </Box>

          <div
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ lineHeight: '1.8', fontSize: '1rem' }}
          />

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
              count={moduleData?.count}
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

        <Box
          sx={{
            width: '340px',
            flexShrink: 0,
            display: { xs: 'none', lg: 'block' },
            position: 'sticky',
            top: '85px',
            alignSelf: 'flex-start',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',

            '&::-webkit-scrollbar': {
              display: 'none',
            },
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
