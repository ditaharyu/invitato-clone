"use client";

import { Box, Text, Image, Flex, Button, WrapItem, Wrap, Center } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="welcome_section">
      <Box
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="2rem"
        textAlign="center"
      >
        <Text fontWeight="bold" fontFamily="Poppins" color="black" fontSize="medium" textAlign="center">
          DEAR MR-MRS-MS,
          <br/>
          FAMILY & FRIENDS
        </Text>
        <Text padding="2rem 0" fontFamily="Butler" color="black" fontWeight="bold" textAlign="center" fontSize="3xl">
          Welcome to <br/>
          Tiffany & Jared’s <br/>
          Wedding Website
        </Text>
        <Text fontFamily="Newsreader" color="black">
          Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
        </Text>
        <Box paddingTop="2rem" justifyContent="center" alignItems="center">
          <Flex
            height="100%"
            direction="column"
            alignItems="center"
          >
            <Box>
              <Image
                height="400px"
                objectFit="cover"
                src="/photo-4.jpg"
                alt="couple"
                />
              {/* <Image
                height="400px"
                objectFit="cover"
                src="/photo-5.jpg"
                alt="couple"
                /> */}
            </Box>
            <Box paddingTop="1rem">
              <Button>Next</Button>
              <Button>Prev</Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
