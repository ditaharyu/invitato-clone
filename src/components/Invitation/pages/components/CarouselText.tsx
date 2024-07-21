// components/CarouselText.tsx
import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";

interface CarouselItem {
  date: string;
  text: string;
}

interface CarouselTextProps {
  items: CarouselItem[];
}

const CarouselText: React.FC<CarouselTextProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box textAlign="center" p={5}>
      <Box height="250px">
        <Text fontFamily="Butler" fontWeight="bold" fontSize="xl" mb={2}>
          {items[currentIndex].date}
        </Text>
        <Text fontFamily="Newsreader" fontWeight="400" fontSize="lg" mb={4}>
          {items[currentIndex].text}
        </Text>
      </Box>
      <Box display="flex" gap={2} justifyContent="center">
        <Button
          size="sm"
          padding="0 2rem"
          border="1px solid black"
          borderRadius={0}
          backgroundColor="#F9F7F4"
          onClick={handlePrev}
        >
          <ArrowBackIcon boxSize={5} />
        </Button>
        <Button
          size="sm"
          padding="0 2rem"
          border="1px solid black"
          borderRadius={0}
          backgroundColor="#F9F7F4"
          onClick={handleNext}
        >
          <ArrowForwardIcon boxSize={5} />
        </Button>
      </Box>
    </Box>
  );
};

export default CarouselText;
