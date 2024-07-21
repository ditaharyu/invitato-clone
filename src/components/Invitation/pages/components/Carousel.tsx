import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

interface ImageSliderProps {
  images: string[];
  imageWidth: number;
  imageHeight: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, imageWidth, imageHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box width="100%">
      <Box position="relative" overflow="hidden" height={`${imageHeight}px`}>
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: `${images.length * imageWidth}px`,
            height: '100%',
            left: `calc(50% - ${currentIndex * imageWidth}px - ${imageWidth / 2}px)`,
          }}
        >
          {images.map((image, index) => {
            const isCurrent = index === currentIndex;
            return (
              <motion.img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                style={{
                  width: `${imageWidth}px`,
                  height: `${imageHeight}px`,
                  objectFit: 'cover',
                  margin: '0 5px',
                  zIndex: isCurrent ? 1 : 0,
                  position: 'relative',
                }}
                animate={{ scale: isCurrent ? 1.05 : 0.95 }}
                transition={{ duration: isCurrent ? 0.8 : 0 }}
              />
            );
          })}
        </motion.div>
      </Box>
      <Box display="flex" gap={2} justifyContent="end" marginTop="30px">
        <Button size="sm" padding="0 2rem" border="1px solid black" borderRadius={0} backgroundColor="#F9F7F4" onClick={handlePrev}>
          <ArrowBackIcon boxSize={5}/>
        </Button>
        <Button size="sm" padding="0 2rem" border="1px solid black" borderRadius={0} backgroundColor="#F9F7F4" onClick={handleNext}>
          <ArrowForwardIcon boxSize={5}/>
        </Button>
      </Box>
    </Box>
  );
};

export default ImageSlider;
