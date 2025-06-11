import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import './HeroImageSlider.scss';

const HeroImageSlider = ({ images, transitionType = 'slide' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationState, setAnimationState] = useState('active');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState('transitioning');

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimationState('active');
      }, 1000); // Reduced from 2000 to 1000 for smoother transition timing
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getImageClass = (index) => {
    if (animationState === 'active') {
      return index === currentImageIndex ? 'active' : '';
    } else if (animationState === 'transitioning') {
      const nextIndex = (currentImageIndex + 1) % images.length;

      if (index === currentImageIndex) {
        return 'exiting';
      } else if (index === nextIndex) {
        return 'entering';
      }
      return '';
    }
    return '';
  };

  return (
    <Box 
      className={`hero-image-container ${transitionType === 'slide' ? '' : transitionType + '-transition'}`}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`Hero illustration ${index + 1}`}
          className={`hero-image ${getImageClass(index)}`}
          sx={{
            width: '100%',
            maxWidth: {
              xs: 400,
              sm: 500,
              md: 620,
            },
            // Additional MUI sx props for better integration
            objectFit: 'contain',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      ))}
    </Box>
  );
};

export default HeroImageSlider;