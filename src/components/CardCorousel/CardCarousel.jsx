import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CardCarousel.scss';

const CardCarousel = ({ cards }) => {
  const navigate = useNavigate();
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
              <img src={card.baseImage} alt="card-bg" className="base-image" />
              <IconButton className="bookmark-icon" aria-label="Save" size='small'>
                <BookmarkBorderIcon />
              </IconButton>
            </Box>

            <Box className="card-content">
              <Typography variant="h6" component="h2" className="card-title">
                {card.title}
              </Typography>
              <Typography variant="body1" className="card-description">
                {card.desc}
              </Typography>
            </Box>

            <Box className="card-footer">
              <Button
                variant="contained"
                className="watch-button"
                onClick={() => navigate(`/module/${card?.slug}`)}
              >
                WATCH NOW
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardCarousel;
