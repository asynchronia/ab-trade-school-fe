import { Box, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCarousel from '../../components/CardCorousel/CardCarousel';
import { getAllModulesReq } from '../../service/modules.service';
import theme from '../../utils/theme';

const FreeCoursesSection = () => {
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
  }, []);

  const moduleCards = modules.slice(0, 5).map((module) => ({
    slug: module.slug,
    baseImage: module.image,
    title: module.name,
    desc: `${module.count} Chapters`,
  }));

  return (
    <Box
      component="section"
      sx={{
        px: theme.spacing(2),
        pt: theme.spacing(3),
        pb: theme.spacing(5),
        maxWidth: 1200,
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          mb: theme.spacing(2),
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: theme.typography.h3.fontSize,
            color: '',
            mb: theme.spacing(0.5),
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          Get Started with Free Learning modules
        </Typography>
        <Typography
          sx={{
            maxWidth: 600,
            mx: 'auto',
            fontSize: theme.typography.h6.fontSize,
            color: theme.palette.text.secondary,
          }}
        >
          Explore bite-sized lessons crafted to build your trading knowledge,
          one concept at a time.
        </Typography>
      </Box>

      {!isLoading && <CardCarousel cards={moduleCards} />}

      <Typography
        sx={{
          my: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.primary.main,
          cursor: 'pointer',
        }}
        onClick={() => navigate('/modules')}
      >
        {isLoading ? 'Loading modules...' : 'View all modules'}
      </Typography>
    </Box>
  );
};

export default FreeCoursesSection;
