import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import {
    Box,
    Card,
    CardContent,
    Divider,
    IconButton,
    Link,
    Tooltip,
    Typography,
} from '@mui/material';
import he from 'he';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import chapterMainImg from '../../assets/chapterMainImg.svg';
import Navbar from '../../components/Navbar/Navbar';
import { getModuleChapterListReq } from '../../service/modules.service';
import theme from '../../utils/theme';

const ChapterListPage = () => {
  const { moduleName } = useParams();
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);
  const [moduleData, setModuleData] = useState();
  const [bookmarked, setBookmarked] = useState({});

  const fetchModulesChapterList = async () => {
    try {
      const chapters = await getModuleChapterListReq(moduleName);
      setChapters(chapters?.posts);
      setModuleData(chapters?.module);
      console.log(chapters?.module);
    } catch {
      enqueueSnackbar('Failed to fetch modules. Please try again later');
    }
  };

  useEffect(() => {
    fetchModulesChapterList();
  }, []);

  const handleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          px: {
            xs: theme.spacing(4),
            md: theme.spacing(5),
            lg: theme.spacing(10),
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
          minHeight: '100vh',
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1, md: 2 },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{
              fontSize: { xs: '1.5rem', md: '2.125rem' },
            }}
          >
            {moduleData?.module_order} 
          </Typography>
          <Divider
            sx={{
              width: { xs: '120px', md: '170px' },
              borderBottom: {
                xs: '3px solid rgba(105, 201, 105, 1)',
                md: '4px solid rgba(105, 201, 105, 1)',
              },
            }}
          />
        </Box>

        {/* Chapter Main Image */}
        <Box
          component={'img'}
          src={chapterMainImg}
          alt=""
          sx={{
            position: 'absolute',
            right: { md: 70 },
            top: { md: 80 },
            width: { xs: '100%', md: 210 },
            height: { xs: 'auto', md: 140 },
            maxWidth: { xs: '210px', md: 'none' },
            display: { xs: 'none', md: 'flex' },
          }}
        />

        {/* Title */}
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            my: { xs: 2, md: 3 },
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          {he.decode(moduleData?.name || '')}
        </Typography>

        {/* Chapters List */}
        <Box sx={{ mt: { xs: 3, md: 4 }, height: '100%' }}>
          {chapters.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'center',
                  color: 'text.secondary',
                  py: 4,
                }}
              >
                No chapters to show
              </Typography>
            </Box>
          ) : (
            chapters.map((chapter) => (
              <Card
                key={chapter.id}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'stretch',
                  mb: { xs: 3, md: 6 },
                  borderRadius: 2,
                  boxShadow: 'none',
                  overflow: 'hidden',
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    position: 'relative',
                    alignSelf: 'start',
                    height: '100%',
                    width: '100%',
                    maxWidth: 310,
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={chapter?.thumbnail}
                    alt="chapter"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'fill',
                      borderRadius: { xs: '8px 8px 0 0', md: 2 },
                    }}
                  />

                  <Tooltip
                    title={
                      bookmarked[chapter.id] ? 'Remove module' : 'Save module'
                    }
                  >
                    <IconButton
                      onClick={() => handleBookmark(chapter.id)}
                      sx={{
                        position: 'absolute',
                        top: { xs: 8, md: 8 },
                        left: { xs: 8, md: 5 },
                        width: { xs: 35, md: 35 },
                        height: { xs: 35, md: 35 },
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.5)',
                        },
                        zIndex: 1,
                      }}
                    >
                      {bookmarked[chapter.id] ? (
                        <Bookmark
                          sx={{
                            color: '#fff',
                            width: { xs: 24, md: 24 },
                            height: { xs: 24, md: 24 },
                          }}
                        />
                      ) : (
                        <BookmarkBorder
                          sx={{
                            color: '#fff',
                            width: { xs: 24, md: 24 },
                            height: { xs: 24, md: 24 },
                          }}
                        />
                      )}
                    </IconButton>
                  </Tooltip>
                </Box>

                {/* Content */}
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    alignItems: 'start',
                    py: 1,
                    px: { xs: 0, sm: 3 },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      lineHeight: { xs: 1.3, md: 1.4 },
                      mb: { xs: 1, md: 0 },
                    }}
                  >
                    {chapter?.chapter_order}. {he.decode(chapter?.title || '')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '14px', md: '16px' },
                      lineHeight: { xs: 1.4, md: 1.5 },
                      display: '-webkit-box',
                      WebkitLineClamp: { xs: 4, md: 3 },
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    {chapter?.excerpt}
                  </Typography>

                  <Link
                    sx={{
                      textTransform: 'capitalize',
                      fontWeight: 500,
                      color: 'rgba(22, 105, 201, 1)',
                      cursor: 'pointer',
                      fontSize: 15,
                    }}
                    underline="none"
                    onClick={() =>
                      navigate(`/modules/${moduleData?.slug}/${chapter?.slug}`)
                    }
                  >
                    View module
                  </Link>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      </Box>
    </>
  );
};

export default ChapterListPage;
