"use client";

import { Box, Text, Image, Flex, Button, WrapItem, Wrap, Center } from "@chakra-ui/react";
import Carousel from "./components/Carousel";

const Hero = (): JSX.Element => {

  const images = [
    '/photo-1.jpg',
    '/photo-2.jpg',
    '/photo-3.jpg',
    '/photo-4.jpg',
    '/photo-5.jpg',
  ];
  const imageWidth = 250;
  const imageHeight = 400;

  return (
    <div id="welcome">
      <Box
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="3rem 2rem"
        textAlign="center"
      >
        <Text fontWeight="bold" fontFamily="Poppins" color="black" fontSize="14px" textAlign="center" letterSpacing="1px">
          DEAR MR-MRS-MS,
          <br/>
          FAMILY & FRIENDS
        </Text>
        <Text padding="2rem 0" lineHeight={1.25} fontFamily="Butler" color="black" fontWeight="bold" textAlign="center" fontSize="3xl">
          Welcome to <br/>
          Tiffany & Jared’s <br/>
          Wedding Website
        </Text>
        <Text fontFamily="Newsreader" fontWeight="300" fontSize="18px" color="gray" fontStyle="italic">
          Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
        </Text>
        <Box paddingTop="2rem" justifyContent="center" alignItems="center">
          <Flex
            height="100%"
            direction="column"
            alignItems="center"
          >
            <Box width="100%" margin="0 auto">
              <Carousel images={images} imageWidth={imageWidth} imageHeight={imageHeight} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
