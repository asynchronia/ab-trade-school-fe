import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    Divider,
    Drawer,
    FormControlLabel,
    FormGroup,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useState } from 'react';

const SidebarFilters = ({ sections = [] }) => {
  const [selected, setSelected] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggle = (sectionLabel, option) => {
    setSelected((prev) => {
      const section = prev[sectionLabel] || [];
      const updatedSection = section.includes(option)
        ? section.filter((item) => item !== option)
        : [...section, option];
      return { ...prev, [sectionLabel]: updatedSection };
    });
  };

  const clearAll = () => {
    setSelected({});
  };

  const totalSelected = Object.values(selected).reduce(
    (acc, arr) => acc + arr.length,
    0
  );

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const FilterContent = () => (
    <Box
      sx={{
        width: isMobile ? 300 : '100%',
        minWidth: 300,
        p: 2,
        height: '100%',
        borderRight: isMobile ? 'none' : '1px solid #e0e0e0',
        overflowY: 'auto',
        bgcolor: '#fff',

        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      }}
    >
      {/* Header Row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          Filters {totalSelected > 0 && `(${totalSelected})`}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            variant="body2"
            color="primary"
            onClick={clearAll}
            sx={{ cursor: 'pointer', fontWeight: 500 }}
          >
            Clear All
          </Typography>
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} size="small">
              <CloseIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      <Divider />

      {/* Filter Sections */}
      {sections.map((section, idx) => (
        <Accordion key={idx} disableGutters elevation={0} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2" fontWeight="bold">
              {section.label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {section.options.map((option, i) => (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      size="small"
                      checked={
                        selected[section.label]?.includes(option) || false
                      }
                      onChange={() => handleToggle(section.label, option)}
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  if (isMobile) {
    return (
      <>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 16,
            zIndex: 1000,
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          <FilterListIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{
            '& .MuiDrawer-paper': {
              width: 300,
            },
          }}
        >
          <FilterContent />
        </Drawer>
      </>
    );
  }

  return (
    <Box
      sx={{
        width: 300,
        zIndex: 1,
        bgcolor: '#fff',
        borderRight: '1px solid #e0e0e0',
      }}
    >
      <FilterContent />
    </Box>
  );
};

export default SidebarFilters;
