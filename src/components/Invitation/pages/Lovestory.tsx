"use client";

import { Box, Text, Image, Flex, Link, Button, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CarouselText from "./components/CarouselText";

const Hero = (): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [mediaQuery] = useMediaQuery('(min-width: 1025px)');

  useEffect(() => {
    setIsDesktop(mediaQuery);
  }, [mediaQuery]);
  
  const story = [
    {
      date: '9 April 2018',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      date: '25 May 2018',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      date: '20 August 2018',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      date: '3 February 2023',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ];

  return (
    <div id="lovestory_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        padding="2rem"
        textAlign="center"
      >
        <Flex
          height="100%"
          direction="column"
          alignItems="center"
        >
          <Text
            fontFamily="Butler"
            fontWeight="600"
            fontSize="28px"
            textAlign="center"
            mb={4}
          >
            Tiffany & Jared are<br/>
            Getting Married!
          </Text>
          <Flex justifyContent="center" alignItems="center" position="relative">
            <Box position="relative">
              <Image
                width="280px"
                height="380px"
                src="/lines.svg"
                alt="lines"
                position="absolute"
                top="-40px"
                left={isDesktop? "-170px": "-115px"}
              />
              <Image
                height="330px"
                width="240px"
                objectFit="cover"
                src="/photo-5.jpg"
                alt="couple"
              />
            </Box>
          </Flex>
          <Link
            paddingTop="2rem"
            textDecoration="underline"
            fontWeight="bold"
            href="https://www.youtube.com/watch?v=WEC5RezD5jU" target="_blank">
            <Text letterSpacing={2}>WATCH OUR VIDEO</Text>
          </Link>
          <Box width="400px">
            <CarouselText items={story} />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
