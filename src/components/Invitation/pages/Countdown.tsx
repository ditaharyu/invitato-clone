"use client";

import { Box, Text } from "@chakra-ui/react";
import Timer from "./components/Timer";

const Hero = (): JSX.Element => {
  return (
    <div id="countdown_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="3rem 2rem 2rem 2rem"
        textAlign="center">
        <Text fontFamily="Newsreader" fontWeight="600" fontSize="18px">
          It will be a joy for us if you are still willing to give your blessing from afar. Thank you for all the words, prayers, and attention given.
        </Text>
        <Box paddingTop="2rem">
          <Timer />
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
