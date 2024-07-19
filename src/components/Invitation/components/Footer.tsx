"use client";

import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

const Hero = (): JSX.Element => {
  return (
    <div id="welcome_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        textAlign="center">
        <Box padding="2rem">
          <Text>
            OUR SINCERE,
          </Text>
          <Text>
            TIFFANY & JARED
          </Text>
          <Text>
            #TImetoshaRE
          </Text>
        </Box>
        <Flex>
          <Image
            width="33%"
            height="125px"
            objectFit="cover"
            src="/photo-3.jpg"
            alt="couple"
          />
          <Image
            width="33%"
            height="125px"
            objectFit="cover"
            src="/photo-8.jpg"
            alt="couple"
          />
          <Image
            width="33%"
            height="125px"
            objectFit="cover"
            src="/photo-7.jpg"
            alt="couple"
          />
        </Flex>
        <Box backgroundColor="#F9F7F4">
          <Link href="https://invitato.id/">
            <Text>Created with Love by Invitato</Text>
          </Link>
          <Link href="https://www.youtube.com/watch?v=imq9Sea2uq0">
            <Text>Song by So Far, So Good - Don Williams</Text>
          </Link>
          <Text>© 2024 Tiffany & Jared. All Rights Reserved</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
