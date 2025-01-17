"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import GiftInfo from "./components/GiftInfo";

const Hero = (): JSX.Element => {
  return (
    <div id="giftcard_section">
      <Box
        height="280px"
        width="100%"
        backgroundImage="url('/photo-7.jpg')"
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
          <Text fontFamily="Butler" fontWeight="300" fontSize="28px" color="white">Wedding Gift</Text>
          <GiftInfo />
          {/* <Button padding="1rem 2rem" size="sm" border="1px solid black" borderRadius={0} backgroundColor="#F9F7F4">
            <Text fontFamily="Newsreader" fontWeight="100" fontSize="18px" fontStyle="italic">Send Gift</Text>
          </Button> */}
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
