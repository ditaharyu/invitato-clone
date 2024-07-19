"use client";

import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="welcome_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="2rem"
        textAlign="center">
        <Text>
          It will be a joy for us if you are still willing to give your blessing from afar. Thank you for all the words, prayers, and attention given.
        </Text>
        <Box>
          Countdown Here
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
