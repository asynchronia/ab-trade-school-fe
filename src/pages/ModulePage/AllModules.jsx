import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    Link,
    Tooltip,
    Typography,
} from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { getAllModulesReq } from '../../service/modules.service';
import theme from '../../utils/theme';

const ModulesPage = () => {
  const navigate = useNavigate();
  const colors = ['#69C969', '#64B2FF', '#EACF32'];
  const [modules, setModules] = useState([]);
  const [bookmarked, setBookmarked] = useState({});

  const fetchAllModules = async () => {
    try {
      const modules = await getAllModulesReq();
      setModules(modules);
    } catch {
      enqueueSnackbar('Failed to fetch modules. Please try again later');
    }
  };

  useEffect(() => {
    fetchAllModules();
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

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'left',
            gap: '50px 50px',
          }}
        >
          {modules.map((module, i) => (
            <Box key={module.id}>
              <Card
                sx={{
                  height: '100%',
                  width: { xs: '100%', md: '380px' },
                  display: 'flex',
                  flexDirection: 'column',
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
                      width: '100%',
                      bgcolor: colors[i % 3],
                    }}
                  />
                </Box>

                <CardContent sx={{ py: 1, px: 0 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 500,
                      mb: 1,
                      lineHeight: '24px',
                      fontSize: '20px',
                    }}
                  >
                    {module?.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1.5, lineHeight: '24px', fontWeight: 500 }}
                  >
                    {module?.count} Chapters
                  </Typography>

                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                  >
                    <Box sx={{ position: 'relative', display: 'inline-block' }}>
                      <Box
                        component="img"
                        src={module?.image}
                        alt="Module"
                        sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
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
                            width: 45,
                            height: 45,
                            backgroundColor: 'transparent',
                            '&:hover': {
                              backgroundColor: 'rgba(0,0,0,0.1)',
                            },
                            zIndex: 1,
                          }}
                        >
                          {bookmarked[module.id] ? (
                            <Bookmark
                              sx={{ color: '#fff', width: 32, height: 32 }}
                            />
                          ) : (
                            <BookmarkBorder
                              sx={{ color: '#fff', width: 32, height: 32 }}
                            />
                          )}
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 0 }}>
                  <Link
                    color="primary"
                    underline="none"
                    sx={{
                      fontWeight: 500,
                      display: 'flex',
                      justifyContent: 'left',
                      cursor: 'pointer',
                    }}
                    fullWidth
                    onClick={() =>
                      navigate(`/modules/${module?.slug}/chapters`)
                    }
                  >
                    View module
                  </Link>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ModulesPage;
