import {
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Typography,
} from '@mui/material';
import galleryImage1 from '../../assets/galleryImage1.svg';
import galleryImage2 from '../../assets/galleryImage2.svg';
import galleryImage3 from '../../assets/galleryImage3.svg';
import galleryImage4 from '../../assets/galleryImage4.svg';
import galleryImage5 from '../../assets/galleryImage5.svg';
import theme from '../../utils/theme';

const CommunitySection = () => {
  const eventData = [
    {
      img: galleryImage1,
      title: 'GEN-AI MEET UP',
      location: 'MUMBAI',
      rows: 2,
      cols: 1,
    },
    {
      img: galleryImage2,
      title: 'MEET & GREET',
      location: 'HYDERABAD',
      rows: 2,
      cols: 1,
    },
    {
      img: galleryImage3,
      title: 'OFFLINE MEETUP',
      location: 'BENGALURU',
      rows: 2,
      cols: 2,
    },
    {
      img: galleryImage4,
      title: 'MEET & GREET',
      location: 'BENGALURU',
      rows: 2,
      cols: 1,
    },
    {
      type: 'text-card',
      rows: 2,
      cols: 1,
    },
    {
      img: galleryImage5,
      title: "CREATOR'S MEET UP",
      location: 'BENGALURU',
      rows: 1,
      cols: 2,
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: 'auto',
        textAlign: 'center',
        mt: theme.spacing(6),
        px: {
          xs: theme.spacing(2),
          sm: theme.spacing(3),
          md: theme.spacing(4),
        },
      }}
    >
      <Typography
        variant="h4"
        fontWeight={theme.typography.fontWeightBold}
        gutterBottom
      >
        Dive Into Our Community
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={theme.spacing(4)}>
        Learn Online, Connect Offline. Engage with other learners, alumni, and
        mentors and attend community sessions to learn from each other in our
        curated community.
      </Typography>

      <ImageList
        variant="quilted"
        cols={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
        rowHeight={160}
        sx={{
          width: '100%',
          margin: '0 auto',
        }}
      >
        {eventData.map((item, index) =>
          item.type === 'text-card' ? (
            <Box
              key={index}
              sx={{
                gridColumnEnd: `span ${item.cols}`,
                gridRowEnd: `span ${item.rows}`,
                bgcolor: theme.palette.primary.dark,
                color: theme.palette.common.white,
                borderRadius: theme.shape.borderRadius.medium,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                p: theme.spacing(2),
              }}
            >
              <Typography
                variant="h4"
                fontWeight={theme.typography.fontWeightBold}
                sx={{
                  fontSize: {
                    xs: '2rem',
                    sm: '2.5rem',
                    md: theme.typography.h4.fontSize,
                  },
                }}
              >
                58+
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: {
                    xs: theme.typography.caption.fontSize,
                    sm: theme.typography.body1.fontSize,
                  },
                }}
              >
                MEET UPS IN 8 CITIES
              </Typography>
            </Box>
          ) : (
            <ImageListItem
              key={item.img}
              cols={Math.max(1, item.cols || 1)}
              rows={Math.max(1, item.rows || 1)}
              sx={{
                borderRadius: theme.shape.borderRadius.medium,
                overflow: 'hidden',
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={`📍 ${item.location}`}
                position="bottom"
                sx={{
                  color: theme.palette.common.white,
                  '& .MuiImageListItemBar-title': {
                    fontWeight: theme.typography.fontWeightMedium,
                  },
                }}
              />
            </ImageListItem>
          )
        )}
      </ImageList>
    </Box>
  );
};

export default CommunitySection;
