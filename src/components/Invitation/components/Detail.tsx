"use client";

import { Box, Text } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="welcome_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          backgroundColor="#F9F7F4"
          padding="4rem 2rem"
          textAlign="center">
          <Text>
            “And of His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”
          </Text>
          <Text>
            Q.S. AR-RUM: 21
          </Text>
        </Box>
        <Box padding="3rem 2rem">
          <Text>PLACE & TIME</Text>
          <Text>Holy Matrimony</Text>
          <Text>Date: Monday, 26 February 2024</Text>
          <Text>Time: 10.00 WIB</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
