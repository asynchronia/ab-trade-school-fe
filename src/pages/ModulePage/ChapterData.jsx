import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    CircularProgress,
    Divider,
    Drawer,
    Fab,
    IconButton,
    Pagination,
    Typography,
    useMediaQuery,
} from '@mui/material';
import he from 'he';
import parse from 'html-react-parser';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import copy from '../../assets/copy.png';
import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import whatsapp from '../../assets/whatsapp.png';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
    getModuleChapterDataReq,
    getModuleChapterListReq,
} from '../../service/modules.service';
import theme from '../../utils/theme';
import './Modules.css';
import RegisterForm from './RegistrationForm';

const SideSocialBar = ({ currentURL }) => {
  const iconStyles = {
    width: { xs: 41, sm: 53 },
    height: { xs: 41, sm: 53 },
    borderRadius: '50%',
    border: '3px solid #eee',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    // mb: 2,
    cursor: 'pointer',
  };

  const encodedUrl = encodeURIComponent(currentURL);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedUrl}`,
    email: `mailto:?subject=Check out this blog&body=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentURL);
    enqueueSnackbar('Link copied to clipboard!', { variant: 'success' });
  };

  return (
    <Box
      sx={{
        width: { xs: 80, sm: 100 },
        pb: 0,
        pt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        borderRadius: '10px',
      }}
    >
      <Box
        component={'a'}
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        <Box component={'img'} src={whatsapp} sx={iconStyles} />
      </Box>
      <Box component={'a'} href={shareLinks.email}>
        <Box component={'img'} src={email} sx={iconStyles} />
      </Box>
      <Box
        component={'a'}
        href={shareLinks.facebook}
        target="_blank"
        rel="noreferrer"
      >
        <Box component={'img'} src={facebook} sx={iconStyles} />
      </Box>
      <Box
        component={'a'}
        href={shareLinks.twitter}
        target="_blank"
        rel="noreferrer"
      >
        <Box component={'img'} src={twitter} sx={iconStyles} />
      </Box>
      <Box
        component={'a'}
        href={shareLinks.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <Box component={'img'} src={linkedin} sx={iconStyles} />
      </Box>

      <Box
        component={'img'}
        src={copy}
        sx={iconStyles}
        onClick={copyToClipboard}
      />
    </Box>
  );
};

const ChapterDataPage = () => {
  const { chapterName } = useParams();
  const [currentChapter, setCurrentChapter] = useState(1);
  const [registerOpen, setRegisterOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [chapterData, setChapterData] = useState();
  const [moduleData, setModuleData] = useState();
  const [nextData, setNextData] = useState(null);
  const [previousData, setPreviousData] = useState(null);
  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const encodedUrl = encodeURIComponent(window.location.href);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedUrl}`,
    email: `mailto:?subject=Check out this blog&body=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const fetchChapterData = async () => {
    setIsLoading(true);
    try {
      const response = await getModuleChapterDataReq({
        slug: chapterName,
      });
      setContent(response?.current?.content);
      setChapterData(response?.current);
      setModuleData(response?.module);
      setNextData(response?.next);
      setPreviousData(response?.previous);
      setCurrentChapter(Number(response?.current?.chapter_order) || 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchChapterData();
  }, [chapterName]);

  const handleChapterChange = async (event, value) => {
    setCurrentChapter(value);
    try {
      const chapterList = await getModuleChapterListReq(moduleData?.slug);
      const selectedChapter = chapterList?.posts.find(
        (chapter) => chapter.chapter_order === value
      );

      if (selectedChapter?.slug) {
        navigate(`/chapter/${selectedChapter.slug}`);
      } else {
        console.log('Selected chapter not found in list');
      }
    } catch (error) {
      console.log('Error fetching selected chapter:', error);
    }
  };

  const handleNext = () => {
    if (nextData?.slug) {
      navigate(`/chapter/${nextData.slug}`);
    } else {
      console.log('Next chapter data not found');
    }
  };

  const handlePrevious = () => {
    if (previousData?.slug) {
      navigate(`/chapter/${previousData.slug}`);
    } else {
      console.log('Previous chapter data not found');
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
          <SideSocialBar
            updateDate={chapterData?.updated_date}
            currentURL={currentURL}
          />
        </Box>

        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'calc(100vh - 100px)',
              width: '100%',
            }}
          >
            <CircularProgress size={40} sx={{ color: 'primary.main' }} />
          </Box>
        ) : (
          <Box
            sx={{
              maxWidth: '850px',
              flexGrow: 1,
              width: { xs: '100%', lg: 'auto' },
            }}
          >
            <Typography
              component="img"
              src={chapterData?.thumbnail}
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
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  mr={1}
                  sx={{ fontSize: { xs: '18px', sm: '20px' } }}
                >
                  {he.decode(moduleData?.name || '')}
                </Typography>
                <Divider
                  sx={{
                    flexGrow: 1,
                    borderBottomWidth: 4,
                    borderColor: '#69C969',
                    width: { xs: '100%', sm: '100%' },
                  }}
                />
              </Box>
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
                flex={0.9}
                sx={{ fontSize: { xs: '18px', sm: '20px', md: '24px' } }}
              >
                {chapterData?.chapter_order}.{' '}
                {he.decode(chapterData?.title || '')}
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

            <div className="rich-content">{parse(content || '')}</div>

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
                count={moduleData?.count || 1}
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
        )}

        <Box
          sx={{
            // width: '340px',
            flexShrink: 0,
            display: { xs: 'none', lg: 'block' },
            alignSelf: 'flex-start',
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
                width: { xs: 360 },
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
                  component="a"
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    component={'img'}
                    src={whatsapp}
                    sx={{ width: 40, height: 40, cursor: 'pointer' }}
                  />
                </Box>
                <Box
                  component="a"
                  href={shareLinks.email}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    component={'img'}
                    src={email}
                    sx={{ width: 40, height: 40, cursor: 'pointer' }}
                  />
                </Box>
                <Box
                  component="a"
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    component={'img'}
                    src={facebook}
                    sx={{ width: 40, height: 40, cursor: 'pointer' }}
                  />
                </Box>
                <Box
                  component="a"
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    component={'img'}
                    src={twitter}
                    sx={{ width: 40, height: 40, cursor: 'pointer' }}
                  />
                </Box>
                <Box
                  component="a"
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box
                    component={'img'}
                    src={linkedin}
                    sx={{ width: 40, height: 40, cursor: 'pointer' }}
                  />
                </Box>
                <Box
                  component="img"
                  src={copy}
                  sx={{ width: 40, height: 40, cursor: 'pointer' }}
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    enqueueSnackbar('Link copied to clipboard!', {
                      variant: 'success',
                    });
                  }}
                />
              </Box>
            </Box>
          </Drawer>
        </>
      )}

      <Box
        sx={{
          mt: 4,
        }}
      >
        <Divider
          sx={{
            mx: {
              xs: theme.spacing(4),
              md: theme.spacing(5),
              lg: theme.spacing(10),
            },
          }}
        />
        <Footer />
      </Box>
    </Box>
  );
};

export default ChapterDataPage;
