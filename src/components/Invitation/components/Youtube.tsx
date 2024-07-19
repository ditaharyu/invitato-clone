"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="welcome_section">
      <Box
        height="280px"
        width="100%"
        backgroundImage="url('/photo-8.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        textAlign="center"
      >        
        <Flex
          height="100%"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="white">Live Streaming</Text>
          <Button>Send Gift</Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
