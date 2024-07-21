"use client";

import { Box, Text, Image, Flex, Link, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Hero = (): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [mediaQuery] = useMediaQuery('(min-width: 1025px)');

  useEffect(() => {
    setIsDesktop(mediaQuery);
  }, [mediaQuery]);
  
  return (
    <div id="couple_section">
      <Box
        height="100%"
        width="100%"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="center"
        paddingTop="2rem"
        paddingBottom="3rem"
        textAlign="center"
      >
        <Flex
          height="100%"
          direction="column"
          alignItems="center"
        >
          <Text
            fontFamily="Poppins"
            fontWeight="700"
            color="black"
            fontSize="medium"
            textAlign="center"
            marginBottom="3rem"
            letterSpacing={2}
          >
            MEET THE BRIDE & GROOM
          </Text>
          <Flex justifyContent="center" alignItems="center" position="relative">
            <Box position="relative">
              <Image
                width="280px"
                height="380px"
                src="/lines.svg"
                alt="lines"
                position="absolute"
                top="-83px"
                left={isDesktop? "-170px": "-115px"}
              />
              <Image
                boxSize="280px"
                objectFit="cover"
                src="/photo-3.jpg"
                alt="couple"
              />
            </Box>
          </Flex>
          <Box paddingTop="3rem" paddingBottom="1rem">
            <Text fontFamily="Butler" fontWeight="light" fontSize="28px">TIFFANY SMITH</Text>
            <Link href="https://www.instagram.com/tiffanyinvitato">
              <Text fontFamily="Butler" fontWeight="light" fontSize="xl">@tiffanyinvitato</Text>
            </Link>
            <Text fontFamily="Newsreader" fontWeight="300" fontSize="18px" color="grey" fontStyle="italic">
              The Daughter of<br/>
              Mr. Smith & Mrs. Bellyna
            </Text>
          </Box>
          <Box paddingTop="2rem" paddingBottom="1rem">
            <Text fontFamily="Butler" fontWeight="light" fontSize="28px">ROBIN JARED LUCAS</Text>
            <Link href="https://www.instagram.com/jaredinvitato">
              <Text fontFamily="Butler" fontWeight="light" fontSize="xl">@jaredinvitato</Text>
            </Link>
            <Text fontFamily="Newsreader" fontWeight="300" fontSize="18px" color="grey" fontStyle="italic">
              The Son of<br/>
              Mr. Lucas & Mrs. Anita
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
