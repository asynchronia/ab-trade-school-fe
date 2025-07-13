import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    Divider,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { getAllModulesReq } from '../../service/modules.service';
import theme from '../../utils/theme';

const ModulesPage = () => {
  const navigate = useNavigate();
  const colors = ['#69C969', '#64B2FF', '#EACF32'];
  const [modules, setModules] = useState([]);
  const [bookmarked, setBookmarked] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllModules = async () => {
    setIsLoading(true);
    try {
      const modules = await getAllModulesReq();
      setModules(modules);
    } catch {
      enqueueSnackbar('Failed to fetch modules. Please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllModules();
    window.scrollTo(0, 0);
  }, []);

  const handleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Box>
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
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}
        >
          Modules
        </Typography>

        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'calc(100vh - 350px)',
            }}
          >
            <CircularProgress size={40} color="primary" />
          </Box>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: {
                xs: '30px',
                md: '40px 50px',
              },
            }}
          >
            {modules.map((module, i) => (
              <Card
                key={module.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: 'none',
                  boxShadow: 'none',
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: 'bold', color: 'text.primary' }}
                  >
                    {module?.module_order}
                  </Typography>
                  <Box
                    sx={{
                      height: 4,
                      flexGrow: 1,
                      bgcolor: colors[i % 3],
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 0, flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 500,
                      lineHeight: '24px',
                      fontSize: '20px',
                      minHeight: '42px',
                    }}
                  >
                    {module?.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: '24px', fontWeight: 500 }}
                  >
                    {module?.count} Chapters
                  </Typography>

                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      borderRadius: 2,
                      overflow: 'hidden',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Box
                        component="img"
                        src={module?.image}
                        alt="Module"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: 2,
                        }}
                      />
                      <Tooltip
                        title={
                          bookmarked[module.id]
                            ? 'Remove module'
                            : 'Save module'
                        }
                      >
                        <IconButton
                          onClick={() => handleBookmark(module.id)}
                          sx={{
                            position: 'absolute',
                            top: 13,
                            right: 11,
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            '&:hover': {
                              backgroundColor: 'rgba(0,0,0,0.2)',
                            },
                            zIndex: 1,
                          }}
                        >
                          {bookmarked[module.id] ? (
                            <Bookmark sx={{ color: '#fff' }} />
                          ) : (
                            <BookmarkBorder sx={{ color: '#fff' }} />
                          )}
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 0 }}>
                  <Button
                    color="primary"
                    size="small"
                    sx={{
                      fontWeight: 500,
                      width: '100%',
                      justifyContent: 'flex-start',
                    }}
                    onClick={() => navigate(`/module/${module.slug}`)}
                  >
                    View module
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        )}
      </Box>

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

export default ModulesPage;
