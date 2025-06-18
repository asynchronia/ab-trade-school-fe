import { LocationOn } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import galleryImage1 from '../../assets/galleryImage1.webp';
import galleryImage2 from '../../assets/galleryImage2.webp';
import galleryImage3 from '../../assets/galleryImage3.webp';
import galleryImage4 from '../../assets/galleryImage4.webp';
import galleryImage5 from '../../assets/galleryImage5.jpg';
import ButtonTabs from '../../components/ButtonTabs/ButtonTabs';
import theme from '../../utils/theme';

const CommunitySection = () => {
  const eventData = [
    {
      id: 'gen-ai-mumbai',
      img: galleryImage1,
      title: 'GEN-AI MEET UP',
      location: 'MUMBAI',
      gridArea: 'gen-ai-mumbai',
    },
    {
      id: 'meet-greet-hyderabad',
      img: galleryImage2,
      title: 'MEET & GREET',
      location: 'HYDERABAD',
      gridArea: 'meet-greet-hyderabad',
    },
    {
      id: 'offline-bengaluru',
      img: galleryImage3,
      title: 'OFFLINE MEETUP',
      location: 'BENGALURU',
      gridArea: 'offline-bengaluru',
    },
    {
      id: 'meet-greet-bengaluru',
      img: galleryImage4,
      title: 'MEET & GREET',
      location: 'BENGALURU',
      gridArea: 'meet-greet-bengaluru',
    },
    {
      id: 'stats-card',
      type: 'text-card',
      gridArea: 'stats-card',
    },
    {
      id: 'creators-meetup',
      img: galleryImage5,
      title: "CREATOR'S MEET UP",
      location: 'BENGALURU',
      gridArea: 'creators-meetup',
    },
  ];

  const tabLabels = [
    'Meet Ups',
    'Recreational Brunches',
    'Townhalls',
    'Convocations',
    'Offline Masterclasses',
  ];

  const [selectedTab, setSelectedTab] = useState(tabLabels[0]);

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        textAlign: 'center',
        py: theme.spacing(6),
        px: {
          xs: theme.spacing(1),
          sm: theme.spacing(3),
          md: theme.spacing(4),
        },
      }}
    >
      <Typography
        variant="h4"
        fontWeight={theme.typography.fontWeightBold}
        gutterBottom
        sx={{ mb: theme.spacing(2) }}
      >
        Dive Into Our Community
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          mb: theme.spacing(4),
          maxWidth: 800,
          mx: 'auto',
          lineHeight: 1.6,
        }}
      >
        Learn Online, Connect Offline. Engage with other learners, alumni, and
        mentors and attend community sessions to learn from each other in our
        curated community.
      </Typography>

      {/* Tab Navigation */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          mb: theme.spacing(4),
        }}
      >
        <ButtonTabs
          tabs={tabLabels}
          selectedTab={selectedTab}
          onSelect={setSelectedTab}
        />
      </Box>

      {/* Grid Container */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gridTemplateRows: {
            xs: 'auto',
            md: 'repeat(3, 200px)',
          },
          gridTemplateAreas: {
            xs: `
    "gen-ai-mumbai meet-greet-hyderabad"
    "gen-ai-mumbai meet-greet-bengaluru"
    "stats-card meet-greet-bengaluru"
    "offline-bengaluru offline-bengaluru"
    "creators-meetup creators-meetup"
  `,
            md: `
    "gen-ai-mumbai meet-greet-hyderabad offline-bengaluru offline-bengaluru"
    "gen-ai-mumbai meet-greet-bengaluru offline-bengaluru offline-bengaluru"
    "stats-card meet-greet-bengaluru creators-meetup creators-meetup"
  `,
          },
          gap: theme.spacing(1),
          width: '100%',
        }}
      >
        {eventData.map((item) =>
          item.type === 'text-card' ? (
            <Box
              key={item.id}
              sx={{
                gridArea: item.gridArea,
                bgcolor: '#370852',
                color: theme.palette.common.white,
                borderRadius: theme.shape.borderRadius?.medium || 2,
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'end',
                flexDirection: 'column',
                textAlign: 'left',
                p: theme.spacing(3),
                minHeight: {
                  xs: 150,
                  md: 'auto',
                },
              }}
            >
              <Typography
                variant="h3"
                fontWeight={theme.typography.fontWeightBold}
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3rem',
                    md: '3.5rem',
                  },
                  lineHeight: 1,
                  mb: theme.spacing(1),
                }}
              >
                58+
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: {
                    xs: theme.typography.body2.fontSize,
                    // sm: theme.typography.body1.fontSize,
                  },
                  //   fontWeight: theme.typography.fontWeightMedium,
                  textAlign: 'center',
                }}
              >
                MEET UPS IN 8 CITIES
              </Typography>
            </Box>
          ) : (
            <Box
              key={item.id}
              sx={{
                gridArea: item.gridArea,
                position: 'relative',
                borderRadius: theme.shape.borderRadius?.medium || 2,
                overflow: 'hidden',
                minHeight: { xs: 200, md: 'auto' },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  px: theme.spacing(2),
                  py: theme.spacing(1),
                  color: theme.palette.common.white,
                  bgcolor: 'rgba(0,0,0,0.5)',
                  zIndex: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '10px',
                      sm: theme.typography.body2.fontSize,
                    },
                    mb: theme.spacing(0.5),
                    textAlign: 'left',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: {
                      xs: '10px',
                      sm: theme.typography.body2.fontSize,
                    },
                  }}
                >
                  <LocationOn fontSize="16px" sx={{ mr: 0.75 }} />{' '}
                  {item.location}
                </Typography>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default CommunitySection;
