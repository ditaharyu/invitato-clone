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
          <Text fontFamily="Butler" fontWeight="300" fontSize="28px" color="white">Live Streaming</Text>
          <Button padding="1rem 2rem" size="sm" border="1px solid black" borderRadius={0} backgroundColor="#F9F7F4">
            <Text fontFamily="Newsreader" fontWeight="100" fontSize="18px" fontStyle="italic">Open via Youtube</Text>
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
