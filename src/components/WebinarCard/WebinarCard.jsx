import {
    AccessTime,
    CalendarToday,
    LocationOn,
    Translate,
} from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import './WebinarCard.scss';

const iconStyles = {
  fontSize: '1.2rem',
  color: '#555',
  marginRight: '8px',
  marginBottom: '4px',
};

const WebinarCard = ({ webinars }) => {
  return (
    <Box className="static-scroll webinar-carousel-container">
      <Box className="webinar-carousel-track">
        {webinars.map((webinar, index) => (
          <Box key={`${webinar.id}-${index}`} className="webinar-card">
            <Box className="image-container">
              <img src={webinar.image} alt="Overlay" className="image" />
            </Box>
            <Box className="card-body">
              <Typography variant="h6" className="title">
                {webinar.title}
              </Typography>
              <Typography variant="body2" className="desc">
                {webinar.description}
              </Typography>

              <Box className="info">
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}
                  >
                    <AccessTime sx={iconStyles} /> {webinar.time}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                  >
                    <Translate sx={iconStyles} /> {webinar.language}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}
                  >
                    <CalendarToday sx={iconStyles} /> {webinar.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                  >
                    {webinar.location === 'Online' ? (
                      <Typography
                      variant='body2'
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        <span className="online-badge"></span>{' '}
                        {webinar.location}
                      </Typography>
                    ) : (
                      <>
                        <LocationOn sx={iconStyles} /> {webinar.location}
                      </>
                    )}
                  </Typography>
                </Box>
              </Box>
              <Button variant="contained" className="reserve-button">
                Reserve Your Seat Now
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WebinarCard;
