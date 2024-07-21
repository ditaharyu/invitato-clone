"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="detail_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          backgroundColor="#F9F7F4"
          paddingTop="3rem"
          paddingBottom="4rem"
          textAlign="center">
          <Flex justifyContent="center">
            <Image
              width="50px"
              objectFit="cover"
              src="/quotes.svg"
              alt="quote"
              marginBottom="1rem"
            />
          </Flex>
          <Box padding="0 2rem">
            <Text fontFamily="Newsreader" fontWeight="300" fontSize="18px" color="grey" fontStyle="italic">
              “And of His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”
            </Text>
            <Text fontFamily="Poppins" fontWeight="700" fontSize="16px" paddingTop="2rem" letterSpacing={1.25}>
              - Q.S. AR-RUM: 21
            </Text>
          </Box>
        </Box>
        <Box padding="3rem 2rem">
          <Text fontFamily="Poppins" fontWeight="700" fontSize="16px" letterSpacing={1}>PLACE & TIME</Text>
          <Text fontFamily="Butler" fontWeight="300" fontSize="28px" padding=".5rem 0">Holy Matrimony</Text>
          <Text fontFamily="Newsreader" fontWeight="300" fontSize="18px">Date: Monday, 26 February 2024</Text>
          <Text fontFamily="Newsreader" fontWeight="300" fontSize="18px">Time: 10.00 WIB</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
