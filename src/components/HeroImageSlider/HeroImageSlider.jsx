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
      }, 1000);
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
      className={`hero-image-container ${
        transitionType === 'slide' ? '' : transitionType + '-transition'
      }`}
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
            height: '100%',
            loading: 'eager',
            objectFit: 'contain',
            fetchpriority: 'high',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      ))}
    </Box>
  );
};

export default HeroImageSlider;
