import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const SidebarFilters = ({ sections = [] }) => {
  const [selected, setSelected] = useState({});

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

  return (
    <Box
      sx={{
        width: '100%',
        p: 2,
        height: '100%',
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
        <Typography
          variant="body2"
          color="primary"
          onClick={clearAll}
          sx={{ cursor: 'pointer', fontWeight: 500 }}
        >
          Clear All
        </Typography>
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
};

export default SidebarFilters;
