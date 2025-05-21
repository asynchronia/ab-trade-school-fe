import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import './CardCarousel.scss';

const CardCarousel = ({ cards, speed = 30 }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let frameId;

    const scroll = () => {
      offset -= 1;
      if (Math.abs(offset) >= track.scrollWidth / 2) {
        offset = 0;
      }
      track.style.transform = `translateX(${offset}px)`;
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, [cards]);

  const loopedCards = [...cards, ...cards];

  return (
    <Box className="marquee-carousel-container">
      <Box className="marquee-carousel-track" ref={trackRef}>
        {loopedCards.map((card, index) => (
          <Box key={`${card.id}-${index}`} className="marquee-card">
            <Box className="card-image-container">
              <img src={card.baseImage} alt="" className="base-image" />
              <img src={card.overlayImage} alt="" className="overlay-image" />
              <IconButton className="bookmark-icon">
                <BookmarkBorderIcon />
              </IconButton>
            </Box>

            <Box className="card-content">
              <Typography variant="h5" className="card-title">
                {card.title}
              </Typography>
              <Typography variant="body1" className="card-description">
                {card.desc}
              </Typography>
            </Box>

            <Box className="card-footer">
              <Button variant="contained" className="watch-button">
                WATCH NOW
              </Button>
              <Box className="time-indicator">
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2">{card.time}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardCarousel;
