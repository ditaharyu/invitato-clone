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
        <Box
          paddingBottom="4rem"
          paddingTop="2rem">
          <Text fontFamily="Poppins" fontWeight="700" letterSpacing={1} marginBottom="1.5rem">
            OUR SINCERE,
          </Text>
          <Text fontFamily="Butler" fontWeight="light" fontSize="3xl">
            TIFFANY & JARED
          </Text>
          <Text fontFamily="Newsreader" fontWeight="300" fontSize="3xl" fontStyle="italic">
            #TImetoshaRE
          </Text>
        </Box>
        <Flex>
          <Image
            width="33%"
            height="160px"
            objectFit="cover"
            src="/photo-3.jpg"
            alt="couple"
          />
          <Image
            width="33%"
            height="160px"
            objectFit="cover"
            src="/photo-8.jpg"
            alt="couple"
          />
          <Image
            width="33%"
            height="160px"
            objectFit="cover"
            src="/photo-7.jpg"
            alt="couple"
          />
        </Flex>
        <Box
          padding="1.5rem"
          backgroundColor="#F9F7F4"
          fontFamily="Newsreader"
          fontWeight="100"
          fontSize="14px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center">
          <Link href="https://invitato.id/">
            <Image
              width="100px"
              objectFit="cover"
              src="/invitato.jpg"
              alt="couple"
              filter="grayscale(100%) brightness(0%)"
              marginBottom=".5rem"
            />
          </Link>
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
