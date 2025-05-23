import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

const CourseTabs = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
        aria-label="course tabs"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
          />
        ))}
      </Tabs>

      {tabs.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          hidden={activeTab !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
        >
          {activeTab === index && <Box sx={{ p: 1.5 }}></Box>}
        </div>
      ))}
    </Box>
  );
};

export default CourseTabs;
