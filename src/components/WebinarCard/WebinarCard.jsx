import { AccessTime, CalendarToday, Translate } from '@mui/icons-material';
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
              <Typography variant="subtitle2" className="speaker">
                {webinar.speaker}
              </Typography>
              <Box className="info">
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <AccessTime sx={iconStyles} /> {webinar.time}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <CalendarToday sx={iconStyles} /> {webinar.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <Translate sx={iconStyles} /> {webinar.language}
                </Typography>
              </Box>
              <Button variant="contained" className="reserve-button">
                Reserve Your Seat
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WebinarCard;
